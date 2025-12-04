"use client";

import Section from "@/components/Section";
import { motion } from "framer-motion";
import { Search, Music, Utensils, Mountain, BookOpen, Camera, Landmark, ArrowRight } from "lucide-react";

import Image from 'next/image';
import { useRouter } from "next/navigation";
import Link from "next/link";

const categories = [
  { id: "music", name: "Folk Music", icon: Music, color: "bg-orange-100 text-orange-700", url:"#" },
  { id: "food", name: "Cuisine", icon: Utensils, color: "bg-green-100 text-green-700", url:"#" },
  { id: "places", name: "Places", icon: Mountain, color: "bg-blue-100 text-blue-700", url:"#" },
  { id: "stories", name: "Stories", icon: BookOpen, color: "bg-purple-100 text-purple-700", url:"#" },
  { id: "arts", name: "Arts & Craft", icon: Camera, color: "bg-pink-100 text-pink-700" , url:"#" },
  { id: "temples", name: "Temples", icon: Landmark, color: "bg-amber-100 text-amber-700", url:"/explore/temples" },
];

const features = [
  {
    title: "Traditional Instruments",
    category: "Music",
    image: "https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=2070&auto=format&fit=crop",
    desc: "Learn about the Dhol, Damau, Ransingha, and Hudka."
  },
  {
    title: "The Art of Aipan",
    category: "Arts & Craft",
    image: "https://images.unsplash.com/photo-1605448366656-8392b97819c0?q=80&w=2070&auto=format&fit=crop", // generic art
    desc: "Discover the geometric red and white ritual folk art."
  },
  {
    title: "Bhatt ki Churkani",
    category: "Cuisine",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2070&auto=format&fit=crop", // generic food
    desc: "A black soybean curry rich in protein and iron."
  },
  {
    title: "Jageshwar Dham",
    category: "Temples",
    image: "https://images.unsplash.com/photo-1591267278090-27c7e7582716?q=80&w=1974&auto=format&fit=crop",
    desc: "A cluster of 124 ancient stone temples amidst deodar forests."
  },
  {
    title: "Raj Jat Yatra",
    category: "Stories",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1976&auto=format&fit=crop",
    desc: "The longest pilgrimage in the world dedicated to Nanda Devi."
  },
  {
    title: "Pahadi Topi",
    category: "Arts & Craft",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2071&auto=format&fit=crop", // generic
    desc: "The symbol of pride and identity for the men of Uttarakhand."
  }
];

export default function Explore() {
    const router = useRouter();
  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      <section className="pt-32 pb-12 px-2 sm:px-6 bg-background border-b border-border" >
        <div className="max-w-7xl mx-auto" >
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-8"
          >
            Explore the Heritage
          </motion.h1>
          
          <div className="relative max-w-2xl mb-12">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              placeholder="Search for dances, food, temples..." 
              className="flex w-full border px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  pl-12 h-14 rounded-full text-lg bg-muted/30 border-border/50 focus:ring-secondary"
            />
          </div>

          {/* Categories */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar pt-1 pb-1 ">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium whitespace-nowrap transition-transform hover:scale-105 cursor-pointer ${cat.color}`}
                onClick={() => router.push(`${cat.url}`)}
              >
                <cat.icon className="w-4 h-4" />
                {cat.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {item.category}
                </div>
                <Image fill
                  src={item.image}
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-2 group-hover:text-secondary transition-colors flex items-center gap-2">
                {item.title}
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>
    </div>
  );
}
