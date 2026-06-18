import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, locations } from "@/lib/data"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Baadalo Pe Rasoi. Send us feedback, ask about bulk orders, or connect with us on Instagram.",
  openGraph: {
    title: "Contact | Baadalo Pe Rasoi",
    description:
      "Get in touch with Baadalo Pe Rasoi. Feedback, bulk orders, or just say hi.",
    url: `${siteConfig.url}/contact`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Baadalo Pe Rasoi",
    description:
      "Get in touch with Baadalo Pe Rasoi. Feedback, bulk orders, or just say hi.",
  },
  alternates: { canonical: `${siteConfig.url}/contact` },
}

export default function ContactPage() {
  const hasEmail = siteConfig.email.includes("@")
  const primaryLocation = locations[0]
  const operatingHours = primaryLocation?.hours ?? [
    { days: "Lunch", time: "12:00 PM – 3:30 PM" },
    { days: "Dinner & Late Night", time: "6:30 PM – 2:00 AM" },
  ]
  const locationLabel = primaryLocation
    ? `${primaryLocation.address}, ${primaryLocation.city}`
    : "Katraj–Kondhwa, Pune"
  const locationImage =
    primaryLocation?.image || "/images/home/category-punjabi-mains.jpg"

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Contact Us
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            We Would Love to Hear From You
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Have feedback, a bulk order enquiry, or just want to say hello?
            We are a delivery-only cloud kitchen serving Katraj–Kondhwa, Pune.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Fill out the form below and we will get back to you within 24
                hours.
              </p>
              <form className="mt-8 flex flex-col gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Maria" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Rossi" required />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="maria@example.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Reservation inquiry, private event, feedback..."
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    className="min-h-[120px]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-card-foreground">
                  General Inquiries
                </h3>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Phone className="size-4 shrink-0 text-accent" />
                    {siteConfig.phone}
                  </a>
                  {hasEmail ? (
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      <Mail className="size-4 shrink-0 text-accent" />
                      {siteConfig.email}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Mail className="size-4 shrink-0 text-accent" />
                      Email: Yet to be created
                    </div>
                  )}
                  <a
                    href={siteConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Instagram className="size-4 shrink-0 text-accent" />
                    @baadalo_pe_rasoi
                  </a>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                  By sending a message or placing an order, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-accent hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/terms-of-service"
                    className="font-medium text-accent hover:underline"
                  >
                    Terms of Service
                  </Link>
                  . Refund and cancellation requests are processed by Zomato and
                  Swiggy.
                </p>
              </div>

              <div className="mt-6 rounded-lg border border-border bg-card p-6">
                <h3 className="font-serif text-lg font-bold text-card-foreground">
                  Baadalo Pe Rasoi
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  Delivery-Only Cloud Kitchen
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {locationLabel}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="size-4 shrink-0 text-accent" />
                    <span className="text-sm text-muted-foreground">
                      {siteConfig.phone}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                    <div className="flex flex-col gap-0.5">
                      {operatingHours.map((h) => (
                        <span key={h.days} className="text-xs text-muted-foreground">
                          {h.days}: {h.time}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Order Online"
            title="Find Us on Zomato & Swiggy"
            description="One kitchen, one promise: fresh vegetarian food delivered across Katraj–Kondhwa, Pune."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="relative overflow-hidden rounded-lg">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={locationImage}
                  alt="Baadalo Pe Rasoi cloud kitchen delivery area"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 70vw"
                />
                <div className="absolute inset-0 bg-primary/60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                  <MapPin className="mb-2 size-6 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    Baadalo Pe Rasoi
                  </h3>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    Delivery across {locationLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
