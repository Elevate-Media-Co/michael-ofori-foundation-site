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
    bio: [
      "Dr. Michael K. Ofori is an anesthesiologist based in Phoenix, Arizona. He earned his medical degree at Dartmouth and trained in surgery at Emory University School of Medicine before completing his anesthesiology residency at Tulane University.",
      "He founded the Michael Ofori M.D. Foundation to expand access to healthcare education and essential medical resources. The Foundation’s priorities reflect both sides of delivering care: helping future medical and dental professionals continue their education and helping community hospitals and clinics access the equipment and supplies their teams need.",
    ],
    photo: foundation.founderPortrait,
    photoPosition: "50% 12%",
  },
  {
    name: "Emelia Kettey",
    role: "Director & Treasurer",
    initials: "EK",
    bio: [
      "Originally from Ghana, Emelia Kettey is an entrepreneur based in Scottsdale, Arizona. She owns Kettey’s Beauty LLC, a personal care business rooted in Ghanaian shea butter, and has worked in fashion design through Kettey’s International Fashion.",
      "She has a background in nursing and founded Kettey’s Exchange for Children and Women’s Resources, an organization dedicated to supporting women and children facing hardship. She serves as Director and Treasurer of the Michael Ofori M.D. Foundation.",
    ],
    linkedIn: "https://www.linkedin.com/in/emelia-kettey",
    photo: "/images/emelia-kettey.webp",
    photoPosition: "50% 0%",
  },
];
