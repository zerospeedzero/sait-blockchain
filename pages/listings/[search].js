import { useAddress} from "@thirdweb-dev/react";
import Listings from "@/Components/Listings";
import { useRouter } from "next/router";

export default function() {
  const address = useAddress();
  const router = useRouter()
  const { search } = router.query
  if (!address) {router.push('/')}
  return (
    <>
      <Listings search={search}/>
    </>
  )
}
