import hero1 from '@assets/generated_images/little_girl_in_pink_frock_twirling.png';
import hero2 from '@assets/generated_images/kids_party_wear_group_shot.png';
import pinkFrock from '@assets/generated_images/pink_satin_kids_frock.png';
import blueFrock from '@assets/generated_images/blue_satin_kids_frock.png';
import redFrock from '@assets/generated_images/red_satin_kids_frock.png';

export interface ProductColor {
  name: string;
  value: string; // CSS color code
  image: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: ProductColor[];
  sizes: string[];
  defaultImage: string;
}

export const HERO_SLIDES = [
  {
    id: 1,
    image: hero1,
    title: "Whimsical Elegance",
    subtitle: "Handcrafted frocks for your little princess"
  },
  {
    id: 2,
    image: hero2,
    title: "Party Perfect",
    subtitle: "Celebrate in style with our new collection"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "satin-princess-frock",
    name: "The Satin Princess Frock",
    price: 129.00,
    description: "A luxurious satin frock designed for special occasions. Features a fitted bodice, voluminous skirt, and delicate detailing. Made from premium soft-touch satin to ensure comfort for your little one.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    defaultImage: pinkFrock,
    colors: [
      { name: "Rose Pink", value: "#FFB7C5", image: pinkFrock },
      { name: "Powder Blue", value: "#AEC6CF", image: blueFrock },
      { name: "Ruby Red", value: "#E0115F", image: redFrock }
    ]
  },
  {
    id: "floral-summer-dream",
    name: "Floral Summer Dream",
    price: 89.00,
    description: "Lightweight cotton frock with hand-painted floral motifs. Perfect for garden parties and sunny days.",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    defaultImage: hero1, // Using hero image as placeholder for other products
    colors: [
      { name: "Garden Pink", value: "#FFB7C5", image: hero1 }
    ]
  }
];
