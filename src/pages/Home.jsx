import React from "react";
import Layout from "./Layout";

import { FiDownload } from "react-icons/fi";
import { FaMotorcycle, FaLocationDot } from "react-icons/fa6";
import { GiTabletopPlayers } from "react-icons/gi";

import { Button, buttonVariants } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

import Social from "../components/Social";
import Maps from "../components/Maps";
import Contact from "./Contact";

import Lumpia from "../assets/img/lumpia.png";
import Lumpia2 from "../assets/img/lumpia2.jpg";
import Dimsum from "../assets/img/dimsum.jpg";
import Dine from "../assets/img/dine-in.png";

import CVs from "../assets/pdf/cv.pdf";

const Home = () => {
  return (
    <Layout>
      {/* Bagian Home */}
      <section id="section1" className="h-full pt-32 xl:pt-40">
        <div className="container bg-pilihan rounded-2xl">
          <div
            className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian teks*/}
            <div className="text-left order-2 xl:order-none">
              <span className="text-xl text-black">Web Cemilanku</span>
              <h1 className="h1 text-black">
                Hello I&apos;m <br />{" "}
                <span className="text-accent">Cemilanku</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-black/50">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Recusandae ipsum dicta modi officia animi pariatur illum tempora
                fugit excepturi sapiente!
              </p>
              {/*Tombol sosial media*/}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href={CVs} download="My_CV.pdf">
                  <Button
                    variant="outline"
                    size="lg"
                    className="uppercase flex items-center gap-2"
                  >
                    <span>Download MENU</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles=" w-9 h-9 border
                border-accent rounded-full flex justify-center items-center text-accent
                text-base hover:bg-accent hover:text-primary 
                hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>
            {/*bagian photo*/}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <img
                src={Lumpia}
                priority
                quality={100}
                fill
                alt=""
                className="object-contain"
              />
            </div>
          </div>

          <div
            className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian produk terbaik*/}
            <div className=" xl:text-left order-2 xl:order-none justify-center items-center">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 ">
                <div className="grid grid-cols-2 gap-2 lg:pr-5">
                  <div>
                    <Card>
                      <CardContent>
                        <img className="pt-5" src={Lumpia2} alt="" />
                      </CardContent>
                      <CardFooter>
                        <div className="relative flex flex-col bg-accent w-full rounded-md">
                          <h3 className="md:h3 text-[14px] font-bold  pl-1">
                            Lumpia
                          </h3>
                          <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                            Lumpia enak buatan mama
                          </p>
                          <p className="text-[8px] md:text-[12px] pb-1 pl-1 font-bold">
                            Rp. 20.000/Box
                          </p>
                          <div className="flex pb-2 pr-2">
                            <div className="p-2">
                              <FaLocationDot />
                            </div>
                            <div>
                              <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                                Pesan Sekarang
                              </h2>
                            </div>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card>
                      <CardContent>
                        <img className="pt-5" src={Lumpia2} alt="" />
                      </CardContent>
                      <CardFooter>
                        <div className="relative flex flex-col bg-accent w-full rounded-md">
                          <h3 className="md:h3 text-[14px] font-bold  pl-1">
                            Lumpia
                          </h3>
                          <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                            Lumpia enak buatan mama
                          </p>
                          <p className="text-[8px] md:text-[12px] pb-1 pl-1 font-bold">
                            Rp. 20.000/Box
                          </p>
                          <div className="flex pb-2 pr-2">
                            <div className="p-2">
                              <FaLocationDot />
                            </div>
                            <div>
                              <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                                Pesan Sekarang
                              </h2>
                            </div>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                </div>

                {/* Bagian Banner */}
                <div className="flex items-center justify-center">
                  <div className="grid grid-cols-1 text-black">
                    <h1 className="h3 xl:h1 border-l-8 border-accent text-black pb-4">
                      {" "}
                      Temukan Lokasi Kita
                      <p className="text-sm">
                        Pejantran RT 2, RW.4, Wonoplintahan, Kabupaten Sidoarjo,
                        Jawa Timur
                      </p>
                    </h1>
                    <div className="bg-primary p-4 rounded-md">
                      <Maps />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Penutup Bagian Home */}

      {/* Bagian Produk */}
      <section id="section2" className="h-full">
        <div className="bg-black container">
          <div className="grid grid-cols-2">
            <h1 className="h2 border-l-8 border-accent">
              {" "}
              Lorem ipsum dolor sit
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              id a atque quibusdam quaerat debitis. Doloremque labore voluptatem
              maxime consectetur?
            </p>
          </div>
        </div>

        <div className="container bg-pilihan ">
          <div
            className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
          >
            {/*bagian teks*/}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1 text-black">Our Product</h1>
            </div>
            {/*bagian Produk*/}
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2">
            <div>
              <Card>
                <CardContent>
                  <img className="pt-5" src={Lumpia2} alt="" />
                </CardContent>
                <CardFooter>
                  <div className="relative flex flex-col bg-accent w-full rounded-md">
                    <h3 className="md:h3 text-[14px] font-bold  pl-1">
                      Lumpia
                    </h3>
                    <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                      Lumpia enak buatan mama
                    </p>
                    <div className="flex pb-2 pr-2">
                      <div className="p-2">
                        <FaLocationDot />
                      </div>
                      <div>
                        <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                          Pesan Sekarang
                        </h2>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <img className="pt-5" src={Lumpia2} alt="" />
                </CardContent>
                <CardFooter>
                  <div className="relative flex flex-col bg-accent w-full rounded-md">
                    <h3 className="md:h3 text-[14px] font-bold  pl-1">
                      Lumpia
                    </h3>
                    <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                      Lumpia enak buatan mama
                    </p>
                    <div className="flex pb-2 pr-2">
                      <div className="p-2">
                        <FaLocationDot />
                      </div>
                      <div>
                        <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                          Pesan Sekarang
                        </h2>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <img className="pt-5" src={Lumpia2} alt="" />
                </CardContent>
                <CardFooter>
                  <div className="relative flex flex-col bg-accent w-full rounded-md">
                    <h3 className="md:h3 text-[14px] font-bold  pl-1">
                      Lumpia
                    </h3>
                    <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                      Lumpia enak buatan mama
                    </p>
                    <div className="flex pb-2 pr-2">
                      <div className="p-2">
                        <FaLocationDot />
                      </div>
                      <div>
                        <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                          Pesan Sekarang
                        </h2>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardContent>
                  <img className="pt-5" src={Lumpia2} alt="" />
                </CardContent>
                <CardFooter>
                  <div className="relative flex flex-col bg-accent w-full rounded-md">
                    <h3 className="md:h3 text-[14px] font-bold  pl-1">
                      Lumpia
                    </h3>
                    <p className="text-[8px] md:text-[12px] pb-1 pl-1">
                      Lumpia enak buatan mama
                    </p>
                    <div className="flex pb-2 pr-2">
                      <div className="p-2">
                        <FaLocationDot />
                      </div>
                      <div>
                        <h2 className="text-[8px] pl-2 pr-2 cursor-pointer bg-black rounded md:text-[14px] text-white ">
                          Pesan Sekarang
                        </h2>
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Penutup Bagian Produk */}

      {/* Bagian Pelayanan */}
      <section id="section3" className="h-full">
        <div className=" container bg-pilihan">
          <div className="container bg-pilihan ">
            <div
              className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24"
            >
              {/*bagian teks*/}
              <div className="text-center xl:text-left order-2 xl:order-none">
                <h1 className="h1 text-black pb-5 md:pb-0">Layanan Kami</h1>
              </div>
              {/*bagian Pelayanan*/}
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-2">
              <div className="grid grid-cols-1 gap-2 ">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 bg-primary rounded-md">
                    <img src={Dine} alt="" />
                  </div>

                  <div className=" h-12">
                    <h1 className="h3 text-black mt-3">Makan Ditempat</h1>
                    <p className="text-black text-[9px] md:text-[16px]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A maxime dolorem aperiam eos doloremque iusto porro
                      explicabo corrupti ducimus nulla.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className=" h-12">
                    <h1 className="h3 text-black mt-3">Mulai 7:00-12:00</h1>
                    <p className="text-black text-[9px] md:text-[16px]">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A maxime dolorem aperiam eos doloremque iusto porro
                      explicabo corrupti ducimus nulla.
                    </p>
                  </div>
                  <div className="p-2 bg-primary rounded-md">
                    <img src={Dimsum} alt="" />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="p-10 bg-primary rounded-md flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <h1 className="w-[200px] flex items-center justify-center ">
                      <FaMotorcycle className="text-[200px] text-accent" />
                    </h1>
                    <h1 className="h3 text-black mt-3 text-center">
                      Mulai 7:00-12:00 <br />
                      Pengiriman rumah gratis di depan pintu Anda
                    </h1>
                    <p className="text-black text-[9px] md:text-[16px] text-center">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      A maxime dolorem aperiam eos doloremque iusto porro
                      explicabo corrupti ducimus nulla.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Penutup Bagian Pelayanan */}

      {/* Bagian Kontak */}
      <section id="section4" className="h-full">
        <div className="bg-black container">
          <div className="grid grid-cols-2">
            <h1 className="h2 border-l-8 border-accent">
              {" "}
              Lorem ipsum dolor sit
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              id a atque quibusdam quaerat debitis. Doloremque labore voluptatem
              maxime consectetur?
            </p>
          </div>
        </div>
        <Contact />
      </section>
      {/* Penutup Bagian Kontak */}
    </Layout>
  );
};

export default Home;
