import { PageIntro } from "@/components/editorial";
import { UpdateCard } from "@/components/foundation-updates";
import { pageMetadata } from "@/lib/metadata";
import { foundationUpdates } from "@/lib/updates";

const description = "Read the Foundation’s articles and updates on healthcare education, medical resources, and community involvement.";
export const metadata = pageMetadata("News & Updates", description, "/updates");

export default function UpdatesPage() {
  return (
    <>
      <PageIntro label="Foundation News" title="Latest news & updates" summary={description} />
      <section className="band" aria-labelledby="updates-list-title">
        <h2 id="updates-list-title" className="sr-only">Articles and updates</h2>
        <ul className="wrap update-grid updates-index">
          {foundationUpdates.map(update => <UpdateCard key={update.slug} update={update} />)}
        </ul>
      </section>
    </>
  );
}
