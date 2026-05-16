type Venue = {
  name: string;
  slug: string;
  capacity: string;
  style: string;
  neighborhood: string;
  priceFrom: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
};

// All images hotlinked from Unsplash (royalty-free, no attribution required).
// Using direct photo IDs because the old source.unsplash.com endpoint is dead.
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=70`;

export const VENUES: Venue[] = [
  {
    name: "Casa Loma",
    slug: "casa-loma",
    capacity: "Up to 1,500",
    style: "Historic castle",
    neighborhood: "Midtown",
    priceFrom: "$15,000",
    image: unsplash("photo-1519741497674-611481863552"),
    imageAlt: "Gothic castle with manicured gardens",
    description:
      "Casa Loma is a stunning Gothic Revival castle in midtown Toronto that has become one of the most iconic wedding venues in the city. This breathtaking 1914 castle sits on five acres of beautifully manicured gardens, offering couples a fairy-tale wedding setting with multiple ceremony and reception spaces to choose from.",
    highlights: [
      "Great Hall with 60-foot vaulted ceilings",
      "Glass-domed Conservatory for ceremonies",
      "Five acres of manicured gardens",
      "Multiple ballroom options for any size wedding",
    ],
  },
  {
    name: "Liberty Grand Entertainment Complex",
    slug: "liberty-grand",
    capacity: "Up to 2,000",
    style: "Luxury waterfront",
    neighborhood: "Exhibition Place",
    priceFrom: "$12,000",
    image: unsplash("photo-1464366400600-7168b8af9bc3"),
    imageAlt: "Grand ballroom with crystal chandeliers and arched windows",
    description:
      "Liberty Grand is one of Toronto's most luxurious waterfront wedding venues, offering three grand ballrooms that blend historic charm with contemporary luxury. Each ballroom features crystal chandeliers, 27-foot ceilings, and floor-to-ceiling arched windows with stunning views.",
    highlights: [
      "Three grand ballrooms for celebrations of any size",
      "Crystal chandeliers and 27-foot ceilings",
      "Award-winning in-house catering",
      "Convenient downtown waterfront location",
    ],
  },
  {
    name: "The Four Seasons Hotel Toronto",
    slug: "four-seasons",
    capacity: "Up to 600",
    style: "Modern luxury hotel",
    neighborhood: "Yorkville",
    priceFrom: "$20,000",
    image: unsplash("photo-1540575467063-178a50c2df87"),
    imageAlt: "Modern luxury hotel ballroom with floor-to-ceiling windows",
    description:
      "The Four Seasons Hotel Toronto is renowned for its impeccable service and contemporary elegance. The hotel offers various event spaces including the glamorous Ballroom with floor-to-ceiling windows showcasing breathtaking views of the Toronto skyline.",
    highlights: [
      "Five-star service and accommodations",
      "Customized wedding packages",
      "Spectacular city views",
      "On-site overnight accommodation for guests",
    ],
  },
  {
    name: "Hotel X Toronto",
    slug: "hotel-x",
    capacity: "Up to 1,200",
    style: "Modern waterfront",
    neighborhood: "Exhibition Place",
    priceFrom: "$10,000",
    image: unsplash("photo-1517457373958-b7bdd4587205"),
    imageAlt: "Toronto skyline view from a rooftop terrace at sunset",
    description:
      "Hotel X Toronto offers a perfect blend of modern elegance and stunning views of the city skyline and Lake Ontario. With its rooftop terrace called The Peak and surrounding green spaces, this venue provides both indoor and outdoor wedding options.",
    highlights: [
      "Rooftop terrace with panoramic city and lake views",
      "Multiple indoor and outdoor ceremony spaces",
      "Modern, contemporary design",
      "404 luxurious guest rooms for wedding guests",
    ],
  },
  {
    name: "Steam Whistle Brewery",
    slug: "steam-whistle",
    capacity: "Up to 500",
    style: "Industrial chic",
    neighborhood: "Entertainment District",
    priceFrom: "$8,000",
    image: unsplash("photo-1505275350441-83dcda8eeef5"),
    imageAlt: "Industrial brewery interior with exposed brick and wood beams",
    description:
      "Located inside Toronto's historic John St. Roundhouse, Steam Whistle Brewery blends industrial architecture with warm character. Exposed brick walls, soaring wooden beams, and abundant natural light create an incredible backdrop for both modern and vintage-inspired weddings.",
    highlights: [
      "Historic Roundhouse architecture",
      "Exposed brick and wood beam interior",
      "Craft beer and customizable menu",
      "Iconic downtown location",
    ],
  },
  {
    name: "The Eglinton Grand",
    slug: "eglinton-grand",
    capacity: "Up to 400",
    style: "Art Deco theatre",
    neighborhood: "Midtown",
    priceFrom: "$10,000",
    image: unsplash("photo-1503095396549-807759245b35"),
    imageAlt: "Restored Art Deco theatre with dramatic stage and chandeliers",
    description:
      "The Eglinton Grand is a restored historic theatre turned event space and one of Toronto's most iconic Art Deco venues. Its dramatic stage, sweeping drapery, soaring ceilings, and glamorous chandeliers make it ideal for couples wanting an old-Hollywood, red-carpet feel.",
    highlights: [
      "Restored 1936 Art Deco theatre",
      "Dramatic stage and grand chandeliers",
      "In-house catering and event coordination",
      "Free on-site parking",
    ],
  },
  {
    name: "The Fairmont Royal York",
    slug: "fairmont-royal-york",
    capacity: "Up to 1,500",
    style: "Historic luxury hotel",
    neighborhood: "Downtown Core",
    priceFrom: "$18,000",
    image: unsplash("photo-1566073771259-6a8506099945"),
    imageAlt: "Classic grand hotel ballroom with ornate ceiling",
    description:
      "The Fairmont Royal York is one of Toronto's most legendary wedding venues. This iconic downtown hotel, established in 1929, offers grand ballrooms with timeless elegance, intricate ceiling details, and a level of service expected from a true grand hotel.",
    highlights: [
      "Iconic historic landmark hotel since 1929",
      "Imperial Room ballroom with original 1929 details",
      "Direct underground PATH access",
      "Award-winning culinary team",
    ],
  },
  {
    name: "Evergreen Brick Works",
    slug: "evergreen-brick-works",
    capacity: "Up to 600",
    style: "Industrial outdoor",
    neighborhood: "Don Valley",
    priceFrom: "$8,000",
    image: unsplash("photo-1519225421980-715cb0215aed"),
    imageAlt: "Outdoor wedding venue with lush greenery and industrial bones",
    description:
      "Evergreen Brick Works is a unique outdoor and indoor wedding venue set in a beautifully restored former brick factory in the Don Valley. The space combines industrial heritage with lush gardens, creating a wedding setting that feels both urban and natural.",
    highlights: [
      "Indoor-outdoor flexibility year-round",
      "Sustainable, eco-conscious operations",
      "Surrounded by ravine and nature trails",
      "Local farm-to-table catering options",
    ],
  },
  {
    name: "The Old Mill Toronto",
    slug: "old-mill",
    capacity: "Up to 350",
    style: "Romantic historic",
    neighborhood: "West End",
    priceFrom: "$8,000",
    image: unsplash("photo-1564501049412-61c2a3083791"),
    imageAlt: "Tudor-style stone manor with romantic gardens",
    description:
      "The Old Mill Toronto is a charming historic property in Toronto's West End, established in 1914. With its English Tudor architecture, stone arches, lush gardens, and intimate dining rooms, it offers a romantic and timeless wedding setting unlike any other in the city.",
    highlights: [
      "Historic Tudor architecture from 1914",
      "Multiple intimate event spaces",
      "Hotel accommodations on site",
      "Picturesque ravine setting",
    ],
  },
  {
    name: "The Globe and Mail Centre",
    slug: "globe-and-mail-centre",
    capacity: "Up to 700",
    style: "Modern skyline views",
    neighborhood: "East Bayfront",
    priceFrom: "$10,000",
    image: unsplash("photo-1517502884422-41eaead166d4"),
    imageAlt: "Modern event space with floor-to-ceiling windows and city skyline",
    description:
      "The Globe and Mail Centre offers one of the most spectacular wedding venues in Toronto, with floor-to-ceiling windows providing unobstructed views of the city skyline and Lake Ontario. This contemporary venue features sleek, modern design and a 17th-floor sky-lobby setting.",
    highlights: [
      "17th-floor panoramic city and lake views",
      "Floor-to-ceiling windows throughout",
      "Modern, minimalist design aesthetic",
      "Flexible space for ceremonies and receptions",
    ],
  },
];
