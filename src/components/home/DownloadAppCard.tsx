import React from "react";

const DownloadAppCard = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gradient-to-b from-primary to-primary h-[300px] shadow-2xl overflow-hidden">
      {/* Main Content */}
      <div className="p-6 text-center text-white flex flex-col justify-between h-full">
        {/* Top Section */}
        <div>
          {/* Title */}
          <h2 className="text-[16px] font-bold mb-3">
            Download AmzadFood App
          </h2>

          {/* Rating */}
          {/* <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-xl">4.4 Rated</span>
          </div> */}
        </div>

        {/* Middle: QR + Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* QR Code */}
          <div className="bg-white p-3 shadow-lg">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://rokomari.com/app"
              alt="Rokomari App QR Code"
              className="w-24 h-24"
            />
          </div>

          {/* Store Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href="https://apps.apple.com/app/rokomari/id123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-10 w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.rokomari.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-10 w-auto"
              />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-sm font-medium mt-4 opacity-95">
          Scan the QR code with your phone camera
        </p>
      </div>
    </div>
  );
};

export default DownloadAppCard;