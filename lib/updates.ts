import { photos, type Photo } from "./photos";

export type FoundationUpdate = {
  slug: string;
  category: string;
  title: string;
  summary: string;
  photo: Photo;
  sections: readonly { heading: string; body: string }[];
  action: { label: string; href: string };
  source?: { label: string; href: string };
};

export const foundationUpdates: readonly FoundationUpdate[] = [
  {
    slug: "staying-in-healthcare-training",
    category: "Healthcare education",
    title: "What helps a student stay in training?",
    summary: "Staying on track toward graduation can depend on practical support at the right time.",
    photo: photos.education,
    sections: [
      {
        heading: "Look beyond tuition",
        body: "For an aspiring clinician, the cost of school can include books, supplies, transportation, and living expenses. A student who has already made it through years of study can still face a funding gap when the next term begins.",
      },
      {
        heading: "Keep the next step in view",
        body: "One of the Foundation’s priorities is education for future medical and dental professionals. An inquiry can start with the student’s program, where they are in training, and what practical support would help them continue.",
      },
    ],
    action: { label: "Explore educational support", href: "/programs#education" },
    source: {
      label: "AAMC guide to medical school planning and budgeting",
      href: "https://students-residents.aamc.org/media/6316/download",
    },
  },
  {
    slug: "thoughtful-equipment-donations",
    category: "Medical equipment",
    title: "What makes an equipment donation useful?",
    summary: "A useful contribution starts with what the receiving care team needs and can maintain.",
    photo: photos.equipment,
    sections: [
      {
        heading: "Start with the receiving team",
        body: "A clinic or hospital can explain what it needs, where the equipment would be used, and who would operate it. That conversation helps a donor understand whether the offer suits the facility’s services and setting.",
      },
      {
        heading: "Think through the years of use",
        body: "Before a transfer, the receiving team and donor should discuss condition, compatibility, supplies, training, and maintenance. These questions help identify what would allow the recipient to put the equipment into service and keep it useful over time.",
      },
    ],
    action: { label: "Discuss equipment or supplies", href: "/contact?inquiry=resources" },
    source: {
      label: "WHO guidance on medical device donations",
      href: "https://www.who.int/publications/i/item/9789240093621",
    },
  },
  {
    slug: "volunteering-with-purpose",
    category: "Volunteering",
    title: "How your skills could support the mission",
    summary: "From teaching to organizing resources, volunteers can bring practical skills to community health work.",
    photo: photos.community,
    sections: [
      {
        heading: "Consider what you can offer",
        body: "Educational experience, event planning, communications, or logistical skills can all be relevant to a healthcare nonprofit. Start with a specific skill you would enjoy using and the time you can realistically give.",
      },
      {
        heading: "Start with a conversation",
        body: "Tell the Foundation what interests you, what you have done before, and when you are available. That gives both sides a way to explore how your interests might fit upcoming opportunities.",
      },
    ],
    action: { label: "Explore volunteering", href: "/get-involved#volunteer" },
  },
];
