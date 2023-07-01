import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="relative">
      <div className="before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('/nft-background.jpg')] before:bg-cover before:bg-center before:opacity-40">
        <div className="flex h-[calc(100vh-5rem)] relative justify-center flex-wrap items-center">
          <div className="w-1/2">
            <div className="relative text-white text-[46px] font-semibold">
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className="text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]">
              This marketplace is created for SAIT NMPD students.
            </div>
            <div className="flex">
              <Link href="./listings/all"><button className="relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer">Explore</button></Link>
            </div>
          </div>
          <div className="hidden md:block w-1/3 rounded-[3rem]">
            <img
              className="rounded-t-lg"
              src="nft-background.jpg"
              alt="bg"
            />
            <div className="h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white">
              <img
                className="h-[2.25rem] rounded-full"
                src="/APC_0018.png"
                alt="dumpy"
              />
              <div className="flex flex-col justify-center ml-4">
                <div className="">George</div>
                <Link href="./listings/all" className="text-[#1868b7]">
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero