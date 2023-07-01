import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import Listings from "../Components/Listings";
import Hero from "@/Components/Hero";

export default function() {
  const address = useAddress();
  const authenticating = () => {
    return (
      <div className="flex h-screen items-center justify-center">
        <ConnectWallet/>
      </div>      
    )
  }
  return (
    <>
      {address  
        ?  <><Listings/></>
        : authenticating()
      }
    </>
  )
}
