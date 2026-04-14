import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { locations } from "@/lib/data"

// Pull one featured dish from each location
const featuredDishes = [
  { ...locations[0].menu.find((m) => m.name === "Paneer Butter Masala")!, locationSlug: "punjabi-mains", locationName: "Punjabi Mains" },
  { ...locations[1].menu.find((m) => m.name === "Fried Momos")!, locationSlug: "snacks-and-fast-food", locationName: "Snacks & Fast Food" },
  { ...locations[2].menu.find((m) => m.name === "Paneer Combo")!, locationSlug: "combos-and-desserts", locationName: "Combos & Desserts" },
]

export function FeaturedDishes() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label="From Our Kitchen"
          title="Signature Dishes"
          description="From rich Punjabi curries to crispy snacks and value-packed combos — here are the dishes our customers love most."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {featuredDishes.map((dish) => (
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
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                    ${dish.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
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
