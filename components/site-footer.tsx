import Image from "next/image"

export function SiteFooter() {
  return (
    <footer className="border-t p-10">
      <div className="text-center">
        <h1 className="text-[40px] font-bold">EmbedAIoT</h1>
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