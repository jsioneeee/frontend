"use client";

import * as React from "react";
import Header from "@/components/ui/header";
import FlipCard from "@/components/ui/flipcard";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";

export default function Certificates() {
  const cards = [
    { text: "Cisco", back: "/cert1.png" },
    { text: "Microsoft", back: "/cert2.png" },
    { text: "FreeCodeCamp", back: "/cert3.png" },
    { text: "Cisco", back: "/cert4.png" },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-zinc-900 via-black to-zinc-900 text-white font-sans">
      <Header />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-5xl font-bold mt-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        My Certificates
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-center text-zinc-400 max-w-2xl mx-auto mt-3 mb-10"
      >
        A showcase of my achievements, skills, and training accomplishments.
      </motion.p>

      {/* Carousel Wrapper */}
      <div className="w-full flex justify-center px-4 pb-10">
        <div className="w-[60%] h-[80vh] bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl p-6 shadow-xl">
          <Carousel className="w-full h-full">
            <CarouselContent className="h-full">
              {cards.map((card, index) => (
                <CarouselItem key={index} className="h-full">
                  <div className="p-4 h-full">
                    <Card className="h-full bg-transparent border-none shadow-none flex items-center justify-center">
                      <CardContent className="h-full p-0">
                        <FlipCard frontText={card.text} backImage={card.back} />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="text-white hover:text-purple-300" />
            <CarouselNext className="text-white hover:text-purple-300" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
