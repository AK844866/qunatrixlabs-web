import { Metadata } from "next";
import ServicesContent from "./ServicesContent";

export const metadata: Metadata = {
  title: "Our Services | Qunatrix Labs",
  description: "Explore our extensive technology portfolio. From deep-tech blockchain smart contracts to specialized enterprise ERP/CRM workflows and custom hardware/POS integrations.",
  openGraph: {
    title: "Our Services | Qunatrix Labs",
    description: "Explore our extensive technology portfolio. From deep-tech blockchain smart contracts to specialized enterprise ERP/CRM workflows and custom hardware/POS integrations.",
    type: "website",
    url: "https://qunatrixlabs.com/services",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Qunatrix Labs",
    description: "Explore our extensive technology portfolio. From deep-tech blockchain smart contracts to specialized enterprise ERP/CRM workflows and custom hardware/POS integrations.",
  }
};

export default function ServicesPage() {
  return <ServicesContent />;
}
