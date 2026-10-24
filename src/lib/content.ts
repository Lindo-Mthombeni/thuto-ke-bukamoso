import {
  Code2,
  Handshake,
  Heart,
  Lightbulb,
  Monitor,
  Rocket,
  Trophy,
  UserRound,
  Users,
} from "lucide-react";

export const site = {
  name: "THUTO KE BOKAMOSO",
  slogan: "Skills Today • Brighter Tomorrow",
  subTagline: "Empowered Children, Brighter Futures",
  phone: "081 098 6633",
  phoneHref: "tel:0810986633",
  email: "education@tksrradio.co.za",
  emailHref: "mailto:education@tksrradio.co.za",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/programs" },
  { label: "Curriculum", href: "/curriculum" },
  { label: "Benefits", href: "/benefits" },
  { label: "Contact", href: "/contact" },
];

export const programs = [
  {
    icon: Handshake,
    title: "We partner with ECDs",
    description:
      "Working together with Early Childhood Development centres to bring digital skills to more children.",
  },
  {
    icon: UserRound,
    title: "We also do individual teaching",
    description:
      "Personalised support to help every child learn and grow at their own pace.",
  },
];

export const curriculum = [
  {
    icon: Code2,
    title: "How to Code",
    description: "Fun, hands-on coding for young minds.",
  },
  {
    icon: Monitor,
    title: "Computer Literacy",
    description: "Essential digital skills for life.",
  },
  {
    icon: Users,
    title: "Classes",
    description:
      "Interactive and engaging classes designed for children aged 5 – 10 years.",
  },
];

export const benefits = [
  {
    icon: Trophy,
    title: "Builds Confidence",
    description: "Children grow brave enough to try, fail, and try again.",
  },
  {
    icon: Lightbulb,
    title: "Develops Problem-Solving Skills",
    description: "Breaking big challenges into small, solvable steps.",
  },
  {
    icon: Rocket,
    title: "Prepares for a Brighter Future",
    description: "Digital foundations that open doors for years to come.",
  },
  {
    icon: Heart,
    title: "Fun and Engaging Learning",
    description: "Playful lessons that children look forward to every week.",
  },
];
