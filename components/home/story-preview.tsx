import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

export function StoryPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/story-1.jpg"
                    alt="Chef Maria preparing a signature dish"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/story-2.jpg"
                    alt="Fresh ingredients from local farms"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src="/images/story-3.jpg"
                    alt="The original Hearth dining room"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/story-4.jpg"
                    alt="Family gathering at The Hearth"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 -z-10 h-32 w-32 rounded-full bg-accent/10" />
          </div>

          {/* Text Content */}
          <div>
            <SectionHeader
              label="Our Story"
              title="Born from a Love of Home Cooking"
              description="What began as cooking for neighbours in a small Katraj kitchen has grown into Pune's most-loved pure vegetarian cloud kitchen. Every dish we make carries the warmth of a home-cooked meal — because that is exactly what it is."
              align="left"
            />
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-border pt-8">
              <div>
                <p className="font-serif text-3xl font-bold text-accent">5+</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Years Serving Pune
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">2</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Platforms (Zomato & Swiggy)
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl font-bold text-accent">100%</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Pure Vegetarian
                </p>
              </div>
            </div>
            <Button asChild variant="link" className="mt-8 px-0 text-accent">
              <Link href="/about">
                Read Our Full Story
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
