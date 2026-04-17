import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms that govern use of the Baadalo Pe Rasoi website and services.",
  openGraph: {
    title: "Terms of Service | Baadalo Pe Rasoi",
    description:
      "Read the terms that govern use of the Baadalo Pe Rasoi website and services.",
    url: `${siteConfig.url}/terms-of-service`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Baadalo Pe Rasoi",
    description:
      "Read the terms that govern use of the Baadalo Pe Rasoi website and services.",
  },
  alternates: { canonical: `${siteConfig.url}/terms-of-service` },
}

export default function TermsOfServicePage() {
  return (
    <>
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 lg:px-8">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="mb-6 text-primary-foreground/70 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back to Home
            </Link>
          </Button>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Legal
          </p>
          <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Last updated: April 17, 2026
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-8">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Acceptance of Terms</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              By using this website, you agree to these Terms of Service. If you do not agree, please do not use the site.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Service Scope</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Baadalo Pe Rasoi is a delivery-only cloud kitchen. This website is informational and helps users discover menu
              options and ordering links.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Ordering and Pricing</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Final ordering, payment, and pricing details are governed by the platform where you place the order (Zomato or
              Swiggy). Menu items and prices shown on this site are subject to change.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Refunds and Cancellations</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Refund and cancellation requests are processed by Zomato and Swiggy according to their platform policies. Please use
              the support channels of the platform where your order was placed.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">User Conduct</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              You agree not to misuse the website, attempt unauthorized access, or use any content in violation of applicable law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Third-Party Links</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This site links to third-party platforms and social channels. We are not responsible for the terms, policies, or
              operations of external services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Limitation of Liability</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              To the maximum extent permitted by law, Baadalo Pe Rasoi is not liable for indirect or consequential damages arising
              from website use or third-party platform services.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Governing Law</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              These terms are governed by applicable laws of India.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For terms-related questions, contact us at {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
