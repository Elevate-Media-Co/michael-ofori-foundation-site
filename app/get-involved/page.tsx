import { BookOpen, HeartHandshake, UsersRound } from "lucide-react";
import Link from "next/link";
import { PageIntro } from "@/components/editorial";
import { DonationPanel } from "@/components/donation-panel";
import { GivingFaq } from "@/components/giving-faq";
import { publicDetails } from "@/lib/config";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata("Get Involved", "Find out how to support the Foundation through giving, partnerships, volunteering, or educational assistance.", "/get-involved");

const opportunities = [
  { id: "partnerships", title: "Become a partner", icon: HeartHandshake, description: "We welcome inquiries from hospitals, clinics, educational institutions, and community organizations. Tell us about a specific need or a project you would like to explore together.", inquiry: "partnership", action: "Ask about partnering" },
  { id: "volunteer", title: "Volunteer or collaborate", icon: UsersRound, description: "If you have clinical, educational, logistical, or nonprofit expertise to share, tell us what you could contribute and where you are able to help.", inquiry: "volunteer", action: "Share your interest" },
  { id: "support-education", title: "Support healthcare education", icon: BookOpen, description: "Talk with the Foundation about ways to assist medical and dental students, including educational resources and other forms of support.", inquiry: "education", action: "Discuss educational support" },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro label="Get Involved" title="Bring what you can to the work." summary="Help expand access to healthcare education and essential medical resources through giving, partnership, or your expertise." />
      <section id="donate" className="band tint">
        <div className="wrap giving-grid">
          <div>
            <p className="eyebrow">Support Our Mission</p>
            <h2>Give to the Foundation.</h2>
            <p className="lead">Your support can help meet educational needs and make essential equipment and supplies more accessible to healthcare facilities.</p>
            <a className="text-link giving-faq-link" href="#giving-faq">Giving questions</a>
          </div>
          <DonationPanel checkoutUrl={publicDetails.donation} />
        </div>
      </section>
      <section className="band">
        <div className="wrap involvement-grid">
          <div><p className="eyebrow">Work With Us</p><h2>Other ways to contribute.</h2></div>
          <div className="opportunities-list">
            {opportunities.map(({ id, title, description, inquiry, action, icon: Icon }) => (
              <section id={id} key={id}>
                <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <Link className="text-link" href={`/contact?inquiry=${inquiry}`}>{action}</Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <GivingFaq checkoutAvailable={Boolean(publicDetails.donation)} />
    </>
  );
}
