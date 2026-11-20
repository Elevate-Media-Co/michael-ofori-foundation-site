import { foundation } from "./site";

type BoardMember = {
  name: string;
  role: string;
  initials: string;
  bio?: string;
  photo?: string;
  photoPosition?: string;
};

export const boardMembers: BoardMember[] = [
  {
    name: foundation.founder,
    role: "Founder",
    initials: "MO",
    bio: "Dr. Ofori is a physician in anesthesiology. He founded the Foundation to help expand access to healthcare education, equipment, and essential medical supplies.",
    photo: foundation.founderPortrait,
    photoPosition: "50% 12%",
  },
  {
    name: "Emelia Kettey",
    role: "Director & Treasurer",
    initials: "EK",
    photo: "/images/emelia-kettey.webp",
    photoPosition: "50% 0%",
  },
];
