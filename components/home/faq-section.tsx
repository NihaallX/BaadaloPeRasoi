"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Where does Baadalo Pe Rasoi deliver?",
    answer:
      "We deliver across the Katraj–Kondhwa belt in Pune, Maharashtra. Order through Zomato or Swiggy to check if your specific pin code is currently serviceable.",
  },
  {
    question: "Is Baadalo Pe Rasoi 100% vegetarian?",
    answer:
      "Yes — Baadalo Pe Rasoi is a strictly 100% pure vegetarian kitchen. We use no meat, fish, or eggs in any of our dishes. There is no risk of cross-contamination.",
  },
  {
    question: "What are your delivery hours?",
    answer:
      "We are open for Lunch from 12:00 PM to 3:30 PM, and for Dinner & Late Night from 6:30 PM to 2:00 AM — every day of the week.",
  },
  {
    question: "How do I place an order?",
    answer:
      "We do not have a native online checkout. All orders are placed through Zomato (zomato.com) or Swiggy (swiggy.com). Search for 'Baadalo Pe Rasoi' on either app to find our menu and place your order.",
  },
  {
    question: "What type of food does Baadalo Pe Rasoi serve?",
    answer:
      "We serve pure vegetarian home-style Indian food — primarily Punjabi mains like Dal Makhani, Paneer Butter Masala, Rajma Chawal, and Chole; along with rice combos, momos, sandwiches, veg pizzas, combo offers, and a Dessert of the Day.",
  },
  {
    question: "What is the price range?",
    answer:
      "Our menu is priced between ₹60 and ₹260. Single dishes start from ₹60 (Gulab Jamun, Coffee). Combo meals range from ₹150 (Snack Combo) to ₹260 (Paneer Combo with roti and rice).",
  },
  {
    question: "Who founded Baadalo Pe Rasoi?",
    answer:
      "Baadalo Pe Rasoi was founded in 2026 by Dhananjay Patil, who grew up watching his mother cook for the neighbourhood in Pune. His vision was to bottle that warmth and deliver it to every doorstep through a cloud kitchen model.",
  },
  {
    question: "What does 'Baadalo Pe Rasoi' mean?",
    answer:
      "Baadalo Pe Rasoi translates roughly to 'Kitchen in the Clouds' — a poetic name that reflects the cloud kitchen format and the feeling that our food is so good, it feels like it was cooked above the clouds.",
  },
  {
    question: "Can I place a bulk or catering order?",
    answer:
      "Yes! For bulk orders or special catering requests, please reach out to us directly at +91 89834 06295. We will work out the details with you.",
  },
  {
    question: "How do I cancel an order or get a refund?",
    answer:
      "Since all orders are placed through Zomato and Swiggy, cancellations and refunds are handled entirely by those platforms according to their own policies. Please contact Zomato or Swiggy support directly for order issues.",
  },
]

// FAQ JSON-LD schema — matches the visible content exactly
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

function FaqItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof faqs)[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-foreground">
          {faq.question}
        </span>
        <ChevronDown
          className={cn(
            "size-5 shrink-0 text-muted-foreground transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">
          {faq.answer}
        </p>
      </div>
    </div>
  )
}

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-secondary py-20 lg:py-28" id="faq">
      {/* FAQPage JSON-LD — matches visible content exactly */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Left heading */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Common Questions
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about ordering from Baadalo Pe Rasoi
              — delivery area, hours, menu, and more.
            </p>
          </div>

          {/* Right accordion */}
          <div className="rounded-lg bg-card px-6 shadow-sm">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
