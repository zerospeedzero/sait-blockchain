import { useAddress} from "@thirdweb-dev/react";
import Listings from "@/Components/Listings";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function() {
  const address = useAddress();
  const router = useRouter()
  const { search } = router.query
  useEffect(()=> {
    if (!address) {router.push('/')}
  },address)
  return (
    <>
      <Listings search={search}/>
    </>
  )
}
