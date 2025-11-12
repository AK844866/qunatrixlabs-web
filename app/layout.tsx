import "./globals.css";
export const metadata = {
  title: "Verifide | Connect Share & Grow",
  description:
    "Verifide is a trusted startup ecosystem platform designed to connect verified individuals, emerging startups, and reputed institutions on a single, credible network.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-[#0E0C15] snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth overflow-hidden "
    >
      <body>{children}</body>
    </html>
  );
}
