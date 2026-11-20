export type Photo = { src: string; alt: string; position?: string };

export const photos = {
  hero: {
    src: "/images/clinical-care.webp",
    alt: "A clinician reviews a chart with a patient in a clinic",
    position: "56% 43%",
  },
  team: {
    src: "/images/healthcare-team.webp",
    alt: "Doctors and nurses standing together in a hospital corridor",
    position: "50% 39%",
  },
  education: {
    src: "/images/medical-education.webp",
    alt: "Three clinicians in white coats reviewing research together",
    position: "50% 27%",
  },
  equipment: {
    src: "/images/hospital-equipment.webp",
    alt: "Medical equipment beside a hospital bed",
    position: "50% 52%",
  },
  resources: {
    src: "/images/clinic-supplies.webp",
    alt: "Shelves stocked with medical supplies",
    position: "50% 67%",
  },
  community: {
    src: "/images/community-care.webp",
    alt: "A clinician in teal scrubs reviewing a document on a clipboard",
    position: "62% 43%",
  },
} satisfies Record<string, Photo>;
