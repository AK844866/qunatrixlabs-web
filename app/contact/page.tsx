import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | Qunatrix Labs",
  description: "Connect with our software architects for a free feasibility analysis on custom enterprise systems, Web3 contracts, and custom hardware integrations.",
  openGraph: {
    title: "Contact Us | Qunatrix Labs",
    description: "Connect with our software architects for a free feasibility analysis on custom enterprise systems, Web3 contracts, and custom hardware integrations.",
    type: "website",
    url: "https://qunatrixlabs.com/contact",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Qunatrix Labs",
    description: "Connect with our software architects for a free feasibility analysis on custom enterprise systems, Web3 contracts, and custom hardware integrations.",
  }
};

export default function ContactPage() {
  return <ContactContent />;
}
