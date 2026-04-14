import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Hungry? We Are Ready
        </p>
        <h2 className="font-serif text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Order Ghar Jaisa Khana Right Now
        </h2>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Whether it is a quick lunch, a family dinner, or a late-night craving
          — Baadalo Pe Rasoi delivers fresh, home-style vegetarian food to your door.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
  )
}
