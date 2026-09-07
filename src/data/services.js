/**
 * Services Data
 *
 * Reusable service objects for the visa consultancy website.
 */

const services = [
  {
    title: "Study Visa",
    slug: "study-visa",
    description: "Guidance for students planning international education and visa applications.",
    icon: "GraduationCap",
    features: [
      "Destination guidance",
      "Documentation guidance",
      "Application preparation",
      "Visa documentation support",
      "Interview preparation",
      "Pre-departure guidance",
    ],
    route: "/study-visa",
  },
  {
    title: "Visit Visa",
    slug: "visit-visa",
    description: "Professional guidance for tourism, family visits, and short-term international travel.",
    icon: "Plane",
    features: [
      "Tourism guidance",
      "Family visit support",
      "Short-term travel planning",
      "Documentation assistance",
      "Application submission",
    ],
    route: "/visit-visa",
  },
  {
    title: "Work Visa",
    slug: "work-visa",
    description: "General guidance for employment-related visa pathways and application preparation.",
    icon: "Briefcase",
    features: [
      "Employment pathway guidance",
      "Documentation support",
      "Application preparation",
      "Interview coaching",
    ],
    route: "/work-visa",
  },
  {
    title: "Business Visa",
    slug: "business-visa",
    description: "Support for business meetings, conferences, professional events, and international travel.",
    icon: "Building",
    features: [
      "Business meeting support",
      "Conference guidance",
      "Professional event planning",
      "Travel arrangements",
    ],
    route: "/business-visa",
  },
  {
    title: "Family Visa",
    slug: "family-visa",
    description: "General guidance for eligible family and dependent visa pathways.",
    icon: "Users",
    features: [
      "Family pathway guidance",
      "Dependent application support",
      "Spouse/family documentation",
      "Eligibility assessment",
    ],
    route: "/family-visa",
  },
  {
    title: "Immigration",
    slug: "immigration",
    description: "Explore potential long-term relocation and immigration pathways.",
    icon: "Globe",
    features: [
      "Skilled migration consultation",
      "Family migration guidance",
      "Business migration advice",
      "Long-term relocation planning",
    ],
    route: "/immigration",
  },
];

export default services;