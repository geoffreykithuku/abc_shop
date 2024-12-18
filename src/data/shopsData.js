import phone from "../assets/phone.svg";
import tv from "../assets/tv.png";
import gaming from "../assets/gaming.png";
import dell from "../assets/dell.png";
import chromecast from "../assets/chromecast.png";

export const shops = [
  {
    id: 1,
    name: "Alana Electronics",
    tagline: "Best Deal Online on smart phones",
    description: "AT CHEAP PRICE.",
    discount: "UP to 60% OFF",
    bannerImage: phone,
    bannerColor: "primary-100",
    products: [
      {
        id: 101,
        name: "Smart TV",
        description:
          "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        image: tv,
        discount: "20% OFF",
        price: 12000,
        originalPrice: 15000,
        rating: 4.5,
        reviews: 911,
      },
      {
        id: 102,
        name: "Gaming Headphones",
        description: "Wired Over-Ear Gaming Headphones with USB",
        image: gaming,
        discount: "15% OFF",
        price: 8000,
        originalPrice: 9400,
        rating: 4.2,
        reviews: 512,
      },
      {
        id: 103,
        name: "Dell Monitor",
        description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        image: dell,
        discount: "10% OFF",
        price: 25000,
        originalPrice: 28000,
        rating: 4.6,
        reviews: 221,
      },
      {
        id: 104,
        name: "Chromecast",
        description: "Streaming Device with built-in Chromecast support",
        image: chromecast,
        discount: "25% OFF",
        price: 3500,
        originalPrice: 4700,
        rating: 4.3,
        reviews: 340,
      },
      {
        id: 105,
        name: "Smartphone Stand",
        description: "Adjustable Smartphone Stand for Desk",
        image: phone,
        discount: "30% OFF",
        price: 1500,
        originalPrice: 2100,
        rating: 4.7,
        reviews: 845,
      },
    ],
    contact: {
      isVerified: true,
      phone: "0759753332",
      followers: 600,
      location: "Karen, Nairobi",
      shopAddress: "Sawa mall, G14",
      rating: 4.5,
    },
  },
  {
    id: 2,
    name: "Sawa Electronics",
    tagline: "Best Deal Online on smart phones",
    description: "AT CHEAP PRICE.",
    discount: "UP to 60% OFF",
    bannerImage: phone,
    bannerColor: "blue",
    products: [
      {
        id: 201,
        name: "Smart TV",
        description:
          "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        image: tv,
        discount: "18% OFF",
        price: 13000,
        originalPrice: 15800,
        rating: 4.4,
        reviews: 823,
      },
      {
        id: 202,
        name: "Gaming Headphones",
        description: "Wired Over-Ear Gaming Headphones with USB",
        image: gaming,
        discount: "15% OFF",
        price: 8500,
        originalPrice: 10000,
        rating: 4.1,
        reviews: 654,
      },
      {
        id: 203,
        name: "Dell Monitor",
        description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        image: dell,
        discount: "12% OFF",
        price: 24000,
        originalPrice: 27000,
        rating: 4.5,
        reviews: 190,
      },
      {
        id: 204,
        name: "Chromecast",
        description: "Streaming Device with built-in Chromecast support",
        image: chromecast,
        discount: "20% OFF",
        price: 3600,
        originalPrice: 4500,
        rating: 4.2,
        reviews: 400,
      },
      {
        id: 205,
        name: "Smartphone Stand",
        description: "Adjustable Smartphone Stand for Desk",
        image: phone,
        discount: "28% OFF",
        price: 1450,
        originalPrice: 2000,
        rating: 4.6,
        reviews: 900,
      },
    ],
    contact: {
      isVerified: true,
      phone: "0732221100",
      followers: 1000,
      location: "Westlands, Nairobi",
      shopAddress: "MegaMall, 2nd Floor",
      rating: 4.3,
    },
  },
  {
    id: 3,
    name: "Biggy Electronics",
    tagline: "Best Deal Online on smart phones",
    description: "AT CHEAP PRICE.",
    discount: "UP to 60% OFF",
    bannerImage: phone,
    bannerColor: "green-100",
    products: [
      {
        id: 301,
        name: "Smart TV",
        description:
          "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        image: tv,
        discount: "22% OFF",
        price: 12500,
        originalPrice: 16000,
        rating: 4.5,
        reviews: 1000,
      },
      {
        id: 302,
        name: "Gaming Headphones",
        description: "Wired Over-Ear Gaming Headphones with USB",
        image: gaming,
        discount: "17% OFF",
        price: 8700,
        originalPrice: 10500,
        rating: 4.3,
        reviews: 678,
      },
      {
        id: 303,
        name: "Dell Monitor",
        description: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        image: dell,
        discount: "15% OFF",
        price: 24500,
        originalPrice: 29000,
        rating: 4.7,
        reviews: 299,
      },
      {
        id: 304,
        name: "Chromecast",
        description: "Streaming Device with built-in Chromecast support",
        image: chromecast,
        discount: "18% OFF",
        price: 3800,
        originalPrice: 4600,
        rating: 4.4,
        reviews: 530,
      },
      {
        id: 305,
        name: "Smartphone Stand",
        description: "Adjustable Smartphone Stand for Desk",
        image: phone,
        discount: "25% OFF",
        price: 1400,
        originalPrice: 1900,
        rating: 4.8,
        reviews: 950,
      },
    ],
    contact: {
      isVerified: true,
      phone: "0744443322",
      followers: 800,
      location: "CBD, Nairobi",
      shopAddress: "Tech Plaza, G10",
      rating: 4.8,
    },
  },
];
