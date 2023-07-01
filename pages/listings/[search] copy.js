import { useAddress, ConnectWallet } from "@thirdweb-dev/react";
import Listings from "@/Components/Listings";
import { useRouter } from "next/router";

export default function() {
  const address = useAddress();
  const router = useRouter()
  const { search } = router.query
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
        ?  <><Listings search={search}/></>
        : authenticating()
      }
    </>
  )
}
