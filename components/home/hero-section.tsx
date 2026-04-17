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
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
            Pure Veg &middot; Delivery Only &middot; Pune
          </p>
          <h1 className="font-serif text-5xl font-bold leading-[1.1] tracking-tight text-primary-foreground md:text-7xl lg:text-8xl">
            {siteConfig.name.split(" ").map((word, i) => (
              <span key={i} className="block">
                {word === "Rasoi" ? (
                  <span className="italic">{word}</span>
                ) : (
                  word
                )}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
            {siteConfig.tagline}. {siteConfig.description.split(".")[0]}.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/40">
            Scroll
          </span>
          <div className="h-10 w-px bg-gradient-to-b from-primary-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  )
}
