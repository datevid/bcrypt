import Image from "next/image";
import BcryptGenerator from "@/components/BcryptGenerator";
import BcryptDefinition from "@/components/BcryptDefinition";

export default function Home() {
  return(
      <>
          <BcryptGenerator/>
          <BcryptDefinition/>
      </>

  )
}
