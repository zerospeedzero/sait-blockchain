import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import Header from  "../Components/Header";
import Layout from  "../Components/Layout";
import Listings from "../Components/Listings";

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
