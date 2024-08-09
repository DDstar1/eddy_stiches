import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Footer = () => {
  return (
    <footer id="contact" className=" bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-start items-center justify-around gap-5">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-2 ">Eddy Stitches</h3>
            <p className="mb-4 text-center">
              Expert tailoring services for a perfect fit.
            </p>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div
            id="real_contact"
            className="p-2 rounded-2xl flex flex-col items-center"
          >
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p className="flex-row gap-6 ">
              <Link
                className="flex gap-2 justify-start items-center mb-3"
                href={"https://api.whatsapp.com/send?phone=2348066007330"}
              >
                <FaWhatsappSquare size={30} />
                <div>08066007330</div>
              </Link>
              <Link
                className="flex gap-2 justify-start items-center"
                href={"tel:08051787143"}
              >
                <FaPhoneSquareAlt size={30} />
                <div>08119186286 | 08051787143</div>
              </Link>
            </p>
          </div>

          {/* Location */}
          <p className="mb-2  flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-2">Location</h4>
            <div className="flex items-center justify-start">
              <IoLocation size={30} />{" "}
              <div className="text-center">Angle 90, Ubiaja, Edo State</div>
            </div>
          </p>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Eddy Stitches. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
