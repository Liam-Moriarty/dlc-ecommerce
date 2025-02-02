import dummyImg from "../assets/test.png";
import dummyImg2 from "../assets/test-2.png";
import dummyImg3 from "../assets/test-3.png";
import dummyImg4 from "../assets/test-4.png";

import { RiShoppingBag4Fill } from "react-icons/ri";

import { IoGrid } from "react-icons/io5";

export const banner = [
  {
    tag: "SeasonalSale",
    label: "Fantastic Offers While Supplies Last!",
    image: dummyImg,
  },
  {
    tag: "ExclusiveSale",
    label: "Grab 50% Off on Selected Items Now!",
    image: dummyImg2,
  },
  {
    tag: "FlashSale",
    label: "Exclusive Deals Await You Here!",
    image: dummyImg3,
  },
  {
    tag: "BestBuy",
    label: "Buy One, Get One Free: Double the Savings!",
    image: dummyImg4,
  },
];

export const categories = [
  {
    path: "/coffee",
    label: "coffee",
    image: dummyImg,
  },
  {
    path: "/showcase",
    label: "showcase",
    image: dummyImg2,
  },
  {
    path: "/carpigiani",
    label: "carpigiani",
    image: dummyImg3,
  },
  {
    path: "/scotsman",
    label: "scotsman",
    image: dummyImg4,
  },
  {
    path: "/uncategorized",
    label: "uncategorized",
    image: dummyImg,
  },
  {
    path: "/others",
    label: "others",
    image: dummyImg2,
  },
  {
    path: "/",
    label: "all category",
    icon: <IoGrid className="text-gray-text font-bold text-xl" />,
  },
];

export const saleCards = [
  {
    _id: "1",
    label: "dlc-fws-002",
    category: "food warming showcase",
    price: "40000",
    stock: "170",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg,
  },
  {
    _id: "2",
    label: "scotsman n0922 prodigy plus",
    category: "scotsman",
    price: "18500",
    stock: "167",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg2,
  },
  {
    _id: "3",
    label: "dlc-fws-003",
    category: "food warming showcase",
    price: "50000",
    stock: "132",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg3,
  },
  {
    _id: "4",
    label: "cup sealer",
    category: "uncategorized",
    price: "10999",
    stock: "175",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg4,
  },
  {
    _id: "5",
    label: "anvil dfc2200",
    category: "other equipments",
    price: "32500",
    stock: "164",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg,
  },
  {
    _id: "6",
    label: "tea & coffee brewer cof-002",
    category: "coffee equipment",
    price: "26999",
    stock: "189",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg2,
  },
  {
    _id: "7",
    label: "anvil dhc4900-002",
    category: "carpigiani",
    price: "15999",
    stock: "164",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg4,
  },
  {
    _id: "8",
    label: "dlc-fws-002",
    category: "food warming showcase",
    price: "40000",
    stock: "170",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg,
  },
  {
    _id: "9",
    label: "scotsman n0922 prodigy plus",
    category: "scotsman",
    price: "18500",
    stock: "167",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg2,
  },
  {
    _id: "10",
    label: "anvil dfc2200",
    category: "other equipments",
    price: "32500",
    stock: "164",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapientevero ipsum, quam quo unde repudiandae rem tenetur voluptatibus?Fuga, omnis minima ex sint eum atque laudantium veniam aut expeditamagnam.",
    image: dummyImg,
  },
];

export const categoryLinks = [
  { label: "coffee", link: "/coffee" },
  { label: "carpigiani", link: "/carpigiani" },
  { label: "scotsman", link: "/scotsman" },
  { label: "others", link: "/others" },
];

export const sellingBrands = [
  {
    brand: "frozen beverage dispenser",
    tagline: "Chill & Sip",
    icon: (
      <RiShoppingBag4Fill className="text-black-text text-xl font-extrabold" />
    ),
    image: [dummyImg, dummyImg2, dummyImg3],
  },
  {
    brand: "freser",
    tagline: "Freshly Yours",
    icon: (
      <RiShoppingBag4Fill className="text-black-text text-xl font-extrabold" />
    ),
    image: [dummyImg, dummyImg2, dummyImg3],
  },
  {
    brand: "donper",
    tagline: "Pour Perfection",
    icon: (
      <RiShoppingBag4Fill className="text-black-text text-xl font-extrabold" />
    ),
    image: [dummyImg, dummyImg2, dummyImg3],
  },
  {
    brand: "blendtech",
    tagline: "Blend Bliss",
    icon: (
      <RiShoppingBag4Fill className="text-black-text text-xl font-extrabold" />
    ),
    image: [dummyImg, dummyImg2, dummyImg3],
  },
];

export const carouselSettings = {
  dots: false,
  infinite: false,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 1330,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "80px",
        infinite: true,
      },
    },
    {
      breakpoint: 486,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        infinite: true,
      },
    },
    {
      breakpoint: 388,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};
