import { Star, Quote } from "lucide-react"
import { SectionHeader } from "@/components/section-header"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section className="bg-primary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          label="What Our Guests Say"
          title="Stories from Our Table"
          description="Nothing means more to us than the memories our guests take home."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-8"
            >
              <Quote className="absolute right-6 top-6 size-8 text-accent/20" />
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="text-base leading-relaxed text-primary-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-full bg-accent/20 font-serif text-sm font-bold text-accent">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-primary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {testimonial.location} Location
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
