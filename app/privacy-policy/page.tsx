import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read how Baadalo Pe Rasoi collects, uses, and protects your information.",
  openGraph: {
    title: "Privacy Policy | Baadalo Pe Rasoi",
    description:
      "Read how Baadalo Pe Rasoi collects, uses, and protects your information.",
    url: `${siteConfig.url}/privacy-policy`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Baadalo Pe Rasoi",
    description:
      "Read how Baadalo Pe Rasoi collects, uses, and protects your information.",
  },
  alternates: { canonical: `${siteConfig.url}/privacy-policy` },
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Last updated: April 17, 2026
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-5xl space-y-10 px-4 lg:px-8">
          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Overview</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Baadalo Pe Rasoi ("we", "us", "our") respects your privacy. This policy explains how we collect, use, and protect
              information when you use our website.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Information We Collect</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We may collect information you provide directly, such as your name, phone number, email address, and message content
              when you submit a contact form.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We also collect limited technical usage data (for example, page visits and traffic trends) through analytics tools
              to improve website performance and user experience.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">How We Use Information</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We use collected data to respond to inquiries, improve site quality, and provide relevant updates about our services.
              We do not sell personal data.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Orders, Refunds, and Cancellations</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Orders are placed on third-party platforms (Zomato and Swiggy). Refund and cancellation processing is handled by
              Zomato and Swiggy according to their own policies and support workflows.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Third-Party Services</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              This website may contain links to third-party platforms including Zomato, Swiggy, and Instagram. Their websites and
              apps have independent privacy practices, and we recommend reviewing their policies.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Data Retention and Security</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              We retain inquiry information only as long as needed for support and operational purposes. While we follow reasonable
              safeguards, no online system is guaranteed to be fully secure.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-2xl font-bold text-foreground">Contact</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              For privacy-related requests, contact us at {siteConfig.phone}.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
