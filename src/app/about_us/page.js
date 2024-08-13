// pages/about.js
import Head from "next/head";
import Link from "next/link";
import { MyButton } from "@/components/MyButton";

export const metadata = {
  title: "About Us - Eddy Murphy Fashion",
};
export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-8 ">
        <h1 className="text-4xl text-center md:text-left font-bold text-gray-900 mb-8">
          About Eddy Murphy Fashion
        </h1>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Passion
          </h2>
          <p className="text-gray-700 mb-4">
            At Eddy Murphy Fashion, we're passionate about creating fashion that
            makes you feel confident, expressive, and authentic. Our mission is
            to provide high-quality, unique, and stylish clothing and
            accessories that cater to the modern individual.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Story
          </h2>
          <p className="text-gray-700">
            Founded by Eddy Murphy, a fashion enthusiast with a keen eye for
            detail, Eddy Murphy Fashion aims to bridge the gap between high-end
            fashion and affordability. Our team of skilled designers and
            stylists work tirelessly to bring you the latest trends, timeless
            classics, and bespoke pieces that reflect your personality.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700">
            We envision a world where fashion is accessible, sustainable, and
            empowering. We're committed to using eco-friendly materials,
            supporting local artisans, and promoting body positivity.
          </p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Promise
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="my-3">
              Exceptional quality and attention to detail
            </li>
            <li className="my-3">
              Unique and stylish designs that make you stand out
            </li>
            <li className="my-3">
              Personalized customer service and styling advice
            </li>
            <li className="my-3">
              Sustainable and responsible fashion practices
            </li>
          </ul>
        </section>

        <div className="text-center mt-8">
          <p className="text-gray-800 mb-4">
            Join us on this fashion journey, and let's create a wardrobe that
            reflects your true self!
          </p>
          <center>
            <Link
              className="flex justify-center items-center my-10"
              href="/gallery"
            >
              <MyButton text={"Explore Our Collection"} />
            </Link>
          </center>
        </div>
      </div>
    </>
  );
}
