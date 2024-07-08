import React, { useState } from "react";
import Layout from "./Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+62) 813-34744357",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "cemilanku@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Alamat",
    description:
      "Pejantran RT 2, RW.4, Wonoplintahan, Kabupaten Sidoarjo, Jawa Timur",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { nama, value } = e.target;
    setFormData({ ...formData, [nama]: value });
  };

  const handleSelectChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nama, alamat, email, phone, service, message } = formData;
    const whatsappMessage = `Nama: ${nama} Alama:${alamat}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nPesan: ${message}`;
    const whatsappUrl = `https://wa.me/6285157726519?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Layout>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={handleSubmit}
              >
                <h3 className="text-4xl text-accent font-bold">
                  Pesan Sekarang Juga
                </h3>
                <p className="text-white/60">
                  dapatkan diskon tambahan dalam menu kami pada hari tertentu
                  agar nikmat makin terasa
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black">
                  <Input
                    type="text"
                    name="nama"
                    placeholder="Nama"
                    onChange={handleChange}
                  />
                  <Input
                    type="text"
                    name="alamat"
                    placeholder="Alamat Lengkap"
                    onChange={handleChange}
                  />
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="NO.Hp"
                    onChange={handleChange}
                  />
                </div>
                <Select onValueChange={handleSelectChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Pilih Menu</SelectLabel>
                      <SelectItem value="dimsum">Dimsum</SelectItem>
                      <SelectItem value="lumpia">Lumpia</SelectItem>
                      <SelectItem value="menu2">Menu 2</SelectItem>
                      <SelectItem value="menu3">Menu 3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <Textarea
                  className="h-[200px] text-black"
                  name="message"
                  placeholder="Tambahan pesanan"
                  onChange={handleChange}
                />
                <Button type="submit" className="max-w-40 bg-primary">
                  Send message
                </Button>
              </form>
            </div>
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-Black rounded-md flex items-center justify-center">
                        <div>{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-black">{item.title}</p>
                        <h3 className="text-xl text-black">
                          {item.description}
                        </h3>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default Contact;
