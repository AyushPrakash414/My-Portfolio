import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { Download, Eye, File, Github, Linkedin } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { config } from "@/data/config";
import TypingAnimation from "../ui/typing-animation";

import SectionWrapper from "../ui/section-wrapper";

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <SectionWrapper id="hero" className={cn("relative w-full h-screen")}>
      {/* Dark gradient overlay to prevent Spline 3D glow from washing out the name */}
      <div
        className="absolute inset-x-0 top-0 h-[35vh] z-[5] pointer-events-none opacity-0 dark:opacity-100 transition-opacity"
        style={{
          background: "linear-gradient(to bottom, hsl(222.2 84% 4.9% / 0.95) 0%, hsl(222.2 84% 4.9% / 0.5) 40%, transparent 100%)",
        }}
      />
      <div className="grid md:grid-cols-2">
        <div
          className="h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[10] col-span-1 flex flex-col justify-start lg:justify-center items-center md:items-start pt-24 sm:pt-40 sm:pb-16 md:px-20 md:pt-36 lg:px-24 xl:px-28"
        >
          {!isLoading && (
            <div className="flex flex-col">
              <div>
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "-ml-[6px] leading-none text-left",
                          "font-thin text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl",
                          "cursor-default font-display text-foreground",
                          "dark:[text-shadow:_0_0_30px_rgba(255,255,255,0.15)]"
                        )}
                      >
                        Ayush
                        <br className="md:block hidden" />
                        Prakash
                        <br />
                        Tiwari
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      Let&apos;s build something amazing together!
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>
                <BlurIn delay={1.2}>
                  <div
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    <TypingAnimation
                      words={["Full Stack Developer", "AI/ML Engineer"]}
                      typingSpeed={80}
                      deletingSpeed={50}
                      pauseDuration={2500}
                    />
                  </div>
                </BlurIn>
              </div>
              <div className="mt-8 flex flex-col gap-3 w-fit">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/assets/resume/Ayush_Prakash_Tiwari_Resume.pdf"
                    target="_blank"
                    className="flex-1"
                  >
                    <BoxReveal delay={2} width="100%">
                      <Button className="flex items-center gap-2 w-full">
                        <Eye size={18} />
                        <p>View Resume</p>
                      </Button>
                    </BoxReveal>
                  </Link>
                  <a
                    href="/resume/resume.pdf"
                    download="Ayush_Prakash_Tiwari_Resume.pdf"
                    className="flex-1"
                  >
                    <BoxReveal delay={2.2} width="100%">
                      <Button variant="outline" className="flex items-center gap-2 w-full">
                        <Download size={18} />
                        <p>Download Resume</p>
                      </Button>
                    </BoxReveal>
                  </a>
                </div>
                <div className="md:self-start flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Let&apos;s work together! 🚀</p>
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center h-full gap-2">
                    <Link
                      href={config.social.twitter}
                      target="_blank"
                    >
                      <Button variant={"outline"}>
                        <SiX size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.github}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiGithub size={24} />
                      </Button>
                    </Link>
                    <Link
                      href={config.social.linkedin}
                      target="_blank"
                      className="cursor-can-hover"
                    >
                      <Button variant={"outline"}>
                        <SiLinkedin size={24} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x-[-50%]">
        <ScrollDownIcon />
      </div>
    </SectionWrapper>
  );
};

export default HeroSection;
