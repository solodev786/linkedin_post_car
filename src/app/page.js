"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import one from "../assets/1.png";
import two from "../assets/2.png";
import three from "../assets/6.png";
import four from "../assets/7.png";
import five from "../assets/5.png";
import six from "../assets/6.png";
import seven from "../assets/7.png";
import { Antonio } from "next/font/google";
import { useCallback, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { IoSpeedometer } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { RiSteeringFill } from "react-icons/ri";
import CountUp from "react-countup";

const antonio = Antonio({ subsets: ["latin"] });
export default function Home() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [clickCount, setClickCount] = useState(1);
  const nextCount = () => {
    if (clickCount >= 5) {
      return;
    }
    setClickCount(clickCount + 1);
    scrollNext();
  };
  const prevCount = () => {
    if (clickCount <= 1) {
      return;
    }
    setClickCount(clickCount - 1);
    scrollPrev();
  };

  return (
    <>
      <div
        className={` w-full min-h-screen h-auto ${
          clickCount === 1
            ? "bg-gradient-to-b from-yellow-400 via-cyan-600 to-black text-whtie"
            : clickCount === 2
            ? "bg-gradient-to-b from-orange-500 via-orange-900 to-black text-whtie"
            : clickCount === 3
            ? "bg-gradient-to-b from-black via-gray-500 to-black text-whtie"
            : clickCount === 4
            ? "bg-gradient-to-b from-pink-600 via-violet-600 to-black text-whtie"
            : "bg-gradient-to-b from-yellow-400 via-yellow-900 to-black text-whtie"
        } py-10 flex items-center justify-between px-10`}
      >
        <div>
          <button onClick={prevCount} class="embla__prev ">
            <FaCircleChevronLeft className=" text-5xl text-white" />
          </button>
        </div>
        <div className=" w-full h-auto flex items-center justify-center">
          <div className=" flex flex-col gap-10 items-center">
            <div className="embla text-white">
              <div class="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  <div className="embla__slide w-72 flex flex-col rounded-3xl items-center">
                    <motion.div
                      initial={{ scale: 2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className=" flex flex-col w-full items-start gap-2 pl-5">
                        <h1
                          className={`${antonio.className} text-9xl font-black text-white tracking-widest uppercase`}
                        >
                          Aston Martin <br />
                        </h1>
                        <h1
                          className={`${antonio.className} text-5xl font-bold tracking-widest`}
                        >
                          vintage
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, scale: 0.8, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={one}
                        width={600}
                        className=" w-full h-full object-cover"
                      />
                    </motion.div>
                    {clickCount === 1 && (
                      <div className=" w-full flex items-center ">
                        <div className="w-full flex items-center justify-center gap-52 mt-[-100px] text-white">
                          <div className=" flex items-center gap-2">
                            <ImPower className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={75}
                              duration={5}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <IoSpeedometer className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={300}
                              duration={4}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <RiSteeringFill className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={50}
                              duration={5}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="embla__slide w-72 flex flex-col  rounded-3xl items-center">
                    <motion.div
                      initial={{ y: 10, scale: 2, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className=" flex flex-col w-full items-start gap-2 pl-5">
                        <h1
                          className={`${antonio.className} text-9xl font-black text-white tracking-widest uppercase`}
                        >
                          Ferrari
                        </h1>
                        <h1
                          className={`${antonio.className} text-5xl font-bold tracking-widest`}
                        >
                          488 GTB
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, scale: 0.8, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={two}
                        width={600}
                        className=" w-full h-full object-cover drop-shadow-xl shadow-white"
                      />
                    </motion.div>
                    {clickCount === 2 && (
                      <div className=" w-full flex items-center ">
                        <div className="w-full flex items-center justify-center gap-52 mt-[-100px] text-white">
                          <div className=" flex items-center gap-2">
                            <ImPower className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={94}
                              duration={5}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <IoSpeedometer className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={400}
                              duration={4}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <RiSteeringFill className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={80}
                              duration={5}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="embla__slide w-72 flex flex-col  rounded-3xl items-center">
                    <motion.div
                      initial={{ y: 10, scale: 1.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className=" flex flex-col w-full items-start gap-2 pl-5">
                        <h1
                          className={`${antonio.className} text-9xl font-black text-white tracking-widest uppercase`}
                        >
                          Porsche
                        </h1>
                        <h1
                          className={`${antonio.className} text-5xl font-bold tracking-widest`}
                        >
                          911
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, scale: 0.8, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={three}
                        width={500}
                        className=" w-full h-full object-cover"
                      />
                    </motion.div>
                    {clickCount === 3 && (
                      <div className=" w-full flex items-center ">
                        <div className="w-full flex items-center justify-center gap-52 mt-[-100px] text-white">
                          <div className=" flex items-center gap-2">
                            <ImPower className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={75}
                              duration={5}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <IoSpeedometer className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={300}
                              duration={4}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <RiSteeringFill className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={50}
                              duration={5}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="embla__slide w-72 flex flex-col gap-10  rounded-3xl items-center">
                    <motion.div
                      initial={{ y: 10, scale: 1.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className=" flex flex-col w-full items-start gap-2 pl-5">
                        <h1
                          className={`${antonio.className} text-9xl font-black text-white tracking-widest uppercase`}
                        >
                          McLaren
                        </h1>
                        <h1
                          className={`${antonio.className} text-5xl font-bold tracking-widest`}
                        >
                          720S
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, scale: 0.8, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={four}
                        width={600}
                        className=" w-full h-full object-cover"
                      />
                    </motion.div>
                    {clickCount === 4 && (
                      <div className=" w-full flex items-center mt-20">
                        <div className="w-full flex items-center justify-center gap-52 mt-[-100px] text-white">
                          <div className=" flex items-center gap-2">
                            <ImPower className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={75}
                              duration={5}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <IoSpeedometer className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={300}
                              duration={4}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <RiSteeringFill className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={50}
                              duration={5}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="embla__slide w-10 flex flex-col gap-10 rounded-3xl items-center">
                    <motion.div
                      initial={{ y: 10, scale: 1.5, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className=" flex flex-col w-full items-start gap-2 pl-5">
                        <h1
                          className={`${antonio.className} text-9xl font-black text-white tracking-widest uppercase`}
                        >
                          Bugatti
                        </h1>
                        <h1
                          className={`${antonio.className} text-5xl font-bold tracking-widest`}
                        >
                          Chiron
                        </h1>
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ y: 100, scale: 0.8, opacity: 0 }}
                      whileInView={{ y: 0, scale: 1, opacity: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 1 }}
                    >
                      <Image
                        src={five}
                        width={600}
                        className=" w-full h-full object-cover"
                      />
                    </motion.div>
                    {clickCount === 5 && (
                      <div className=" w-full flex items-center mt-20">
                        <div className="w-full flex items-center justify-center gap-52 mt-[-100px] text-white">
                          <div className=" flex items-center gap-2">
                            <ImPower className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={75}
                              duration={5}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <IoSpeedometer className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={300}
                              duration={4}
                            />
                          </div>
                          <div className=" flex items-center gap-2">
                            <RiSteeringFill className=" text-5xl" />
                            <CountUp
                              className={`${antonio.className} text-5xl font-bold`}
                              end={50}
                              duration={5}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button onClick={nextCount} class="embla__next">
          <FaCircleChevronRight className=" text-5xl text-white" />
        </button>
      </div>
    </>
  );
}
