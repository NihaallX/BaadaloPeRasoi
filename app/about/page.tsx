import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, storyTimeline } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "From a home kitchen in Katraj to Pune's most-loved pure vegetarian cloud kitchen — discover the story behind Baadalo Pe Rasoi.",
  openGraph: {
    title: "Our Story | Baadalo Pe Rasoi",
    description:
      "From a home kitchen in Katraj to Pune's most-loved pure vegetarian cloud kitchen — the Baadalo Pe Rasoi story.",
    url: `${siteConfig.url}/about`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Baadalo Pe Rasoi",
    description:
      "From a home kitchen in Katraj to Pune's most-loved pure vegetarian cloud kitchen — the Baadalo Pe Rasoi story.",
  },
  alternates: { canonical: `${siteConfig.url}/about` },
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Chef Maria Rossi in the original Hearth kitchen"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Our Story
          </p>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            A Kitchen in the Clouds, Rooted in Home
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Every great kitchen has an origin story. Ours begins with a
            mother, a dal on the stove, and the simple belief that good food
            should reach everyone.
          </p>
        </div>
      </section>

      {/* The Origin */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <Image
                  src="/images/home/story-2.jpg"
                  alt="Fresh ingredients in the early Baadalo Pe Rasoi home kitchen"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-lg bg-accent px-6 py-4">
                <p className="font-serif text-3xl font-bold text-accent-foreground">
                  2026
                </p>
                <p className="text-xs font-medium text-accent-foreground/80">
                  Founded
                </p>
              </div>
            </div>
            <div>
              <SectionHeader
                label="Where It Began"
                title="From a Home Kitchen in Katraj"
                align="left"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Dhananjay Patil started Baadalo Pe Rasoi with a simple idea —
                  to serve ghar jaisa, comforting food that feels special, even
                  when you&apos;re ordering in. He wanted to create something of his
                  own, something consistent and high quality. Operating out of
                  the Katraj–Kondhwa belt of Pune, the kitchen was built to
                  serve students, working professionals, and families who crave
                  real home-style vegetarian food. The name &ldquo;Baadalo Pe
                  Rasoi&rdquo; reflects that feeling — food so good it feels like
                  it&apos;s made above the clouds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Philosophy"
            title="What We Believe"
            description="Three principles guide everything we do — from how we cook to how we deliver."
          />
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Pure Vegetarian",
                description:
                  "We are a 100% pure vegetarian kitchen. No compromise, no cross-contamination. Every ingredient is carefully chosen so you can order with full peace of mind.",
                image: "/images/about/belief-pure-vegetarian.jpg",
                alt: "Nutritious vegetarian curry served with rice and fresh herbs",
              },
              {
                title: "Ghar Jaisa Swad",
                description:
                  "Our recipes are inspired by home kitchens, not restaurants. We cook the way mothers do — with patience, fresh ingredients, and a generous hand.",
                image: "/images/about/belief-ghar-jaisa-swad.jpg",
                alt: "Home cook preparing a meal with fresh ingredients in a kitchen",
              },
              {
                title: "Delivered Fresh",
                description:
                  "We cook to order. No batch-cooked, reheated food. When your order arrives, it is fresh from the kitchen — hot, aromatic, and ready to eat.",
                image: "/images/about/belief-delivered-fresh.jpg",
                alt: "Food delivery rider carrying a fresh-order backpack in the city",
              },
            ].map((item) => (
              <div key={item.title} className="group">
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="mt-6 font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Our Journey"
            title="How We Got Here"
          />
          <div className="relative mt-14">
            {/* Center line */}
            <div className="absolute left-4 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />
            <div className="flex flex-col gap-12">
              {storyTimeline.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex flex-col gap-4 md:flex-row md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "md:text-right md:pr-12"
                        : "md:text-left md:pl-12"
                    }`}
                  >
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 font-serif text-sm font-bold text-accent">
                      {event.year}
                    </span>
                    <h3 className="mt-3 font-serif text-xl font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                  {/* Dot */}
                  <div className="absolute left-4 top-1 hidden size-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2 md:block" />
                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 text-center lg:py-28">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            Be Part of Our Journey
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/70">
            Every order you place is a vote for home-style food made with love.
            We would be honoured to cook for you.
          </p>
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
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/team">Meet the Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
