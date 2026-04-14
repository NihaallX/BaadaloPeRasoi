// ============================================================
// RESTAURANT SITE DATA - Edit this file to customize your site
// ============================================================

export const siteConfig = {
  name: "Baadalo Pe Rasoi",
  tagline: "Ghar Jaisa Khana, Delivered to Your Door",
  description:
    "A pure vegetarian cloud kitchen serving home-style Punjabi meals, rice combos, snacks, and more — delivered across the Katraj–Kondhwa belt in Pune via Zomato and Swiggy.",
  url: "https://baadalorasoi.com",
  ogImage: "/images/og-image.jpg",
  email: "hello@baadalorasoi.com",
  phone: "+91 98765 43210",
  socials: {
    instagram: "https://instagram.com/baadalorasoi",
    facebook: "https://facebook.com/baadalorasoi",
    twitter: "https://twitter.com/baadalorasoi",
  },
}

export interface TimelineEvent {
  year: string
  title: string
  description: string
}

export const storyTimeline: TimelineEvent[] = [
  {
    year: "2019",
    title: "The Idea is Born",
    description:
      "Frustrated by the lack of truly home-style vegetarian food in Pune, our founder started cooking for neighbours out of a small home kitchen in Katraj — and the response was overwhelming.",
  },
  {
    year: "2020",
    title: "Going Online",
    description:
      "Baadalo Pe Rasoi officially launched on Zomato and Swiggy, making it easy for food lovers across Katraj and Kondhwa to order fresh, ghar jaisa khana from their phones.",
  },
  {
    year: "2021",
    title: "The Combos That Won Hearts",
    description:
      "Our student-favourite Rajma Chawal combo and the hearty Paneer Combo quickly became bestsellers, with thousands of happy orders every month.",
  },
  {
    year: "2022",
    title: "Late-Night Kitchen",
    description:
      "We extended our dinner service all the way to 2:00 AM, becoming the go-to choice for late-night hunger in the Katraj–Kondhwa belt.",
  },
  {
    year: "2024",
    title: "Growing the Menu",
    description:
      "We added momos, fresh juices, veg pizzas, and a rotating Dessert of the Day — expanding beyond meals to become a full cloud kitchen experience.",
  },
]

export interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Ananya Sharma",
    role: "Founder & Head Chef",
    bio: "Ananya grew up watching her mother cook for the entire neighbourhood in Pune. Her dream was simple — to bottle that warmth and deliver it to every doorstep.",
    image: "/images/team/ananya.jpg",
  },
  {
    name: "Ravi Kulkarni",
    role: "Kitchen Manager",
    bio: "Ravi keeps the cloud kitchen running like clockwork, ensuring every order — from a single roti to a full combo — reaches the customer fresh and on time.",
    image: "/images/team/ravi.jpg",
  },
  {
    name: "Priya Joshi",
    role: "Punjabi Mains Specialist",
    bio: "Priya mastered the art of dal tadka and paneer dishes in her family kitchen before bringing her recipes to Baadalo Pe Rasoi's most-loved menu section.",
    image: "/images/team/priya.jpg",
  },
  {
    name: "Suresh Patil",
    role: "Snacks & Fast Food Chef",
    bio: "From perfectly steamed momos to crispy fries, Suresh crafts every snack with a street-food spirit that keeps late-night customers coming back.",
    image: "/images/team/suresh.jpg",
  },
  {
    name: "Meera Desai",
    role: "Desserts & Beverages",
    bio: "Meera is behind the Dessert of the Day and the fresh juice counter, bringing a sweet, refreshing close to every Baadalo Pe Rasoi meal.",
    image: "/images/team/meera.jpg",
  },
  {
    name: "Arjun Nair",
    role: "Delivery & Operations",
    bio: "Arjun coordinates with Zomato and Swiggy partners to make sure every order is dispatched quickly and arrives at your door just the way it left our kitchen.",
    image: "/images/team/arjun.jpg",
  },
]

export interface MenuItem {
  name: string
  description: string
  price: string
  category: string
  tags?: string[]
  image?: string
}

export interface Location {
  slug: string
  name: string
  shortName: string
  tagline: string
  description: string
  address: string
  city: string
  phone: string
  hours: { days: string; time: string }[]
  image: string
  gallery: string[]
  features: string[]
  menu: MenuItem[]
}

export const locations: Location[] = [
  {
    slug: "punjabi-mains",
    name: "Punjabi Mains & Rice Meals",
    shortName: "Punjabi Mains",
    tagline: "Ghar Jaisa Swad",
    description:
      "Rich, comforting Punjabi curries and wholesome rice combos made fresh every day — just like your mother used to cook. Perfect for lunch or a hearty dinner, delivered hot to your door.",
    address: "Katraj–Kondhwa Belt",
    city: "Pune, Maharashtra",
    phone: "+91 98765 43210",
    hours: [
      { days: "Lunch", time: "12:00 PM – 3:30 PM" },
      { days: "Dinner & Late Night", time: "6:30 PM – 2:00 AM" },
    ],
    image: "/images/locations/downtown.jpg",
    gallery: [
      "/images/locations/downtown-1.jpg",
      "/images/locations/downtown-2.jpg",
      "/images/locations/downtown-3.jpg",
    ],
    features: [
      "Pure Vegetarian",
      "Delivery Only",
      "Available on Zomato",
      "Available on Swiggy",
    ],
    menu: [
      {
        name: "Paneer Butter Masala",
        description:
          "Soft paneer cubes simmered in a rich, velvety tomato-butter gravy with aromatic spices. A timeless Punjabi favourite.",
        price: "160",
        category: "Punjabi Mains",
        tags: ["Vegetarian"],
        image: "/images/menu/branzino.jpg",
      },
      {
        name: "Kadhai Paneer",
        description:
          "Paneer and capsicum tossed in a bold, spiced tomato-onion masala cooked in a kadhai for that authentic smoky flavour.",
        price: "160",
        category: "Punjabi Mains",
        tags: ["Vegetarian"],
      },
      {
        name: "Chole Masala",
        description:
          "Slow-cooked chickpeas in a tangy, aromatic masala — hearty, filling, and packed with flavour.",
        price: "130",
        category: "Punjabi Mains",
        tags: ["Vegan"],
      },
      {
        name: "Dal Tadka",
        description:
          "Yellow lentils tempered with ghee, cumin, garlic, and dried red chillies. Simple, soul-satisfying perfection.",
        price: "110",
        category: "Punjabi Mains",
        tags: ["Vegetarian"],
        image: "/images/menu/short-rib.jpg",
      },
      {
        name: "Mix Veg",
        description:
          "A colourful medley of seasonal vegetables cooked in a mild, fragrant masala gravy.",
        price: "130",
        category: "Punjabi Mains",
        tags: ["Vegan"],
      },
      {
        name: "Dal Rice",
        description:
          "Comfort food at its finest — steamed basmati rice served with a generously portioned dal tadka.",
        price: "120",
        category: "Rice Meals",
        tags: ["Vegetarian"],
      },
      {
        name: "Rajma Chawal",
        description:
          "Creamy kidney beans in a thick, spiced gravy served over fluffy steamed rice. The ultimate comfort bowl.",
        price: "140",
        category: "Rice Meals",
        tags: ["Vegan"],
        image: "/images/menu/tiramisu.jpg",
      },
      {
        name: "Jeera Rice",
        description:
          "Fragrant basmati rice tempered with cumin seeds and ghee — the perfect accompaniment to any curry.",
        price: "80",
        category: "Rice Meals",
        tags: ["Vegetarian"],
      },
    ],
  },
  {
    slug: "snacks-and-fast-food",
    name: "Snacks, Fast Food & Beverages",
    shortName: "Snacks & Fast Food",
    tagline: "Quick Bites, Big Flavours",
    description:
      "From perfectly steamed momos to crispy fries, fresh sandwiches to veg pizzas — our snack and fast food menu is ideal for quick hunger fixes, late-night cravings, and everything in between.",
    address: "Katraj–Kondhwa Belt",
    city: "Pune, Maharashtra",
    phone: "+91 98765 43210",
    hours: [
      { days: "Lunch", time: "12:00 PM – 3:30 PM" },
      { days: "Dinner & Late Night", time: "6:30 PM – 2:00 AM" },
    ],
    image: "/images/locations/waterfront.jpg",
    gallery: [
      "/images/locations/waterfront-1.jpg",
      "/images/locations/waterfront-2.jpg",
      "/images/locations/waterfront-3.jpg",
    ],
    features: [
      "Pure Vegetarian",
      "Delivery Only",
      "Available on Zomato",
      "Available on Swiggy",
    ],
    menu: [
      {
        name: "Steamed Momos",
        description:
          "Soft, pillowy dumplings stuffed with a spiced vegetable filling, served with a fiery red chutney.",
        price: "100",
        category: "Snacks",
        tags: ["Vegetarian"],
        image: "/images/menu/oysters.jpg",
      },
      {
        name: "Fried Momos",
        description:
          "Golden-crispy on the outside, juicy and flavourful on the inside — our fried momos are impossible to stop at one.",
        price: "110",
        category: "Snacks",
        tags: ["Vegetarian"],
      },
      {
        name: "Veg Sandwich",
        description:
          "Loaded with fresh vegetables, cheese, and a generous spread of green chutney on toasted bread.",
        price: "80",
        category: "Snacks",
        tags: ["Vegetarian"],
      },
      {
        name: "Fries",
        description:
          "Crispy golden fries seasoned with chaat masala — your perfect snack companion.",
        price: "70",
        category: "Snacks",
        tags: ["Vegan"],
        image: "/images/menu/lobster.jpg",
      },
      {
        name: "Veg Pizza",
        description:
          "A generously topped vegetarian pizza with a flavourful sauce, melted cheese, and fresh vegetable toppings.",
        price: "180",
        category: "Fast Food",
        tags: ["Vegetarian"],
        image: "/images/menu/seafood-linguine.jpg",
      },
      {
        name: "Coffee",
        description:
          "A warm, freshly brewed cup of coffee — the perfect companion for late-night study sessions or a relaxed evening.",
        price: "60",
        category: "Beverages",
        tags: ["Vegetarian"],
      },
      {
        name: "Fresh Juice",
        description:
          "Seasonal fresh-pressed juices to refresh and revitalise. Ask for today's flavour.",
        price: "70",
        category: "Beverages",
        tags: ["Vegan"],
      },
    ],
  },
  {
    slug: "combos-and-desserts",
    name: "Combo Offers & Desserts",
    shortName: "Combos & Desserts",
    tagline: "Best Value, Best Taste",
    description:
      "Our combo meals are designed to give you the most satisfying, value-for-money experience. Pair your favourite main with the perfect side — and finish with our Dessert of the Day.",
    address: "Katraj–Kondhwa Belt",
    city: "Pune, Maharashtra",
    phone: "+91 98765 43210",
    hours: [
      { days: "Lunch", time: "12:00 PM – 3:30 PM" },
      { days: "Dinner & Late Night", time: "6:30 PM – 2:00 AM" },
    ],
    image: "/images/locations/garden.jpg",
    gallery: [
      "/images/locations/garden-1.jpg",
      "/images/locations/garden-2.jpg",
      "/images/locations/garden-3.jpg",
    ],
    features: [
      "Pure Vegetarian",
      "Delivery Only",
      "Available on Zomato",
      "Available on Swiggy",
    ],
    menu: [
      {
        name: "Paneer Combo",
        description:
          "Paneer Butter Masala + 2 Butter Roti + Jeera Rice. The complete Punjabi meal experience in one satisfying box.",
        price: "260",
        category: "Combo Offers",
        tags: ["Vegetarian", "Best Value"],
        image: "/images/menu/crudites.jpg",
      },
      {
        name: "Student Combo",
        description:
          "Rajma Chawal + Fries. The ultimate budget-friendly, filling combo loved by students across Katraj and Kondhwa.",
        price: "180",
        category: "Combo Offers",
        tags: ["Vegan", "Best Value"],
      },
      {
        name: "Dal Combo",
        description:
          "Dal Tadka + Jeera Rice. A simple, wholesome, and deeply satisfying combination — ghar ka khana at its best.",
        price: "160",
        category: "Combo Offers",
        tags: ["Vegetarian", "Best Value"],
      },
      {
        name: "Snack Combo",
        description:
          "Momos (Steamed or Fried) + Coffee. The perfect evening snack pairing to unwind after a long day.",
        price: "150",
        category: "Combo Offers",
        tags: ["Vegetarian", "Best Value"],
        image: "/images/menu/cauliflower.jpg",
      },
      {
        name: "Gulab Jamun",
        description:
          "Soft, melt-in-your-mouth gulab jamuns soaked in rose-flavoured sugar syrup. A sweet ending to any meal.",
        price: "60",
        category: "Dessert of the Day",
        tags: ["Vegetarian"],
        image: "/images/menu/grain-bowl.jpg",
      },
      {
        name: "Seasonal Sweet",
        description:
          "Our chef's special sweet of the day — rotating with the seasons. Ask us what is fresh today.",
        price: "50",
        category: "Dessert of the Day",
        tags: ["Vegetarian"],
      },
    ],
  },
]

export interface Testimonial {
  quote: string
  author: string
  location: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The Paneer Butter Masala is exactly how my maa makes it. I order the Paneer Combo at least three times a week — it never disappoints.",
    author: "Rohit S.",
    location: "Kondhwa",
    rating: 5,
  },
  {
    quote:
      "As a student living alone in Katraj, Baadalo Pe Rasoi has been a lifesaver. The Student Combo is filling, delicious, and super affordable.",
    author: "Sneha P.",
    location: "Katraj",
    rating: 5,
  },
  {
    quote:
      "They deliver until 2 AM! That alone makes them the best cloud kitchen in Pune. The fried momos and coffee combo is my go-to after late-night study sessions.",
    author: "Aditya K.",
    location: "Kondhwa",
    rating: 5,
  },
  {
    quote:
      "Pure veg, home-style, and always fresh. The Dal Tadka tastes like it was cooked with love. So happy to have found this gem on Swiggy.",
    author: "Meenakshi T.",
    location: "Katraj",
    rating: 5,
  },
]

export const galleryImages = [
  { src: "/images/gallery/dish-1.jpg", alt: "Paneer Butter Masala" },
  { src: "/images/gallery/dish-2.jpg", alt: "Rajma Chawal combo" },
  { src: "/images/gallery/interior-1.jpg", alt: "Baadalo Pe Rasoi kitchen" },
  { src: "/images/gallery/dish-3.jpg", alt: "Steamed momos with chutney" },
  { src: "/images/gallery/interior-2.jpg", alt: "Fresh food being prepared" },
  { src: "/images/gallery/dish-4.jpg", alt: "Gulab Jamun dessert" },
]
