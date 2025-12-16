import hero1 from '@assets/generated_images/little_girl_in_pink_frock_twirling.png';
import hero2 from '@assets/generated_images/kids_party_wear_group_shot.png';
import pinkFrock from '@assets/generated_images/pink_satin_kids_frock.png';
import blueFrock from '@assets/generated_images/blue_satin_kids_frock.png';
import redFrock from '@assets/generated_images/red_satin_kids_frock.png';
import floralFrock from '@assets/generated_images/floral_summer_kids_frock.png';
import velvetDress from '@assets/generated_images/navy_blue_velvet_kids_dress.png';
import laceGown from '@assets/generated_images/lace_white_christening_gown.png';

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
    defaultImage: floralFrock,
    colors: [
      { name: "Garden White", value: "#FFFFFF", image: floralFrock }
    ]
  },
  {
    id: "velvet-midnight-elegance",
    name: "Midnight Velvet Elegance",
    price: 145.00,
    description: "Rich navy blue velvet dress with gold ribbon accents. The perfect choice for winter weddings and evening galas.",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    defaultImage: velvetDress,
    colors: [
      { name: "Navy Blue", value: "#000080", image: velvetDress }
    ]
  },
  {
    id: "vintage-lace-heirloom",
    name: "Vintage Lace Heirloom",
    price: 185.00,
    description: "Intricate white lace gown inspired by vintage designs. Ideal for christenings, flower girls, or any timeless celebration.",
    sizes: ["6-12M", "12-18M", "2-3Y"],
    defaultImage: laceGown,
    colors: [
      { name: "Antique White", value: "#FDFDD0", image: laceGown }
    ]
  }
];
