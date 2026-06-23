import { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | Qunatrix Labs",
  description: "Explore our successful projects in Blockchain, Enterprise ERP/CRM, Logistics tracking, IoT, and Healthcare software engineering.",
  openGraph: {
    title: "Case Studies | Qunatrix Labs",
    description: "Explore our successful projects in Blockchain, Enterprise ERP/CRM, Logistics tracking, IoT, and Healthcare software engineering.",
    type: "website",
    url: "https://qunatrixlabs.com/case-studies",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Qunatrix Labs",
    description: "Explore our successful projects in Blockchain, Enterprise ERP/CRM, Logistics tracking, IoT, and Healthcare software engineering.",
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
