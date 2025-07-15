"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TeamMember = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTeam = ({
  teamMembers,
  autoplay = true,
  className,
}: {
  teamMembers: TeamMember[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % teamMembers.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className={cn("max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-8 md:py-12", className)}>
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Lado das Imagens */}
        <div className="order-2 lg:order-1 flex flex-col items-center">
          <div className="relative h-96 lg:h-[450px] w-full max-w-md">
            <AnimatePresence>
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : teamMembers.length + 2 - index,
                    y: isActive(index) ? [0, -20, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={member.src}
                    alt={member.name}
                    className="h-full w-full rounded-3xl object-cover object-center shadow-soft border border-gray-200 dark:border-gray-700 relative"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Controles embaixo das imagens */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-oasis-blue-light flex items-center justify-center group transition-all duration-200 shadow-soft"
              aria-label="Membro anterior"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-oasis-blue group-hover:scale-110 transition-all duration-200" />
            </button>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-gray-100 hover:bg-oasis-blue-light flex items-center justify-center group transition-all duration-200 shadow-soft"
              aria-label="Próximo membro"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-oasis-blue group-hover:scale-110 transition-all duration-200" />
            </button>
          </div>
        </div>

        {/* Lado do Conteúdo */}
        <div className="order-1 lg:order-2 flex flex-col justify-center">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-heading mb-2">
              {teamMembers[active].name}
            </h3>
            <p className="text-base md:text-lg text-oasis-blue font-semibold mb-6 font-body">
              {teamMembers[active].designation}
            </p>
            <motion.blockquote className="text-base md:text-lg text-gray-600 leading-relaxed font-body">
              {teamMembers[active].quote.split('\n').map((paragraph, paragraphIndex) => (
                <motion.div
                  key={paragraphIndex}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: 0.1 * paragraphIndex,
                  }}
                  className={`${paragraphIndex === 0 ? 'mb-6' : 'mb-3'} ${paragraphIndex > 0 ? 'text-sm font-medium text-gray-700' : ''}`}
                >
                  {paragraph}
                </motion.div>
              ))}
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </div>
  );
};