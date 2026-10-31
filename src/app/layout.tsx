import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | AI Automation Specialist`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "AI Automation Specialist",
    "Make automation",
    "n8n automation",
    "Zapier automation",
    "workflow automation",
    "CRM automation",
    "lead follow-up automation",
    "agency automation",
    "AI-assisted web apps",
    "Mohammed Guejjim",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  category: "AI Automation",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name} | AI Automation Specialist`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name} | AI Automation Specialist`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | AI Automation Specialist`,
    description: DATA.description,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: DATA.name,
              jobTitle: "AI Automation Specialist",
              url: DATA.url,
              description: DATA.description,
              knowsAbout: [
                "Make",
                "n8n",
                "Zapier",
                "Workflow Automation",
                "CRM Automation",
                "Lead Follow-up Automation",
                "AI-Assisted Web Apps",
              ],
              sameAs: [
                "https://github.com/ellsimohammed8-prog",
                "https://www.linkedin.com/in/mohammed-guejjim-07b797290",
              ],
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "EST Fquih Ben Salah, Universite Sultan Moulay Slimane",
              },
            }),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[100px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto py-12 pb-24 sm:py-24 px-6">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
