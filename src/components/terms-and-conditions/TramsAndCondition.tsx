"use client";



const TramsAndCondition = () => {
  return (
    <div className="py-5 md:py-10">
      <div className="container">
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="text-xl sm:text-2xl font-bold">
              শর্তাবলী ও নীতিমালা
            </h2>
          </div>

          {/* Order Cancellation Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              অর্ডার বাতিল
            </h3>
            <p className="text-sm leading-relaxed">
              আপনি যদি বারবার অর্ডার বাতিল করেন, তাহলে ভবিষ্যতে নতুন অর্ডার নিশ্চিত করতে ১০০ টাকা অগ্রিম পেমেন্ট করতে হবে।
            </p>
          </div>

          {/* High Return Rate Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              উচ্চ রিটার্ন রেট
            </h3>
            <p className="text-sm leading-relaxed">
              এপর্যন্ত আপনার মোট অনলাইন অর্ডার অনুযায়ী যদি ২০% এর বেশি রিটার্ন রেশিও থাকে, তাহলে নতুন অর্ডার নিশ্চিত করতে ১০০ টাকা অগ্রিম পেমেন্ট করতে হবে।
            </p>
          </div>

          {/* Special Note Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              বিঃ দ্রঃ
            </h3>
            <p className="text-sm leading-relaxed">
              আম এবং ডেজার্ট আইটেমের ক্ষেত্রে সম্পূর্ন ডেলিভারি চার্জ অগ্রিম পেমেন্ট করতে হবে।
            </p>
          </div>

          {/* Why This Rule Section */}
          <div className="space-y-2">
            <h3 className="text-base sm:text-lg font-semibold">
              ❗ কেন এই নিয়ম
            </h3>
            <ul className="space-y-1.5 text-sm">
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>সবার জন্য নিরবচ্ছিন্ন এবং সহজ ডেলিভারি নিশ্চিত করতে।</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">•</span>
                <span>অপ্রয়োজনীয় অর্ডার সমস্যাগুলো এড়াতে।</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TramsAndCondition;
