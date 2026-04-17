import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { locations } from "@/lib/data"

// Highlight owner-requested special items.
const featuredDishes = [
  {
    ...locations[0].menu.find((m) => m.name === "Rajma Chawal")!,
    image: "/images/home/featured-rajma-chawal.jpg",
    locationSlug: "punjabi-mains",
    locationName: "Special Item",
  },
  {
    ...locations[0].menu.find((m) => m.name === "Dal Makhani")!,
    image: "/images/home/featured-dal-makhani.jpg",
    locationSlug: "punjabi-mains",
    locationName: "Special Item",
  },
  {
    ...locations[0].menu.find((m) => m.name === "Paneer Butter Masala")!,
    image: "/images/home/featured-paneer-butter-masala.jpg",
    locationSlug: "punjabi-mains",
    locationName: "Special Item",
  },
]

export function FeaturedDishes() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label="Special Items"
          title="Most Loved This Week"
          description="Handpicked owner specials that keep customers coming back for one more order."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredDishes.map((dish) => {
            const isDalMakhani = dish.name === "Dal Makhani"

            return (
              <Link
                key={dish.name}
                href={`/locations/${dish.locationSlug}`}
                className="group"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                  <Image
                    src={dish.image || "/images/menu/default.jpg"}
                    alt={dish.name}
                    fill
                    className={
                      isDalMakhani
                        ? "object-cover transition-transform duration-500 scale-125 group-hover:scale-[1.3]"
                        : "object-cover transition-transform duration-500 group-hover:scale-105"
                    }
                    style={isDalMakhani ? { objectPosition: "35% 62%" } : undefined}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Badge
                      variant="secondary"
                      className="mb-3 text-xs"
                    >
                      {dish.locationName}
                    </Badge>
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                      {dish.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-primary-foreground/70">
                      {dish.description}
                    </p>
                    <p className="mt-3 text-lg font-semibold text-accent">
                      ₹{dish.price}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline">
            <Link href="/menu">
              View Full Menu
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
