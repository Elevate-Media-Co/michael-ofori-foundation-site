import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/editorial";
import { pageMetadata } from "@/lib/metadata";
import { foundationUpdates } from "@/lib/updates";

type UpdateRoute = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return foundationUpdates.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: UpdateRoute) {
  const { slug } = await params;
  const update = foundationUpdates.find(entry => entry.slug === slug);
  if (!update) notFound();
  return pageMetadata(update.title, update.summary, `/updates/${slug}`);
}

export default async function UpdatePage({ params }: UpdateRoute) {
  const { slug } = await params;
  const update = foundationUpdates.find(entry => entry.slug === slug);
  if (!update) notFound();

  return (
    <article>
      <PageIntro label={update.category} title={update.title} summary={update.summary} photo={update.photo} />
      <div className="wrap legal update-article">
        {update.sections.map(({ heading, body }) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        {update.source && (
          <p className="update-source">
            <a className="text-link" href={update.source.href}>{update.source.label}</a>
          </p>
        )}
        <div className="actions">
          <Link href={update.action.href} className="button button-primary">{update.action.label}</Link>
          <Link href="/updates" className="button button-outline">Back to updates</Link>
        </div>
      </div>
    </article>
  );
}
