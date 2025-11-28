"use client";

import React from "react";
import { Shield, Lock, Eye, FileText, Mail, Phone } from "lucide-react";
import Link from "next/link";

const PrivaryPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600">
            গোপনীয়তা নীতি / Privacy Policy
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last Updated: January 2025
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 md:p-10 space-y-8">
          {/* Introduction */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">
                Introduction / পরিচিতি
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Amzad Food, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
              <Link href="https://amzadfood.com" className="text-primary hover:underline">
                amzadfood.com
              </Link>{" "}
              and use our services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>আমজাদ ফুডে</strong>, আমরা আপনার গোপনীয়তা রক্ষা এবং আপনার ব্যক্তিগত তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ। এই গোপনীয়তা নীতি ব্যাখ্যা করে যে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার, প্রকাশ এবং সুরক্ষিত করি যখন আপনি আমাদের ওয়েবসাইট পরিদর্শন করেন এবং আমাদের পরিষেবাগুলি ব্যবহার করেন।
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">
                Information We Collect / আমরা যে তথ্য সংগ্রহ করি
              </h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Personal Information / ব্যক্তিগত তথ্য
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Name / নাম</li>
                  <li>Email address / ইমেইল ঠিকানা</li>
                  <li>Phone number / ফোন নম্বর</li>
                  <li>Shipping address / ডেলিভারি ঠিকানা</li>
                  <li>Payment information / পেমেন্ট তথ্য</li>
                  <li>Account credentials / অ্যাকাউন্ট পরিচয়পত্র</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Usage Information / ব্যবহারের তথ্য
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Browser type and version / ব্রাউজার ধরন এবং সংস্করণ</li>
                  <li>IP address / আইপি ঠিকানা</li>
                  <li>Pages visited / পরিদর্শিত পৃষ্ঠা</li>
                  <li>Time and date of visits / পরিদর্শনের সময় এবং তারিখ</li>
                  <li>Device information / ডিভাইস তথ্য</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold text-gray-900">
                How We Use Your Information / আমরা আপনার তথ্য কীভাবে ব্যবহার করি
              </h2>
            </div>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>
                <strong>Order Processing:</strong> To process and fulfill your orders, manage deliveries, and handle returns.
                <br />
                <span className="text-gray-600">
                  <strong>অর্ডার প্রক্রিয়াকরণ:</strong> আপনার অর্ডার প্রক্রিয়া এবং সম্পূর্ণ করা, ডেলিভারি পরিচালনা এবং রিটার্ন পরিচালনা করতে।
                </span>
              </li>
              <li>
                <strong>Customer Service:</strong> To respond to your inquiries, provide support, and improve our services.
                <br />
                <span className="text-gray-600">
                  <strong>গ্রাহক সেবা:</strong> আপনার প্রশ্নের উত্তর দেওয়া, সহায়তা প্রদান এবং আমাদের পরিষেবা উন্নত করতে।
                </span>
              </li>
              <li>
                <strong>Communication:</strong> To send order confirmations, shipping updates, promotional offers, and newsletters.
                <br />
                <span className="text-gray-600">
                  <strong>যোগাযোগ:</strong> অর্ডার নিশ্চিতকরণ, শিপিং আপডেট, প্রচারমূলক অফার এবং নিউজলেটার পাঠাতে।
                </span>
              </li>
              <li>
                <strong>Security:</strong> To protect against fraud, unauthorized access, and other security threats.
                <br />
                <span className="text-gray-600">
                  <strong>নিরাপত্তা:</strong> জালিয়াতি, অননুমোদিত অ্যাক্সেস এবং অন্যান্য নিরাপত্তা হুমকি থেকে রক্ষা করতে।
                </span>
              </li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Data Protection / তথ্য সুরক্ষা
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <p className="text-gray-700 leading-relaxed">
              আমরা আপনার ব্যক্তিগত তথ্যকে অননুমোদিত অ্যাক্সেস, পরিবর্তন, প্রকাশ বা ধ্বংস থেকে রক্ষা করার জন্য উপযুক্ত প্রযুক্তিগত এবং সাংগঠনিক নিরাপত্তা ব্যবস্থা প্রয়োগ করি। তবে, ইন্টারনেট বা ইলেকট্রনিক স্টোরেজের মাধ্যমে প্রেরণের কোনও পদ্ধতি 100% নিরাপদ নয়।
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Cookies and Tracking Technologies / কুকিজ এবং ট্র্যাকিং প্রযুক্তি
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
            <p className="text-gray-700 leading-relaxed">
              আমরা আমাদের ওয়েবসাইটে কার্যকলাপ ট্র্যাক করতে এবং নির্দিষ্ট তথ্য সংরক্ষণ করতে কুকিজ এবং অনুরূপ ট্র্যাকিং প্রযুক্তি ব্যবহার করি। আপনি আপনার ব্রাউজারকে সমস্ত কুকিজ প্রত্যাখ্যান করতে বা একটি কুকি পাঠানো হলে তা নির্দেশ করতে বলতে পারেন।
            </p>
          </section>

          {/* Third-Party Services */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Third-Party Services / তৃতীয় পক্ষের পরিষেবা
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping, and data analysis. These third parties are prohibited from using your information for any purpose other than providing services to us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              আমরা আপনার তথ্য তৃতীয় পক্ষের পরিষেবা প্রদানকারীদের সাথে ভাগ করতে পারি যারা আমাদের পক্ষে পরিষেবা সম্পাদন করে, যেমন পেমেন্ট প্রক্রিয়াকরণ, শিপিং এবং ডেটা বিশ্লেষণ। এই তৃতীয় পক্ষগুলিকে আমাদের পরিষেবা প্রদান ছাড়া অন্য কোন উদ্দেশ্যে আপনার তথ্য ব্যবহার করতে নিষেধ করা হয়েছে।
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Your Rights / আপনার অধিকার
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 ml-4">
              <li>Right to access your personal data / আপনার ব্যক্তিগত ডেটা অ্যাক্সেস করার অধিকার</li>
              <li>Right to rectify inaccurate data / ভুল ডেটা সংশোধন করার অধিকার</li>
              <li>Right to request deletion of your data / আপনার ডেটা মুছে ফেলার অনুরোধ করার অধিকার</li>
              <li>Right to object to processing / প্রক্রিয়াকরণে আপত্তি করার অধিকার</li>
              <li>Right to data portability / ডেটা বহনযোগ্যতার অধিকার</li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="bg-primary/5 rounded-lg p-6 border border-primary/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Contact Us / আমাদের সাথে যোগাযোগ করুন
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:info@amzadfood.com" className="text-primary hover:underline">
                  info@amzadfood.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:09613824071" className="text-primary hover:underline">
                  09613-824071
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Link href="https://amzadfood.com" className="text-primary hover:underline">
                  https://amzadfood.com
                </Link>
              </div>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Changes to This Policy / এই নীতিতে পরিবর্তন
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              আমরা সময়ে সময়ে এই গোপনীয়তা নীতি আপডেট করতে পারি। আমরা এই পৃষ্ঠায় নতুন গোপনীয়তা নীতি পোস্ট করে এবং "সর্বশেষ আপডেট" তারিখ আপডেট করে যে কোনও পরিবর্তনের বিষয়ে আপনাকে অবহিত করব। যে কোনও পরিবর্তনের জন্য এই গোপনীয়তা নীতিটি পর্যায়ক্রমে পর্যালোচনা করার পরামর্শ দেওয়া হচ্ছে।
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            ← Back to Home / হোমে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivaryPolicy;