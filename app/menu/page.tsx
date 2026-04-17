import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, locations } from "@/lib/data"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the full menu at Baadalo Pe Rasoi. Pure vegetarian Punjabi mains, rice meals, snacks, fast food, combo offers, and desserts.",
  openGraph: {
    title: "Menu | Baadalo Pe Rasoi",
    description:
      "Pure vegetarian Punjabi mains, rice meals, snacks, fast food, combo offers, and desserts — delivered across Pune.",
    url: `${siteConfig.url}/menu`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Baadalo Pe Rasoi",
    description: "Pure vegetarian Punjabi mains, rice meals, snacks, fast food, combo offers, and desserts — delivered across Pune.",
  },
  alternates: { canonical: `${siteConfig.url}/menu` },
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/home/category-punjabi-mains.jpg"
            alt="Paneer curry in a traditional pan with fresh ingredients"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Menu
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            Pure Veg, Pure Comfort
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            From hearty Punjabi mains to quick snacks and value combos — 
            everything cooked fresh in our cloud kitchen and delivered to your door.
          </p>
        </div>
      </section>

      {/* Menus by Location */}
      {locations.map((location, locationIndex) => {
        const categories = [
          ...new Set(location.menu.map((item) => item.category)),
        ]

        return (
          <section
            key={location.slug}
            className={
              locationIndex % 2 === 0
                ? "bg-background py-20 lg:py-28"
                : "bg-secondary py-20 lg:py-28"
            }
          >
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              {/* Location Header */}
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin className="size-4 text-accent" />
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {location.tagline}
                    </span>
                  </div>
                  <h2 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
                    {location.shortName} Menu
                  </h2>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    {location.address}, {location.city}
                  </p>
                </div>
                <Button asChild variant="outline">
                  <Link href={`/locations/${location.slug}`}>
                    View Details
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>

              <Separator className="my-10" />

              {/* Menu Categories */}
              {categories.map((category) => {
                const items = location.menu.filter(
                  (item) => item.category === category
                )
                return (
                  <div key={category} className="mb-12 last:mb-0">
                    <h3 className="mb-6 font-serif text-2xl font-bold text-foreground">
                      {category}
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {items.map((item) => (
                        <div
                          key={item.name}
                          className="flex gap-4 rounded-lg border border-border bg-card p-4 transition-shadow hover:shadow-sm"
                        >
                          <div className="relative size-16 shrink-0 overflow-hidden rounded-md">
                            <Image
                              src={item.image || "/images/menu/default.jpg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="64px"
                            />
                          </div>
                          <div className="flex flex-1 flex-col">
                            <div className="flex items-start justify-between gap-3">
                              <h4 className="font-serif text-base font-bold text-card-foreground">
                                {item.name}
                              </h4>
                              <span className="shrink-0 font-semibold text-accent">
                                ₹{item.price}
                              </span>
                            </div>
                            <p className="mt-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                              {item.description}
                            </p>
                            {item.tags && item.tags.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-1">
                                {item.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* CTA */}
      <section className="bg-primary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <SectionHeader
            label="Order Now"
            title="Ready to Taste the Difference?"
            description="Fresh, home-style vegetarian food delivered hot to your door. Order on Zomato or Swiggy across the Katraj–Kondhwa belt."
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
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <Link href="https://swiggy.com" target="_blank" rel="noopener noreferrer">Order on Swiggy</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
