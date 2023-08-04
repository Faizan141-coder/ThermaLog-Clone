import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t px-10 py-10 text-white">
      <Image 
          src="/Embed-Blue-Dark.png"
          alt="EmbedAIoT"
          width={200}
          height={50}
          className="flex items-center justify-center mx-auto mb-5"
      />
      <div className="text-center">
        <h1 className="font-bold text-[40px]">EmbedAIoT</h1>
      </div>
      <div className="mt-10 flex justify-center space-x-10">
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Office</h1>
          <p>SINES, NUST, H-12, Islamabad</p>
        </div> 
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Contact</h1>
          <p>+923335436531</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Website</h1>
          <p>http://smartagritech.com</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-[20px] font-bold text-blue-400">Email</h1>
          <p>smartagritech@seecs.edu.pk</p>
        </div>
      </div>      
      <div className="mx-auto mt-10">
        <p className="text-center text-xs">
          &copy; 2023 Store, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  )
}