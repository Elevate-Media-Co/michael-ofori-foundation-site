import Link from "next/link";

export function MissionActions() {
  return (
    <section className="mission-actions" aria-label="Give or volunteer">
      <div className="wrap mission-actions-grid">
        <div className="mission-action-give">
          <p className="eyebrow">Make an Impact</p>
          <h2>Give future care teams a head start</h2>
          <p>Your support can help students continue their training and put essential resources within reach of hospitals and clinics.</p>
          <Link className="button button-light" href="/get-involved#donate">Explore giving</Link>
        </div>
        <div className="mission-action-volunteer">
          <p className="eyebrow">Join Our Mission</p>
          <h2>Become a volunteer</h2>
          <p>Tell us how you could help, from teaching or organizing supplies to planning community events.</p>
          <Link className="button button-primary" href="/get-involved#volunteer">Explore volunteering</Link>
        </div>
      </div>
    </section>
  );
}
