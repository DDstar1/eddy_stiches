import Image from "next/image";
import { MyButton } from "@/components/MyButton";
import MyCarousel from "@/components/Carousel";
import MyCard from "@/components/cards";
import HowItWorks from "@/components/How_it_works";

// ... (image imports remain the same)
const styled_blue_man = "/images/styled_blue_man.jpeg";
const white_man = "/images/white_man.jpeg";

const green_man_in_native = "/images/green_man_native.jpeg";
const yellow_couple = "/images/yellow_couple.jpeg";

const black_native = "/images/black_native.jpeg";
const green_native_stick = "/images/green_native_stick.jpeg";
const red_gold_native = "/images/red_gold_native.jpeg";
const red_native = "/images/red_native.jpeg";
const white_native = "/images/white_native.jpeg";

const alterations_jeans = "/images/alterations_jeans.png";
const restyling = "/images/restyling.jpeg";
const reszing = "/images/resizing.jpeg";
const child = "/images/child.jpeg";

const spotlight_list = [
  black_native,
  green_native_stick,
  red_gold_native,
  red_native,
  white_native,
];

export default function Home() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src={white_man}
          layout="fill"
          objectFit="cover"
          quality={100}
          className="object-top"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-8">
          <h1 className="text-white font-bold text-3xl w-1/2 mb-4">
            WANT TO FEEL GOOD IN YOUR CLOTHES?
          </h1>
          <p className="text-white text-xl mb-4">
            IT ALL STARTS WITH A GREAT FIT
          </p>
          <p className="text-white mb-4 w-2/3">
            EDDY STICHES makes it easy to alter, repair and bespoke your clothes
            by connecting you with expert tailors across London.
          </p>
          <MyButton text="Book Us Now" className="w-48" />
        </div>
      </section>

      {/* Re-styled Customers Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl mb-6">STYLED CUSTOMERS</h2>
          <p className="mb-12 text-lg">
            We know the power of great fitting clothes in making you feel your
            best, whether it's for a special occasion, important meeting or just
            because we all deserve to feel confident.
          </p>
          <div className="flex flex-wrap gap-1 justify-center mx-auto md:justify-around items-center mb-12">
            <div className="w-full md:w-1/3 lg:w-1/3 mb-8">
              <Image
                src={green_man_in_native}
                width={400}
                height={600}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <p className="mt-4 text-center">
                Native Sewn with a green material
              </p>
            </div>
            <div className="w-full md:w-1/3 lg:w-1/3 mb-8">
              <Image
                src={yellow_couple}
                width={400}
                height={600}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <p className="mt-4 text-center">
                Couple Native sewn with the rare yellow material
              </p>
            </div>{" "}
            <div className="w-full md:w-1/3 lg:w-1/3 mb-8">
              <Image
                src={styled_blue_man}
                width={400}
                height={600}
                className="rounded-2xl shadow-lg mx-auto"
              />
              <p className="mt-4 text-center">Blue Styled Native</p>
            </div>{" "}
            <div className="w-full md:w-1/3 lg:w-1/3 mb-8">
              <Image
                src={yellow_couple}
                width={400}
                height={600}
                className="rounded-2xl shadow-lg filter grayscale mx-auto"
              />
              <p className="mt-4 text-center">
                Couple Native sewn with the rare yellow material
              </p>
            </div>
          </div>
          <div className="text-center">
            <MyButton text="Join Them and Book Us" className="w-64" />
          </div>
        </div>
      </section>

      {/* Spotlight Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl mb-12">OUR SPOTLIGHT</h2>
          <MyCarousel images={spotlight_list} />
        </div>
      </section>

      {/* Style Categories Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl mb-6">STYLE CATEGORIES</h2>
          <p className="mb-12 text-lg">
            Choose from our categories of tailors, whether you're looking for a
            local tailor, a wedding dress specialist or an express service, our
            categories below will be of help!
          </p>
          <div className="flex flex-wrap flex-col justify-center items-center md:flex-row md:justify-around gap-8">
            <MyCard
              title="COMPLICATED ALTERATIONS"
              image={alterations_jeans}
              description="We specialize in expert clothing alterations, from simple hems to complex resizing, ensuring a perfect fit and enhanced personal style."
            />
            <MyCard
              title="RESIZING"
              image={reszing}
              description="Our skilled tailors handle everything from simple hem adjustments to complex garment resizing"
            />
            <MyCard
              title="RESTYLING"
              image={restyling}
              description="Our restyling services from our skilled tailors ensure your clothes reflect the latest trends while maintaining their unique character"
            />
            <MyCard
              title="CHILDREN'S WEAR"
              image={child}
              description="We also offer expert alterations and designs for children's clothing, ensuring a perfect fit and a stylish look"
            />
          </div>
        </div>
      </section>

      {/* How We Operate Section */}
      <section className="py-16 bg-white">
        <HowItWorks />
      </section>
    </main>
  );
}
