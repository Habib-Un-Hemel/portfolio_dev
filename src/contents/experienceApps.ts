export interface ExperienceApp {
  name: string;
  image: string;
  description: string;
  playStoreLink?: string;
}

export const experienceApps: ExperienceApp[] = [
  {
    name: "Supplier Connect",
    image: "/projects/supplier_connect_1.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=asia.ifarmer.supplier",
    description:
      "Public-facing supply chain platform for suppliers. Built 40+ APIs and wrote roughly 90% of the backend from scratch, digitizing workflows that were previously manual.",
  },
  {
    name: "iharvst - Investor App",
    image: "/experience/investor.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=asia.ifarmer.investor",
    description:
      "Backend for the Treasury Bill (T-Bill) investment feature, built in partnership with Prime Bank Investment PLC (PBIL) - covering scheme discovery, KYC, booking, payment proof submission, investment confirmation, and profit/principal disbursement, as part of iFarmer's shift from a fundraising app to a full investment platform.",
  },
  {
    name: "KriShop (Retailer App)",
    image: "/experience/retailer.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=asia.ifarmer.retailer",
    description:
      "Built a points-based rewards system with a daily cron job that computes winners and automatically emails the head office team to arrange the winner's gift.",
  },
  {
    name: "iFarmer Sofol",
    image: "/experience/sofol.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=asia.ifarmer.ifarmersofol",
    description:
      "iFarmer's fintech app. Built the incentive-calculation system for collecting loan repayments from farmers through market facilitators - a heavy computation pipeline handling roughly 100 crore in monthly transactions.",
  },
  {
    name: "Folon - Farmers App",
    image: "/experience/farmers.png",
    playStoreLink: "https://play.google.com/store/apps/details?id=asia.ifarmer.farmers",
    description:
      "Backend for multiple farmer-facing features: live-stream education seminars, advisory dose alerts, and the advisory package purchase system for farming knowledge.",
  },
];
