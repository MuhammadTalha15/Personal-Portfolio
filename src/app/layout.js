import "./globals.css";

export const metadata = {
  title: "Muhammad Talha | Cybersecurity Freshman & Embedded System Security",
  description:
    "Cybersecurity student and Probationer specializing in Embedded System Security and IoT, building secure, high-performance Web and Software solutions with a strong focus on resilient hardware and software infrastructures.",
  openGraph: {
    title: "Muhammad Talha | Cybersecurity Freshman & Embedded System Security",
    description:
      "Cybersecurity student specializing in Embedded System Security and IoT, building secure, high-performance web and software solutions with a strong focus on resilient hardware and software infrastructures.",
    url: "https://talhaport.vercel.app",
    siteName: "Muhammad Talha",
    images: [
      {
        url: "https://talhaport.vercel.app/OpenGraph/OgImage.png", // Full image URL
        width: 1200,
        height: 630,
        alt: "Muhammad Talha | Cybersecurity Engineer & Application Security Engineer",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
