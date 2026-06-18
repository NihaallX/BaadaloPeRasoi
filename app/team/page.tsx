import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { siteConfig, teamMembers } from "@/lib/data"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the passionate cooks and operations team behind Baadalo Pe Rasoi — the people who make every meal feel like home.",
  openGraph: {
    title: "Our Team | Baadalo Pe Rasoi",
    description:
      "Meet the passionate cooks and operations team who bring Baadalo Pe Rasoi to life every day.",
    url: `${siteConfig.url}/team`,
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Baadalo Pe Rasoi",
    description:
      "Meet the passionate cooks and operations team who bring Baadalo Pe Rasoi to life every day.",
  },
  alternates: { canonical: `${siteConfig.url}/team` },
}

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/team-hero.jpg"
            alt="The Hearth team working together in the kitchen"
            fill
            className="object-cover opacity-30"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/30" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 lg:px-8">
          <div className="mb-4 inline-flex items-center rounded-full bg-black/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              The Team
            </span>
          </div>
          <h1 className="max-w-3xl font-serif text-4xl font-bold leading-tight tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            The People Behind the Plates
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-primary-foreground/80">
            Passionate, dedicated, and deeply rooted in home cooking. Meet the
            team that makes Baadalo Pe Rasoi what it is.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionHeader
            label="Meet the Team"
            title="Our Kitchen Family"
            description="From our founder-chef to the delivery team, every person at Baadalo Pe Rasoi plays a part in bringing home-style food to your doorstep."
          />

          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group overflow-hidden rounded-lg border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.role}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold text-card-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="bg-secondary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeader
                label="Join Our Team"
                title="We Are Always Looking for Passionate People"
                description="Baadalo Pe Rasoi is more than a kitchen — it is a family. If you love cooking and want to bring joy to people through food, we would love to hear from you."
                align="left"
              />
              <Button
                asChild
                className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Link href="/contact">
                  Get in Touch
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
              <Image
                src="/images/team-join.jpg"
                alt="Team members collaborating in the kitchen"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
