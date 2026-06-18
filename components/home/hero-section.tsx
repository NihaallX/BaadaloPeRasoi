import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/data"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Top view of Indian curry, rice, and greens in takeaway containers"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 pb-24 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* SEO H1 — visually hidden, logo image serves as visible brand treatment */}
          <h1 className="sr-only">
            Baadalo Pe Rasoi — Pure Vegetarian Cloud Kitchen in Pune
          </h1>
          {/* Tagline pill */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Pure Veg &middot; Delivery Only &middot; Pune
            </span>
          </div>
          {/* Brand logo — yellow variant, centered */}
          <div className="mb-5">
            <Image
              src="/logo-yellow.svg"
              alt="Baadalo Pe Rasoi"
              width={300}
              height={128}
              className="object-contain"
              priority
            />
          </div>
          <p className="max-w-lg text-base leading-relaxed text-primary-foreground/80 md:text-lg">
            {siteConfig.tagline}. {siteConfig.description.split(".")[0]}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="https://swiggy.com" target="_blank" rel="noopener noreferrer">Order on Swiggy</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-[10px] uppercase tracking-widest text-primary-foreground/40">
            Scroll
          </span>
          <div className="h-7 w-px bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
