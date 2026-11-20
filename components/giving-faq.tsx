import { Plus } from "lucide-react";
import Link from "next/link";

export function GivingFaq({ checkoutAvailable }: { checkoutAvailable: boolean }) {
  const items = [
    {
      question: "What does the Foundation support?",
      answer: <>The Foundation focuses on medical and dental education, equipment for community hospitals, essential supplies for underserved healthcare facilities, and community health education. <Link className="text-link" href="/programs">Explore our programs</Link>.</>,
    },
    {
      question: "Can I give online today?",
      answer: checkoutAvailable
        ? <>Use the <a className="text-link" href="#donate">giving panel</a> to open the Foundation’s hosted donation page, where you can confirm the available giving options.</>
        : <>Online giving is being set up. The giving panel lets you preview a one-time or monthly gift. <Link className="text-link" href="/contact?inquiry=giving">Contact the Foundation about giving</Link>.</>,
    },
    {
      question: "Can my organization offer equipment or supplies?",
      answer: <>Please <Link className="text-link" href="/contact?inquiry=resources">describe what you would like to provide</Link>, including the type, condition, quantity, and location. The Foundation can discuss whether it fits a facility’s needs.</>,
    },
    {
      question: "Where can I learn about the Foundation’s work and leadership?",
      answer: <>Visit <Link className="text-link" href="/impact">Impact & Transparency</Link> for reporting priorities and <Link className="text-link" href="/board-of-directors">Board of Directors</Link> to meet the Foundation’s leadership.</>,
    },
  ];

  return (
    <section className="band tint" id="giving-faq">
      <div className="wrap involvement-grid">
        <div><p className="eyebrow">Giving & Support</p><h2>Common questions.</h2></div>
        <div className="giving-faq">
          {items.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<Plus size={19} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
