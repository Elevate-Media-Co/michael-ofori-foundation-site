import { foundation } from "./site";

type BoardMember = {
  name: string;
  role: string;
  initials: string;
  bio?: readonly string[];
  linkedIn?: string;
  photo?: string;
  photoPosition?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: foundation.founder,
    role: "Founder",
    initials: "MO",
    bio: ["Dr. Ofori is a physician in anesthesiology. He founded the Foundation to help expand access to healthcare education, equipment, and essential medical supplies."],
    photo: foundation.founderPortrait,
    photoPosition: "50% 12%",
  },
  {
    name: "Emelia Kettey",
    role: "Director & Treasurer",
    initials: "EK",
    bio: [
      "Originally from Ghana, Emelia Kettey is an entrepreneur based in Scottsdale, Arizona. She owns Kettey’s Beauty LLC, a personal care business rooted in Ghanaian shea butter, and has worked in fashion design through Kettey’s International Fashion.",
      "She also founded Kettey’s Exchange for Children and Women’s Resources, an organization dedicated to supporting women and children facing hardship.",
    ],
    linkedIn: "https://www.linkedin.com/in/emelia-kettey",
    photo: "/images/emelia-kettey.webp",
    photoPosition: "50% 0%",
  },
];
