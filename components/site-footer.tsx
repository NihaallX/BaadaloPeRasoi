import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { siteConfig, locations } from "@/lib/data"

export function SiteFooter() {
  const hasEmail = siteConfig.email.includes("@")

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-serif text-2xl font-bold">
              {siteConfig.name}
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-80">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-opacity hover:opacity-100"
                aria-label="Instagram"
              >
                <svg className="size-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
            <p className="mt-3 text-xs opacity-70">@baadalo_pe_rasoi</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Navigate
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {[
                { name: "Our Story", href: "/about" },
                { name: "The Team", href: "/team" },
                { name: "Locations", href: "/locations" },
                { name: "Full Menu", href: "/menu" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Menu
            </h3>
            <ul className="mt-4 flex flex-col gap-4">
              {locations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="group flex items-start gap-2"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 opacity-50 transition-opacity group-hover:opacity-100" />
                    <div>
                      <p className="text-sm font-medium opacity-90 transition-opacity group-hover:opacity-100">
                        {loc.shortName}
                      </p>
                      <p className="text-xs opacity-60">{loc.address}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                >
                  <Phone className="size-4 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                {hasEmail ? (
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2 text-sm opacity-70 transition-opacity hover:opacity-100"
                  >
                    <Mail className="size-4 shrink-0" />
                    {siteConfig.email}
                  </a>
                ) : (
                  <div className="flex items-center gap-2 text-sm opacity-70">
                    <Mail className="size-4 shrink-0" />
                    Email: Yet to be created
                  </div>
                )}
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs font-medium uppercase tracking-wider opacity-60">
                Order Online
              </p>
              <p className="mt-1 text-xs opacity-50">
                Delivery area: Katraj–Kondhwa, Pune. Available on Zomato and Swiggy.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-primary-foreground/15" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs opacity-50">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Pure Veg | Delivery Only | Pune
          </p>
          <div className="flex gap-6">
            <Link
              href="/contact"
              className="text-xs opacity-50 transition-opacity hover:opacity-100"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs opacity-50 transition-opacity hover:opacity-100"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
