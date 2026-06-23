import "./globals.css";
import Script from "next/script";
import LeadCaptureModal from "@/components/LeadCaptureModal";

export const metadata = {
  title: {
    default: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
    template: "%s | Qunatrix Labs"
  },
  description:
    "Qunatrix Labs engineers robust custom software solutions, high-throughput backend synchronization pipelines, smart IoT systems, and verified Web3 decentralized credential registries.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://qunatrixlabs.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qunatrixlabs.com",
    title: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
    description: "Qunatrix Labs engineers robust custom software solutions, high-throughput backend synchronization pipelines, smart IoT systems, and verified Web3 decentralized credential registries.",
    siteName: "Qunatrix Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qunatrix Labs | Enterprise Software, Web3 & IoT Engineering",
    description: "Qunatrix Labs engineers robust custom software solutions, high-throughput backend synchronization pipelines, smart IoT systems, and verified Web3 decentralized credential registries.",
  }
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Qunatrix Labs",
  "url": "https://qunatrixlabs.com",
  "logo": "https://qunatrixlabs.com/favicon.ico",
  "description": "Qunatrix Labs engineers robust custom software solutions, high-throughput backend pipelines, IoT systems, and verified Web3 decentralized credential registries.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5th Floor, Cloud-9, Office no. S-538",
    "addressLocality": "Ghaziabad",
    "addressRegion": "Uttar Pradesh",
    "postalCode": "201010",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-8448665756",
      "contactType": "sales",
      "email": "sales@qunatrixlabs.com",
      "areaServed": "Global"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"; // Default placeholder if not set

  return (
    <html
      lang="en"
      className="bg-[#0E0C15] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth overflow-hidden"
    >
      <head>
        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
        
        {/* Google Analytics Script */}
        {gaId && gaId !== "G-XXXXXXXXXX" && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>
        {children}
        <LeadCaptureModal />
      </body>
    </html>
  );
}
