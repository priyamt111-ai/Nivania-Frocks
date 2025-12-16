import hero1 from '@assets/generated_images/little_girl_in_pink_frock_twirling.png';
import hero2 from '@assets/generated_images/kids_party_wear_group_shot.png';
import pinkFrock from '@assets/generated_images/pink_satin_kids_frock.png';
import pinkFrockBack from '@assets/generated_images/pink_satin_frock_back_view.png';
import pinkFrockDetail from '@assets/generated_images/pink_satin_frock_detail_view.png';
import blueFrock from '@assets/generated_images/blue_satin_kids_frock.png';
import blueFrockBack from '@assets/generated_images/blue_satin_frock_back_view.png';
import blueFrockDetail from '@assets/generated_images/blue_satin_frock_detail_view.png';
import redFrock from '@assets/generated_images/red_satin_kids_frock.png';
import redFrockBack from '@assets/generated_images/red_satin_frock_back_view.png';
import redFrockDetail from '@assets/generated_images/red_satin_frock_detail_view.png';
import floralFrock from '@assets/generated_images/floral_summer_kids_frock.png';
import velvetDress from '@assets/generated_images/navy_blue_velvet_kids_dress.png';
import laceGown from '@assets/generated_images/lace_white_christening_gown.png';

export interface ProductColor {
  name: string;
  value: string; // CSS color code
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: ProductColor[];
  sizes: string[];
  defaultImages: string[];
  tags?: string[];
  designDetails?: string;
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
    price: 3290.00,
    description: "A luxurious satin frock designed for special occasions. Features a fitted bodice, voluminous skirt, and delicate detailing. Made from premium soft-touch satin to ensure comfort for your little one.",
    sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    defaultImages: [pinkFrock, pinkFrockBack, pinkFrockDetail],
    tags: ["Customisable", "New"],
    designDetails: "Satin Finish | Back Bow Tie | Hidden Zipper | Cotton Lining",
    colors: [
      { name: "Rose Pink", value: "#FFB7C5", images: [pinkFrock, pinkFrockBack, pinkFrockDetail] },
      { name: "Powder Blue", value: "#AEC6CF", images: [blueFrock, blueFrockBack, blueFrockDetail] },
      { name: "Ruby Red", value: "#E0115F", images: [redFrock, redFrockBack, redFrockDetail] }
    ]
  },
  {
    id: "floral-summer-dream",
    name: "Floral Summer Dream",
    price: 2490.00,
    description: "Lightweight cotton frock with hand-painted floral motifs. Perfect for garden parties and sunny days.",
    sizes: ["2-3Y", "4-5Y", "6-7Y"],
    defaultImages: [floralFrock],
    tags: ["Cotton", "Summer"],
    designDetails: "Hand Painted | Breathable Cotton | Flutter Sleeves",
    colors: [
      { name: "Garden White", value: "#FFFFFF", images: [floralFrock] }
    ]
  },
  {
    id: "velvet-midnight-elegance",
    name: "Midnight Velvet Elegance",
    price: 4500.00,
    description: "Rich navy blue velvet dress with gold ribbon accents. The perfect choice for winter weddings and evening galas.",
    sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
    defaultImages: [velvetDress],
    tags: ["Luxury", "Winter"],
    designDetails: "Premium Velvet | Gold Accents | Full Lining",
    colors: [
      { name: "Navy Blue", value: "#000080", images: [velvetDress] }
    ]
  },
  {
    id: "vintage-lace-heirloom",
    name: "Vintage Lace Heirloom",
    price: 5200.00,
    description: "Intricate white lace gown inspired by vintage designs. Ideal for christenings, flower girls, or any timeless celebration.",
    sizes: ["6-12M", "12-18M", "2-3Y"],
    defaultImages: [laceGown],
    tags: ["Heirloom", "Lace"],
    designDetails: "French Lace | Pearl Buttons | Scalloped Hem",
    colors: [
      { name: "Antique White", value: "#FDFDD0", images: [laceGown] }
    ]
  }
];
