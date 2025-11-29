"use client";

import React from "react";

const ReroundAndReturns = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="container">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              রিফান্ড ও রিটার্ন
            </h2>
          </div>

          {/* Introduction */}
          <div className="space-y-2">
            <p className="text-sm leading-relaxed">
              আমরা আমাদের প্রোডাক্টের গুণগত মান নিশ্চিত করতে সর্বোচ্চ চেষ্টা করি। তবে, যদি আপনি ডেলিভারি পাওয়ার পর কোনো প্রোডাক্ট ভাঙা বা নষ্ট অবস্থায় পান, আমরা আপনাকে রিফান্ড বা এক্সচেঞ্জ অফার করি।
            </p>
          </div>

          {/* Refund Policy Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              রিফান্ড পলিসি
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>প্রোডাক্ট পাওয়ার পর ২৪ ঘণ্টার মধ্যে আমাদের সাথে যোগাযোগ করতে হবে।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>প্রমাণ স্বরূপ ছবি সহ আপনার সমস্যা জানালে আমরা দ্রুত রিফান্ড প্রক্রিয়া সম্পন্ন করব।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>রিফান্ড প্রক্রিয়া সম্পন্ন হলে, পুরো অর্থ আপনার পেমেন্ট পদ্ধতিতে ফিরিয়ে দেয়া হবে।</span>
              </li>
            </ul>
          </div>

          {/* Exchange Policy Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              এক্সচেঞ্জ পলিসি
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>যদি আপনি ভাঙা বা নষ্ট প্রোডাক্ট পান এবং আপনি এক্সচেঞ্জ চান, তাহলে আমাদের সাথে ২৪ ঘণ্টার মধ্যে যোগাযোগ করতে হবে।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>নতুন প্রোডাক্টের জন্য এক্সচেঞ্জ করা হবে এবং পুরনো প্রোডাক্ট ফিরিয়ে নেওয়া হবে।</span>
              </li>
            </ul>
          </div>

          {/* Closing Note */}
          <div className="space-y-2">
            <p className="text-sm leading-relaxed">
              আমরা চাই আপনার অভিজ্ঞতা সর্বদা সন্তোষজনক হোক। যদি কোনো কারণে আপনার প্রোডাক্টে সমস্যা ঘটে, আমাদের গ্রাহক সেবা টিম দ্রুত সমাধান প্রদান করবে।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReroundAndReturns;
