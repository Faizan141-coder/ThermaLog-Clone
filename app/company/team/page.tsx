import Image from "next/image";
import React from "react";

const Page: React.FC = () => {
  return (
    <div>
      <div className="my-10 px-52">
        <div className="text-justify">
            <div className="flex-wrap">
                <h1 className="text-[44px] font-semibold">
                Meet Our <span className="text-blue-400">Team</span>
                </h1>
            </div>
        </div>
        <h1 className='mt-10 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Board</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <Image src='/persons/8.jpg' alt='VGreen' width={150} height={30} className="rounded-md" />
            <Image src='/persons/9.jpg' alt='National Incubation Center' width={150} height={30} className="rounded-md" />
            <Image src='/persons/10.jpg' alt='PFAN' width={150} height={30} className="rounded-md" />
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Tech & Data</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <Image src='/persons/4.jpg' alt='VGreen' width={150} height={30} className="rounded-md" />
            <Image src='/persons/5.jpg' alt='National Incubation Center' width={150} height={30} className="rounded-md" />
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Product</span></h1>
        <div className="my-5 flex flex-wrap items-start space-x-10">
            <Image src='/persons/1.jpg' alt='VGreen' width={150} height={30} className="mb-2 rounded-md" />
            <Image src='/persons/2.jpg' alt='National Incubation Center' width={150} height={30} className="rounded-md" />
            <Image src='/persons/3.jpg' alt='PFAN' width={150} height={30} className="rounded-md" />
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Sales & Marketinng</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <Image src='/persons/6.jpg' alt='VGreen' width={150} height={30} className="rounded-lg" />
            <Image src='/persons/7.jpg' alt='National Incubation Center' width={150} height={30} className="rounded-lg" />
        </div>
      </div>
      
    </div>
  );
};

export default Page;
