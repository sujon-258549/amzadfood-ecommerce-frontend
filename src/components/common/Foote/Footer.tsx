import {
  Facebook,
  Instagram,
  Youtube,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaTiktok } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-white pt-8 md:pt-12 mt-8 md:mt-16 text-black">
      {/* Main Footer */}
      <div className="container">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-8">
            {/* Column 1: About Us */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b-2 border-primary w-32 pb-2 text-black">
                About Us
              </h3>
              <p className="text-sm md:text-base leading-relaxed font-medium text-gray-600">
                নিরাপদ খাবার, আপনার অধিকার।
                <br />
                আমাদের লক্ষ্য শতভাগ নিরাপদ খাবার
                <br />
                দিয়ে সেবা দেওয়া।
              </p>
              <div className="flex gap-2 md:gap-3 mt-6 md:mt-8">
                <a
                  href="#"
                  className="bg-blue-800 p-2 rounded-full hover:bg-blue-900 transition"
                >
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-pink-600 p-2 rounded-full hover:bg-pink-700 transition"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-black p-2 rounded-full hover:bg-gray-900 transition"
                >
                  <FaTiktok className="w-4 h-4 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-red-600 p-2 rounded-full hover:bg-red-700 transition"
                >
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>

            {/* Column 2: Useful Links */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b-2 border-primary w-32 pb-2 text-black">
                Useful Links
              </h3>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium">
                <li>
                  <Link href={"/privacy-policy"} className="text-gray-600 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href={"/refund_returns"} className="text-gray-600 hover:text-primary transition-colors">
                    Refund and Returns
                  </Link>
                </li>
                <li>
                  <Link href={"/terms-and-conditions"} className="text-gray-600 hover:text-primary transition-colors">
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b-2 border-primary w-32 pb-2 text-black">
                Contact Us
              </h3>
              <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-gray-600">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>+880 1234 56789</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-3.5 h-3.5 text-primary" />
                  <span>support@amzadfood.com</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Follow Us + FB Page Preview */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 border-b-2 border-primary w-32 pb-2 text-black">
                Follow Us
              </h3>
              <div className="bg-gray-50 border border-gray-200 text-black rounded-lg p-4 md:p-5 shadow-md">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary text-lg md:text-xl">
                    AF
                  </div>
                  <div>
                    <p className="font-bold text-base md:text-lg text-black">Amzad Food</p>
                    <p className="text-xs md:text-sm text-gray-600">75,748 followers</p>
                  </div>
                </div>
                <Button className="w-full bg-primary ">
                  Follow Page
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary/5 border-t-2 border-primary/20 py-5 md:py-6 text-center text-sm md:text-base text-black font-medium">
        <div className="container flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="text-gray-600">Copyright 2025 © Amzad Food</p>
          <Link href="https://www.thezoomit.com/" className="hover:opacity-80 transition-opacity">
            <Image src="https://soi71.vercel.app/logo.webp" alt="Amzad Food" width={100} height={100} />
          </Link>
        </div>
      </div>

      {/* Floating WhatsApp & Call Buttons */}
      <div className="fixed bottom-[10px] md:bottom-6 right-[10px] md:right-6 flex flex-col gap-4 z-50">
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
