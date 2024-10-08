"use client";

import Image from "next/image";
import Loading from "./loading";
import Link from "next/link";
import Noise from "@/components/noise";
import { motion } from "framer-motion";
import { categories } from "@/theme/categories";
import Category from "@/components/category";
import Laptop from "@/components/Laptop";
import ProjectsSection from "@/sections/projects";
import LocomotiveProvider from "@/providers/locomotive";
import Header from "@/components/header";
import GlitchBtn from "@/components/button";
import { useProjectStore } from "@/store/project";
import { projects } from "@/theme/projects";
import Footer from "@/components/footer";
import GraphSection from "@/sections/graph";
import CommitsSections from "@/sections/commits";
import { TypeAnimation } from "react-type-animation";
import ProjectsBackground from "@/components/projects";

export default function Home() {
  return (
    <LocomotiveProvider>
      <Loading isComponent />

      <ProjectsBackground />

      <main>
        <Noise
          data-scroll-section
          image="static-hero"
          className="min-h-screen bg-gradient-to-b from-neutral-700 to-neutral-900 border-b border-neutral-800"
        >
          <Header />

          <section className="mt-[5%] mb-[2%]">
            <div className="content flex big:items-center small:w-full small:flex-col gap-main">
              <div className="flex-1">
                <h2 className="font-source-code-pro text-8xl small:text-5xl font-extrabold uppercase mb-5 text-neutral-900">
                  <span className="bg-gradient-to-b from-white to-neutral-500 text-clip">
                    WE MAKE
                  </span>
                  <Image
                    src="/images/icons/crown.svg"
                    alt="Crown"
                    width={90}
                    height={90}
                    priority
                    className="unselectable undraggable inline-block ml-4 small:ml-2 -mt-4 transform small:scale-75"
                  />
                  <br />
                  <span className="text-glass text-clip-stroke">Softwares</span>
                  <Image
                    src="/images/icons/exclaimation.svg"
                    alt="Exclaimation"
                    width={80}
                    height={80}
                    priority
                    className="unselectable undraggable inline-block ml-0 -mt-4 transform small:scale-75"
                  />
                </h2>
                <p className="text-xs small:text-[10px] font-medium text-neutral-400 leading-[250%] big:max-w-main-5 relative z-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut
                </p>
                <div className="flex gap-main mt-[10%] relative z-10">
                  <GlitchBtn containerClass="flex-3 big:max-w-main-4">
                    <Link
                      href="#"
                      role="button"
                      className="overflow-hidden w-full bg-gradient-to-b from-primary to-secondary text-white font-bold uppercase text-sm small:text-xs text-center px-5 py-3 relative group rounded-full hover:border-[1.5px] border-white transition-all"
                    >
                      Let&apos;s Code
                    </Link>
                  </GlitchBtn>
                  <GlitchBtn containerClass="flex-2 big:max-w-main-2">
                    <Link
                      href="#"
                      role="button"
                      className="flex-2 w-full text-zinc-400 font-bold uppercase text-sm small:text-xs text-center px-5 py-3 relative group hover:border-2 border-transparent transition-all"
                    >
                      <div className="absolute-full box-glass rounded-full"></div>
                      <div className="absolute-full rounded-full group-hover:bg-white/10 transition-all"></div>
                      Contact us
                    </Link>
                  </GlitchBtn>
                </div>
              </div>
              <Laptop />
            </div>
          </section>

          <div className="big:absolute bottom-[5%] small:mb-[5%] w-full overflow-hidden">
            <div
              data-scroll
              data-scroll-speed="-4"
              data-scroll-position="top"
              className="content flex flex-wrap justify-between"
            >
              {categories.map((category, index) => (
                <Category key={index} {...category} />
              ))}
            </div>
          </div>
        </Noise>

        <Noise
          data-scroll-section
          image="static-hero"
          className="min-h-screen small:min-h-[75vh] flex bg-neutral-950 py-[4%]"
        >
          <div className="absolute top-0 left-0 w-full h-full flex text-[300px] small:text-[200px] -tracking-[15px] font-source-code-pro text-stroke font-extrabold uppercase flex-col justify-between overflow-hidden opacity-50">
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="4"
              className="flex gap-20 relative -left-1/2"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <h2
                  key={index}
                  className="leading-[100%] whitespace-nowrap text-white/5"
                >
                  PROJECTS
                </h2>
              ))}
            </div>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="-4"
              className="flex gap-20 relative -left-1/2"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <h2
                  key={index}
                  className="leading-[100%] whitespace-nowrap text-white/5"
                >
                  PROJECTS
                </h2>
              ))}
            </div>
            <div
              data-scroll
              data-scroll-direction="horizontal"
              data-scroll-speed="4"
              className="flex gap-20 relative -left-1/2"
            >
              {Array.from({ length: 3 }).map((_, index) => (
                <h2
                  key={index}
                  className="leading-[100%] whitespace-nowrap text-white/5"
                >
                  PROJECTS
                </h2>
              ))}
            </div>
          </div>
          <div className="content relative flex-center flex-1">
            <>
              <div
                data-scroll
                data-scroll-speed="1"
                className="absolute top-10 left-20 z-10 bg-black/40 backdrop-blur-md rounded-xl transform small:scale-75"
              >
                <Image
                  src="/images/terminals/terminal-2.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                {/* prettier-ignore */}
                <p className="absolute top-[20%] left-1 z-10 text-[10px] font-source-code-pro leading-none font-extrabold text-primary whitespace-pre">
    
    {"\n"} _   _      _ _         _    _            _     _ _ 
    {"\n"}| | | |    | | |       | |  | |          | |   | | |
    {"\n"}| |_| | ___| | | ___   | |  | | ___  _ __| | __| | |
    {"\n"}|  _  |/ _ \ | |/ _ \  | |/\| |/ _ \| &apos;__| |/ _` | |
    {"\n"}| | | |  __/ | | &#40;_&#41; | \  /\  / &#40;_&#41; | |  | | &#40;_| |_|
    {"\n"}\_| |_/\___|_|_|\___/   \/  \/ \___/|_|  |_|\__,_&#40;_&#41;
    </p>
              </div>
            </>

            <>
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute z-20 top-[15%] left-[25%] bg-black/40 backdrop-blur-md rounded-xl transform small:scale-75"
              >
                <Image
                  src="/images/terminals/terminal-1.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <p className="absolute top-[30%] left-1 z-10 leading-[150%] text-sm font-source-code-pro w-full pr-5 text-primary">
                  <TypeAnimation
                    deletionSpeed={{
                      type: "keyStrokeDelayInMs",
                      value: 10,
                    }}
                    speed={{
                      type: "keyStrokeDelayInMs",
                      value: 50,
                    }}
                    repeat={Infinity}
                    sequence={[
                      "A vibrant testing ground to experiment with ideas, encouraging creativity and risk-taking.",
                      5000,
                      "",
                      1000,
                    ]}
                  />
                </p>
              </div>
            </>

            <>
              <div
                data-scroll
                data-scroll-speed="1"
                className="absolute bottom-[0%] left-10 z-30 bg-black/40 backdrop-blur-md rounded-xl transform small:scale-75"
              >
                <Image
                  src="/images/terminals/terminal-3.svg"
                  alt="Terminal"
                  width={500}
                  height={253}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <div className="absolute top-[20%] left-1 z-10 text-primary text-[10px]">
                  {/* prettier-ignore */}
                  <p className="leading-none font-extrabold whitespace-pre font-source-code-pro">
    
    {"\n"} /$$$$$$$  /$$$$$$$$ /$$      /$$             /$$     /$$      
    {"\n"}| $$__  $$|__  $$__/| $$$    /$$$            | $$    | $$      
    {"\n"}| $$  \ $$   | $$   | $$$$  /$$$$  /$$$$$$  /$$$$$$  | $$$$$$$ 
    {"\n"}| $$$$$$$/   | $$   | $$ $$/$$ $$ |____  $$|_  $$_/  | $$__  $$
    {"\n"}| $$__  $$   | $$   | $$  $$$| $$  /$$$$$$$  | $$    | $$  \ $$
    {"\n"}| $$  \ $$   | $$   | $$\  $ | $$ /$$__  $$  | $$ /$$| $$  | $$
    {"\n"}| $$  | $$   | $$   | $$ \/  | $$|  $$$$$$$  |  $$$$/| $$  | $$
    {"\n"}|__/  |__/   |__/   |__/     |__/ \_______/   \___/  |__/  |__/
    </p>
                  <p className="leading-[150%] text-sm font-source-code-pro w-full mt-4 pr-4">
                    <TypeAnimation
                      deletionSpeed={{
                        type: "keyStrokeDelayInMs",
                        value: 10,
                      }}
                      speed={{
                        type: "keyStrokeDelayInMs",
                        value: 50,
                      }}
                      repeat={Infinity}
                      sequence={[
                        2000,
                        "Do math, machine learning, math optimization in real-time. feed Products join about",
                        5000,
                        "",
                        1000,
                      ]}
                    />
                  </p>
                </div>
              </div>
            </>

            <>
              <div
                data-scroll
                data-scroll-speed="2"
                className="absolute z-20 bottom-[15%] right-[0%] bg-black/40 backdrop-blur-md rounded-xl transform small:scale-75"
              >
                <Image
                  src="/images/terminals/terminal-1.svg"
                  alt="Terminal"
                  width={350}
                  height={152}
                  priority
                  className="opacity-40 unselectable undraggable"
                />
                <p className="absolute top-[30%] left-1 z-10 leading-[150%] text-sm font-source-code-pro w-full pr-5 text-primary">
                  <TypeAnimation
                    deletionSpeed={{
                      type: "keyStrokeDelayInMs",
                      value: 10,
                    }}
                    speed={{
                      type: "keyStrokeDelayInMs",
                      value: 50,
                    }}
                    repeat={Infinity}
                    sequence={[
                      1000,
                      "A place to share inspiration, conduct research, build prototypes, and launch successful products.",
                      5000,
                      "",
                      1000,
                    ]}
                  />
                </p>
              </div>
            </>
          </div>
        </Noise>

        <section
          data-scroll-section
          className="flex relative z-50 overflow-hidden"
        >
          <ProjectsSection />
        </section>

        <section data-scroll-section className="bg-neutral-950">
          <GraphSection />
        </section>

        <section data-scroll-section>
          <Footer />
        </section>
      </main>
    </LocomotiveProvider>
  );
}
