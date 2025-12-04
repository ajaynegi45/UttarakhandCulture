"use client";

import { useParams } from "next/navigation";
import Section from "@/components/Section";
import { districts } from "@/data/districts";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MapPin, BookOpen, Mountain, Landmark, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import DistrictTehsilMap from "@/components/DistrictTehsilMap";

export default function DistrictDetail() {
    const params = useParams();
    const id = params?.districtId as string;
    const district = districts.find((d) => {
        const normalizeId = (str: string) => str.toLowerCase().replace(/-/g, '');
        return normalizeId(d.id) === normalizeId(id || '');
    });


  if (!district) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">District Not Found</h1>
          <Link href="/explore/districts">
            <Button>Return to Map</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!district.subdivisions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Data Error</h1>
          <p className="mb-6">Subdivision data not available</p>
          <Link href="/explore/districts">
            <Button>Return to Map</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <Image fill src={district.image} alt={district.name} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-20 text-white z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-2 mb-4">
              <Link href="/explore/districts">
                <Button variant="outline" size="sm" className="rounded-full bg-white/20 border-white/40 hover:bg-white/30 text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back to Map
                </Button>
              </Link>
              <span className="bg-secondary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                {district.region} Region
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">{district.name}</h1>
            <p className="text-xl md:text-2xl max-w-2xl font-light text-white/90">
              {district.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content Grid */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Geography Map & Stats */}
          <div className="lg:col-span-5 space-y-8">
             <div className="bg-white p-8 rounded-3xl shadow-sm border border-border/50">
                <h2 className="text-2xl font-serif font-bold mb-6 flex items-center gap-2">
                   <MapPin className="w-6 h-6 text-primary" /> Geographical Map
                </h2>
                <DistrictTehsilMap districtName={district.name} />
                <p className="text-center text-xs text-muted-foreground mt-4">
                   *Visual representation of administrative divisions
                </p>
             </div>

             <div className="bg-muted/20 p-8 rounded-3xl border border-border/50">
                <h2 className="text-2xl font-serif font-bold mb-6">Key Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Area</span>
                      <span className="font-bold text-lg text-primary">{district.geography.area}</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Population</span>
                      <span className="font-bold text-lg text-primary">{district.demographics.population}</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Altitude</span>
                      <span className="font-bold text-lg text-primary">{district.geography.altitude}</span>
                   </div>
                   <div className="bg-white p-4 rounded-xl shadow-sm">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider block mb-1">Literacy</span>
                      <span className="font-bold text-lg text-primary">{district.demographics.literacy}</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Right Column: Detailed Info */}
          <div className="lg:col-span-7 space-y-12">
             
             {/* Geography */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-blue-100 rounded-full text-blue-700">
                      <Mountain className="w-6 h-6" />
                   </div>
                   <h2 className="text-3xl font-serif font-bold">Geography</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                   Headquartered at <strong className="text-foreground">{district.geography.hq}</strong>, 
                   this district is nurtured by the rivers {district.geography.rivers.join(", ")}.
                </p>
             </div>

             {/* History */}
             <div>
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-3 bg-amber-100 rounded-full text-amber-700">
                      <Landmark className="w-6 h-6" />
                   </div>
                   <h2 className="text-3xl font-serif font-bold">History & Heritage</h2>
                </div>
                <div className="border-l-4 border-secondary pl-6 space-y-4">
                   <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">Established</span>
                      <p className="text-lg font-medium">{district.history.established}</p>
                   </div>
                   <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">Dynasties</span>
                      <div className="flex gap-2 flex-wrap">
                         {district.history.dynasties.map(d => (
                            <span key={d} className="px-3 py-1 bg-amber-50 text-amber-800 rounded-full text-sm font-medium border border-amber-100">
                               {d}
                            </span>
                         ))}
                      </div>
                   </div>
                   <div>
                      <span className="text-sm text-muted-foreground uppercase tracking-wider block mb-1">Key Events</span>
                      <p className="text-lg text-muted-foreground">{district.history.key_events}</p>
                   </div>
                </div>
             </div>

             {/* Subdivisions */}
             <div>
                <h3 className="text-xl font-bold font-serif mb-4">Administrative Divisions (Tehsils)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                   {district.subdivisions.map((tehsil) => (
                      <div key={tehsil} className="px-3 py-2 bg-sky-50 text-sky-800 rounded-lg text-sm font-medium border border-sky-100">
                         {tehsil}
                      </div>
                   ))}
                </div>
             </div>

             {/* Economy & Demographics */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <div className="flex items-center gap-3 mb-4">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <h3 className="text-xl font-bold font-serif">Economy</h3>
                   </div>
                   <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      {district.economy.map(e => <li key={e}>{e}</li>)}
                   </ul>
                </div>
                <div>
                   <div className="flex items-center gap-3 mb-4">
                      <BookOpen className="w-5 h-5 text-purple-600" />
                      <h3 className="text-xl font-bold font-serif">Languages</h3>
                   </div>
                   <div className="flex gap-2 flex-wrap">
                      {district.demographics.languages.map(l => (
                         <span key={l} className="px-3 py-1 bg-purple-50 text-purple-800 rounded-full text-sm font-medium border border-purple-100">
                            {l}
                         </span>
                      ))}
                   </div>
                </div>
             </div>

          </div>

        </div>
      </Section>
    </div>
  );
}
