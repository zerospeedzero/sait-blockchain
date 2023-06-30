import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from '/public/SVG/logo.svg'
import { AiOutlineSearch } from 'react-icons/ai'
import { useAddress, ConnectWallet } from "@thirdweb-dev/react";

const Header = () => {
  const address = useAddress();
  return (
    <div className="bg-black w-screen flex px-[1.2rem] py-[0.8rem] justify-between">
      <Link href="/" className='flex items-center'>
        <div className="flex items-center cursor-pointer space-x-3">
          <Image src={Logo} height={40} width={40} alt="logo"/>
          <div className="text-[#c8cacd] text-2xl font-semibold">SAIT Marketplace</div>
        </div>
      </Link>
      <div className="hidden flex-1 items-center bg-[#363840] rounded-lg hover:bg-[#4c505c] ml-[1rem] w-max-[520px] md:flex">
        <div className="text-[#8a939b] text-lg font-bold mx-3">
          <AiOutlineSearch />
        </div>
        <input className="bg-[#363840] w-full h-[2.6rem] border-0 bg-transparent pl-0 text-[#e6e8eb] placeholder:text-[#8a939b] " placeholder="Search items, collections, and accounts"/>
      </div>
      <div className="flex items-center justify-end">
        <Link href="/collections/0xc0BB0Da99AA6eA7F47Aefd9f9E71E54324Dbb3a7">
          <div className="font-semibold px-4 cursor-pointer text-[#c8cacd] hover:text-white hidden md:block"> Collections </div>
        </Link>
        <Link href="https://thirdweb.com/dashboard" target="_blank" rel="noopener noreferrer">
          <div className="font-semibold px-4 cursor-pointer text-[#c8cacd] hover:text-white hidden md:block">Thirdweb</div>
        </Link>
        {/*<div className="font-semibold px-4 cursor-pointer text-[#c8cacd] hover:text-white"> Resources </div>
        <div className="font-semibold px-4 cursor-pointer text-[#c8cacd] hover:text-white"> Create </div> */}
        {address && 
          <ConnectWallet theme="dark" btnTitle="Wallet" className=""/>
        }        
      </div>
    </div>
  )
}

export default Header