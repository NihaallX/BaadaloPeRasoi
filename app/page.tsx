import { HeroSection } from "@/components/home/hero-section"
import { StoryPreview } from "@/components/home/story-preview"
import { FeaturedDishes } from "@/components/home/featured-dishes"
import { LocationsPreview } from "@/components/home/locations-preview"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { CtaSection } from "@/components/home/cta-section"
import { FaqSection } from "@/components/home/faq-section"

// ── Restaurant + LocalBusiness JSON-LD ──────────────────────────────────────
const restaurantSchema = {
  "@context": "https://schema.org",
  "@type": ["Restaurant", "LocalBusiness"],
  name: "Baadalo Pe Rasoi",
  description:
    "A 100% pure vegetarian, delivery-only cloud kitchen serving home-style Punjabi meals, snacks, fast food, and combo offers across Katraj–Kondhwa, Pune.",
  url: "https://baadalorasoi.com",
  telephone: "+918983406295",
  servesCuisine: ["Indian", "Punjabi", "Vegetarian"],
  priceRange: "₹70–₹260",
  currenciesAccepted: "INR",
  paymentAccepted: "Online payment via Zomato and Swiggy",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Katraj–Kondhwa",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411046",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "18.4539",
    longitude: "73.8689",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "12:00",
      closes: "15:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:30",
      closes: "02:00",
    },
  ],
  hasMap: "https://maps.google.com/?q=Katraj+Pune",
  hasMenu: "https://baadalorasoi.com/menu",
  potentialAction: [
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://zomato.com",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      deliveryMethod: ["http://purl.org/goodrelations/v1#DeliveryModeDirectDownload"],
    },
    {
      "@type": "OrderAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://swiggy.com",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
    },
  ],
  sameAs: [
    "https://instagram.com/baadalo_pe_rasoi",
    "https://facebook.com/baadalorasoi",
    "https://zomato.com",
    "https://swiggy.com",
  ],
  founder: {
    "@type": "Person",
    name: "Dhananjay Patil",
  },
  foundingDate: "2026",
  image: "https://baadalorasoi.com/images/og-image.jpg",
}

export default function HomePage() {
  return (
    <>
      {/* Restaurant JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <HeroSection />
      <StoryPreview />
      <FeaturedDishes />
      <LocationsPreview />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </>
  )
}
