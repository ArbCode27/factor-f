import {
  Clapperboard,
  Camera,
  Mic2,
  PlaySquare,
  Radio,
  Sparkles,
  Trophy,
} from "lucide-react";

export const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Portada", href: "#universo" },
  { label: "Columnistas", href: "#hosts" },
  { label: "Ediciones", href: "#episodios" },
  { label: "Contacto", href: "#contacto" },
];

export const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/elfactorf/",
    icon: Camera,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@elfactorf?si=qDo3LxT9H_V687x5",
    icon: PlaySquare,
  },
];

export const topicCards = [
  {
    title: "Farándula",
    description:
      "Misses, celebridades, tendencias y esos momentos que todos quieren comentar.",
    icon: Sparkles,
    accent: "bg-[#A83232]",
  },
  {
    title: "Fútbol",
    description:
      "Análisis, emoción y conversación de cancha con mirada venezolana.",
    icon: Trophy,
    accent: "bg-[#1F4E79]",
  },
  {
    title: "Actualidad",
    description:
      "Lo que está pasando en redes, medios y cultura pop explicado sin vueltas.",
    icon: Mic2,
    accent: "bg-[#C9B88F]",
  },
  {
    title: "Reacciones",
    description:
      "Clips, frases y momentos espontáneos que nacen de cada conversación.",
    icon: Clapperboard,
    accent: "bg-[#2B2520]",
  },
];

export const hosts = [
  {
    name: "Marie Ferro",
    role: "Periodista deportiva y voz de contexto",
    image: "/marie-2.jpg",
    imageAlt: "Marie Ferro en un estadio cubriendo contenido deportivo",
    description:
      "Pone mirada periodística, fútbol, actualidad y criterio para que cada tema tenga fondo.",
    stats: ["Fútbol", "Actualidad", "Análisis"],
  },
  {
    name: "Máximo Ferro",
    role: "Creador, reacción y energía digital",
    image: "/maximo-2.jpg",
    imageAlt: "Máximo Ferro en una sesión editorial para Factor F",
    description:
      "Trae humor, espontaneidad y esa reacción que convierte cualquier tema en clip memorable.",
    stats: ["Humor", "Vlogs", "Reacciones"],
  },
];

export const episodes = [
  {
    number: "01",
    category: "Especial",
    title: "Miss Venezuela 2025",
    description:
      "Reacciones, tensión, comentarios y todo lo que se habló después de una noche de corona.",
  },
  {
    number: "02",
    category: "Fútbol",
    title: "La semana del fútbol",
    description:
      "Lo que pasó dentro y fuera de la cancha contado con análisis, humor y cero solemnidad.",
  },
  {
    number: "03",
    category: "Vlog",
    title: "Una mañana con Máximo",
    description:
      "Vida real, cabeza a mil y situaciones cotidianas que terminan pareciendo sección fija.",
  },
];

export const moments = [
  "Máximo volvió a respirar",
  "La parte del o sea",
  "Marie pone contexto",
  "Ese tema tiene Factor F",
];

export const showPillars = [
  "Farándula",
  "Fútbol",
  "Opinión",
  "Reacciones",
  "Venezuela",
  "Domingos",
];

export const liveSignals = [
  { label: "Nueva edición", value: "Domingos", icon: Radio },
  { label: "Lo ves en", value: "YouTube", icon: Clapperboard },
  { label: "Lo comentas en", value: "Instagram", icon: Sparkles },
];
