import Image from "next/image";

import { OurBuyers } from "@/components/home/our-buyers";
import { OurClients } from "@/components/home/our-clients";
import { OurConcerns } from "@/components/home/our-concerns";

export default function HomePage() {
  return (
    <div className="px-2 py-4 xl:px-6 xl:py-6">
      <div className="grid auto-cols-auto grid-flow-col grid-rows-3 gap-4">
        <div className="relative col-span-15 row-span-30 flex items-center justify-center rounded-2xl shadow-xl">
          <Image
            src={`/assets/KMR International Baground.jpg`}
            fill
            alt="Picture of buyers"
          />
        </div>
        <OurBuyers />

        <OurClients />

        <OurConcerns />
      </div>
    </div>
  );
}
