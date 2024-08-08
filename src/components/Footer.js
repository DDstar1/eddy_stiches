import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-4 ">Eddy Stitches</h3>
            <p className="mb-4">Expert tailoring services for a perfect fit.</p>
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
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i> 08119186286 | 08051787143
            </p>
            <p className="mb-2">
              <i className="fas fa-map-marker-alt mr-2"></i> Angle 90, Ubiaja,
              Edo State
            </p>
          </div>
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
