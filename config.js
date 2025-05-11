// @ts-check
import profileImage from "./src/images/profilepic.png?url";
import backgroundImage from "./src/images/backgrounds/watercolor-blue-green.png?url";
import productImage from "./src/images/product1.png?url";

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "ItemGame",
    bio: "Top up game cepat, murah, dan terpercaya. Tersedia Mobile Legends, Free Fire, PUBG, Genshin, dan lainnya.",
    profileImage: profileImage,
  },
  background: {
    color: "#f5faff",
    image: backgroundImage,
  },
  socialLinks: [
    {
      platform: "facebook",
      url: "https://facebook.com/itemgame",
      icon: "facebook",
    },
    {
      platform: "x",
      url: "https://x.com/itemgame",
      icon: "x-twitter", // bisa juga "twitter" tergantung icon support-nya
    },
    {
      platform: "instagram",
      url: "https://instagram.com/itemgame",
      icon: "instagram",
    },
    {
      platform: "youtube",
      url: "https://youtube.com/@itemgame",
      icon: "youtube",
    },
    {
      platform: "tiktok",
      url: "https://tiktok.com/@itemgame",
      icon: "tiktok",
    },
    {
      platform: "whatsapp",
      url: "https://wa.me/6281314569839",
      icon: "whatsapp",
    },
    {
      platform: "globe",
      url: "https://itemgame.com",
      icon: "globe",
    },
  ],

  links: [
    {
      title: "Website Resmi",
      url: "https://itemgame.com",
      icon: "globe",
    },
    {
      title: "Grup Komunitas WA",
      url: "https://chat.whatsapp.com/FI0iNdxFm4MIeMAs6L7ggq",
      icon: "users",
    },
    {
      title: "Hubungi via WhatsApp",
      url: "https://wa.me/6281314569839",
      icon: "whatsapp",
    },
    {
      title: "Follow Instagram",
      url: "https://instagram.com/itemgame",
      icon: "instagram",
    }
  ],

  products: [
    {
      title: "Top Up Mobile Legends",
      description: "Diamond murah dan instan. Masukkan ID & Zone.",
      url: "https://itemgame.com/id-id/mobile-legends",
      price: 9999,
      includePriceOnSite: false,
      image: productImage,
    },
    {
      title: "Top Up Free Fire",
      description: "Langsung masuk ke akun kamu, harga terjangkau.",
      url: "https://itemgame.com/id-id/free-fire",
      price: 1000,
      includePriceOnSite: false,
      image: productImage,
    },
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false,
  },
};

export default config;
