"use client";

import { ArrowLeft, HandHeart, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

const frequencies = [
  { id: "once", label: "One time", amounts: [25, 50, 100, 250], defaultAmount: "50" },
  { id: "monthly", label: "Monthly", amounts: [10, 25, 50, 100], defaultAmount: "25" },
] as const;

const dollars = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

function parseAmount(value: string) {
  const cleaned = value.trim();
  if (!/^(?:\d+(?:\.\d{1,2})?|\.\d{1,2})$/.test(cleaned)) return null;
  const cents = Math.round(Number(cleaned) * 100);
  return Number.isSafeInteger(cents) && cents > 0 ? cents : null;
}

export function DonationPanel({ checkoutUrl }: { checkoutUrl?: string }) {
  const [frequency, setFrequency] = useState<(typeof frequencies)[number]["id"]>("once");
  const [amount, setAmount] = useState<string>("50");
  const [custom, setCustom] = useState("");
  const [error, setError] = useState(false);
  const [review, setReview] = useState<number | null>(null);
  const title = useRef<HTMLHeadingElement>(null);
  const customField = useRef<HTMLInputElement>(null);
  const focusTitle = useRef(false);
  const selected = frequency === "monthly" ? frequencies[1] : frequencies[0];

  useEffect(() => {
    if (focusTitle.current) {
      title.current?.focus();
      focusTitle.current = false;
    }
  }, [review]);

  function changeFrequency(next: (typeof frequencies)[number]) {
    setFrequency(next.id);
    setAmount(next.defaultAmount);
    setError(false);
  }

  function reviewGift(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cents = parseAmount(amount === "custom" ? custom : amount);
    if (cents === null) {
      setError(true);
      customField.current?.focus();
      return;
    }
    focusTitle.current = true;
    setReview(cents);
  }

  return (
    <div className="giving-card donation-panel">
      <div className="donation-heading">
        <HandHeart size={29} strokeWidth={1.5} aria-hidden="true" />
        <h3 ref={title} tabIndex={-1}>{review === null ? "Choose your gift" : "Review your gift"}</h3>
      </div>
      {!checkoutUrl && (
        <p className="donation-notice">Donation preview. Online payments are currently unavailable.</p>
      )}

      {review === null ? (
        <form className="donation-form" onSubmit={reviewGift} noValidate>
          <fieldset>
            <legend>Giving frequency</legend>
            <div className="gift-options gift-frequency">
              {frequencies.map((option) => (
                <label key={option.id}>
                  <input className="sr-only" type="radio" name="giving-frequency" value={option.id} checked={frequency === option.id} onChange={() => changeFrequency(option)} />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend>Gift amount <span className="gift-currency">USD</span></legend>
            <div className="gift-options gift-amounts">
              {selected.amounts.map((value) => (
                <label key={value}>
                  <input className="sr-only" type="radio" name="giving-amount" value={value} checked={amount === String(value)} onChange={() => { setAmount(String(value)); setError(false); }} />
                  <span>${value}</span>
                </label>
              ))}
              <label>
                <input className="sr-only" type="radio" name="giving-amount" value="custom" checked={amount === "custom"} onChange={() => { setAmount("custom"); setError(false); }} />
                <span>Other</span>
              </label>
            </div>
          </fieldset>
          {amount === "custom" && (
            <div className="field gift-custom">
              <label htmlFor="gift-custom-amount">Custom amount in US dollars</label>
              <input
                ref={customField}
                id="gift-custom-amount"
                inputMode="decimal"
                value={custom}
                aria-invalid={error || undefined}
                aria-describedby={error ? "gift-amount-error" : undefined}
                onChange={(event) => { setCustom(event.target.value); setError(false); }}
                placeholder="e.g. 75.00"
              />
              {error && <p id="gift-amount-error" role="alert" className="field-error">Enter an amount above $0 with up to two decimal places.</p>}
            </div>
          )}
          <button type="submit" className="button button-primary gift-primary">Review gift</button>
        </form>
      ) : (
        <div className="gift-review">
          <dl className="gift-summary">
            <div><dt>Gift amount</dt><dd>{dollars.format(review / 100)} USD</dd></div>
            <div><dt>Giving frequency</dt><dd>{selected.label}</dd></div>
          </dl>
          <button
            type="button"
            className="text-link gift-edit"
            onClick={() => { focusTitle.current = true; setReview(null); }}
          >
            <ArrowLeft size={16} aria-hidden="true" /> Edit gift
          </button>
          <div className="gift-checkout">
            <LockKeyhole size={20} aria-hidden="true" />
            <div>
              <h4>Donor and payment details</h4>
              <p>{checkoutUrl
                ? "You’ll choose your gift amount and frequency again, then enter contact and payment details on the Foundation’s hosted donation page."
                : "When online giving opens, contact and payment details will be entered on the hosted checkout. Your selections are for preview only."}</p>
            </div>
          </div>
          {checkoutUrl ? (
            <a href={checkoutUrl} className="button button-primary gift-primary">Continue to hosted checkout</a>
          ) : (
            <Link href="/contact?inquiry=giving" className="button button-outline gift-primary">Ask about giving</Link>
          )}
        </div>
      )}
    </div>
  );
}
