export type Photo = { src: string; alt: string; position?: string };

export const photos = {
  hero: {
    src: "/images/hopeful-care-team.webp",
    alt: "A team of doctors and nurses standing together in a bright hospital corridor",
    position: "60% 27%",
  },
  team: {
    src: "/images/physician-on-campus.webp",
    alt: "A smiling physician in a white coat outdoors on a university campus",
    position: "58% 34%",
  },
  education: {
    src: "/images/students-in-classroom.webp",
    alt: "Three smiling students with books and backpacks in a bright classroom",
    position: "50% 35%",
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
    src: "/images/community-volunteers.webp",
    alt: "Four volunteers smiling together in front of a van",
    position: "52% 40%",
  },
} satisfies Record<string, Photo>;
