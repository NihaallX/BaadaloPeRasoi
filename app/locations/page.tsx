import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, locations } from "@/lib/data"

export const metadata: Metadata = {
  title: "Menu Categories",
  description:
    "Browse Baadalo Pe Rasoi's full menu — Punjabi mains, snacks, fast food, combo offers, and desserts. Order via Zomato and Swiggy in Pune.",
  openGraph: {
    title: "Menu Categories | Baadalo Pe Rasoi",
    description:
      "Browse Baadalo Pe Rasoi's full menu. Order via Zomato and Swiggy across Katraj–Kondhwa, Pune.",
    url: `${siteConfig.url}/locations`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu Categories | Baadalo Pe Rasoi",
    description:
      "Browse Baadalo Pe Rasoi's full menu. Order via Zomato and Swiggy across Katraj–Kondhwa, Pune.",
  },
  alternates: { canonical: `${siteConfig.url}/locations` },
}

export default function LocationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Locations
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Three Categories, One Kitchen
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            From wholesome Punjabi mains to snacks and value combos — every dish
            cooked with the same love and delivered straight to your door.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-20 lg:gap-28">
            {locations.map((location, index) => (
              <div
                key={location.slug}
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                  index % 2 !== 0 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image */}
                <div className="lg:[direction:ltr]">
                  <Link
                    href={`/locations/${location.slug}`}
                    className="group relative block aspect-[4/3] overflow-hidden rounded-lg"
                  >
                    <Image
                      src={location.image}
                      alt={location.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </div>

                {/* Info */}
                <div className="lg:[direction:ltr]">
                  <Badge variant="outline" className="mb-4">
                    {location.tagline}
                  </Badge>
                  <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {location.name}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {location.description}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {location.address}, {location.city}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                      <span className="text-sm text-muted-foreground">
                        {location.phone}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="mt-0.5 size-4 shrink-0 text-accent" />
                      <div className="flex flex-col gap-1">
                        {location.hours.map((h) => (
                          <span
                            key={h.days}
                            className="text-sm text-muted-foreground"
                          >
                            <span className="font-medium text-foreground">
                              {h.days}:
                            </span>{" "}
                            {h.time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {location.features.map((feature) => (
                      <Badge key={feature} variant="secondary">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="mt-8" size="lg">
                    <Link href={`/locations/${location.slug}`}>
                      View Menu & Details
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionHeader
            label="Order Now"
            title="Ready for Ghar Jaisa Khana?"
            description="Available for delivery across the Katraj–Kondhwa belt in Pune. Order on Zomato or Swiggy — lunch, dinner, and late night."
          />
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link href="https://zomato.com" target="_blank" rel="noopener noreferrer">
                Order on Zomato
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="https://swiggy.com" target="_blank" rel="noopener noreferrer">Order on Swiggy</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
