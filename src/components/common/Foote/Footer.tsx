import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary pt-5 mt-8 md:mt-16 text-white">
      {/* Main Footer */}
      <div className="container">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
            {/* Column 1: About Us */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 border-b-2 border-white w-32 pb-1">
                About Us
              </h3>
              <p className="text-sm leading-relaxed font-medium">
                নিরাপদ খাবার, আপনার অধিকার।
                <br />
                আমাদের লক্ষ্য শতভাগ নিরাপদ খাবার
                <br />
                দিয়ে সেবা দেওয়া।
              </p>
              <div className="flex gap-3 mt-6">
                <a
                  href="#"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-black p-2 rounded-full hover:bg-gray-900 transition"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 border-b-2 border-white w-32 pb-1">
                Useful Links
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li className="border-b border-white/30 pb-2">
                  <Link href={""}>Privacy Policy</Link>
                </li>
                <li className="border-b border-white/30 pb-2">
                  <Link href={""}> Refund and Returns</Link>
                </li>
                <li>
                  <Link href={""}>Terms and Conditions</Link>{" "}
                </li>
              </ul>
            </div>

            {/* Column 3: Important Links */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 border-b-2 border-white w-32 pb-1">
                Important Links
              </h3>
              <ul className="space-y-3 text-sm font-medium">
                <li className="border-b border-white/30 pb-2">
                  <Link href={""}>Account</Link>
                </li>
                <li className="border-b border-white/30 pb-2">
                  {" "}
                  <Link href={""}>Wishlist</Link>Wishlist
                </li>
                <li>
                  {" "}
                  <Link href={""}>Cart</Link>Cart
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us + FB Page Preview */}
            <div>
              <h3 className="text-[16px] font-semibold mb-4 border-b-2 border-white w-32 pb-1">
                Follow Us
              </h3>
              <div className="bg-white text-black rounded-lg p-4 shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center font-bold text-blue-800">
                    AF
                  </div>
                  <div>
                    <p className="font-bold text-lg">Amzad Food</p>
                    <p className="text-xs text-gray-600">75,748 followers</p>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-2 rounded text-sm font-medium hover:bg-green-700 cursor-pointer transition">
                  Follow Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary py-4 text-center text-sm text-white font-medium">
        <p>Copyright 2025 © Amzad Food</p>
      </div>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
        <a
          href="tel:+880123456789"
          className="bg-secondary p-2 md:p-4 text-white  rounded-full shadow-2xl hover:bg-orange-00 transition transform hover:scale-110"
        >
          <Phone className="w-4 h-4" />
        </a>
        <a
          href="https://wa.me/880123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white p-2 md:p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110"
        >
          <MessageCircle className="w-4  h-4 " />
        </a>
      </div>
    </footer>
  );
}
