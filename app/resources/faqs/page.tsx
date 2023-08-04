import Image from "next/image";
import React from "react";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";

const Page: React.FC = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="px-52 my-10 flex">
        <div className="text-justify">
          <div className="flex">
            <div className="flex-wrap">
              <h1 className="font-semibold text-[44px]">
                Frequently Asked <span className="text-blue-400">Questions</span>
              </h1>
              <p className="text-md text-gray-300 mt-5">
                Welcome to the Frequently Asked Questions page of our website!
              </p>
              <p className="text-md text-gray-300 mt-5">
                Here you’ll find answers to common questions about our products and services. If you can’t find what you’re looking for, please contact us, and one of our customer service representatives will be happy to help.
              </p>
              <p className="text-md text-gray-300 mt-5">
                We hope this page provides you with the information you need to make informed decisions about our products and services. Thank you for visiting.
              </p>
            </div>
            <div className="mt-5 mx-20">
              <Image
                src="/faq.png"
                alt="FAQ"
                width={1000}
                height={500}
                className="mt-16"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Page;