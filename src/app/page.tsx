import { OurBuyers } from "@/components/home/our-buyers";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="px-2 py-4 xl:px-6 xl:py-6">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="relative col-span-5 row-span-30 flex items-center justify-center rounded-2xl shadow-xl">
          <Image
            src={`/assets/KMR International Baground.jpg`}
            fill
            alt="Picture of buyers"
          />
        </div>
        <OurBuyers />

        <div className="col-span-1 row-span-15 flex w-fit flex-col items-center justify-center rounded-xl shadow">
          OUR CLIENTS
          <p>DEKKO LOGO</p>
          <p>AZIM LOGO</p>
        </div>

        <div className="col-span-1 row-span-15 flex flex-col items-center justify-center rounded-xl shadow">
          OUR CONCERN
          <p>DREUSS LOGO</p>
          <p>SENERGYS LOGO</p>
          <p>TOTAL APPARELS LOGO</p>
        </div>
      </div>
    </div>
  );
}
