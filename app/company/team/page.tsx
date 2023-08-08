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
            <div>
            <Image src='/persons/1.jpeg' alt='Dr. Shehzad Younas' width={150} height={30} className="rounded-md" />
            <p className="text-center">Dr. Shehzad Younas</p>
            </div>
            <div>
              <Image src='/persons/22.jpg' alt='Muhammad Kashif' width={150} height={30} className="rounded-md" />
              <p className="text-center">Muhammad Kashif</p>
            </div>
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Design Engineer</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <div>
              <Image src='/persons/3.jpeg' alt='Muhammad Tayyab' width={150} height={30} className="rounded-md" />
              <p className="text-center">Muhammad Tayyab</p>
            </div>
            <div>
              <Image src='/persons/Muhammad-Uzair.jpeg' alt='Muhammad Uzair' width={150} height={30} className="rounded-md" />
              <p className="text-center">Muhammad Uzair</p>
            </div>
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Product Designer</span></h1>
        <div className="my-5 flex flex-wrap items-start space-x-10">
            <div>
              <Image src='/persons/4.png' alt='Naveen Akbar' width={150} height={30} className="mb-2 rounded-md" />
              <p className="text-center">Naveen Akbar</p>
            </div>
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Media Manager</span></h1>
        <div className="mt-5 flex flex-wrap items-start space-x-10">
            <div>
              <Image src='/persons/55.jpg' alt='Nida Nabeel' width={150} height={30} className="rounded-lg" />
              <p className="text-center">Nida Nabeel</p>
            </div>
        </div>
        <h1 className='mt-5 px-24 pt-5 text-center text-4xl font-bold'><span className="text-blue-400">Team Members</span></h1>
        <div className="my-5 flex flex-wrap items-start space-x-10">
            <div>
              <Image src='/persons/8.jpeg' alt='Naveen Akbar' width={150} height={30} className="mb-2 rounded-md" />
              <p className="text-center">?</p>
            </div>
            <div>
              <Image src='/persons/Kashif-Janjua.jpeg' alt='Kashif Janjua' width={150} height={30} className="mb-2 rounded-md" />
              <p className="text-center">Kashif Janjua</p>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default Page;
