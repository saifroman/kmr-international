import Image from "next/image";

export default function HomePage() {
  return (
    <div className="px-2 py-4 xl:px-6 xl:py-6">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 row-span-30 flex items-center justify-center rounded-2xl shadow-xl">
          Image 01
        </div>
        <div className="col-span-1 row-span-15 flex flex-col items-center justify-start rounded-xl shadow">
          <h3 className="font-semibold">OUR BUYERS</h3>
          <div className="grid grid-cols-2 gap-8">
            <Image
              src={`/buyers/alcott.svg`}
              width={112}
              height={112}
              style={{ width: 112, height: 112 }}
              alt="Picture of buyers"
            />
            <Image
              src={`/buyers/inditex.svg`}
              width={112}
              height={112}
              style={{ width: 112, height: 112 }}
              alt="Picture of buyers"
            />
            <Image
              src={`/buyers/Logo_BSK.svg`}
              width={112}
              height={112}
              style={{ width: 112, height: 112 }}
              alt="Picture of buyers"
            />
            <Image
              src={`/buyers/zara_brands.svg`}
              width={112}
              height={112}
              style={{ width: 112, height: 112 }}
              alt="Picture of buyers"
            />
          </div>
        </div>

        <div className="col-span-1 row-span-15 flex flex-col items-center justify-center rounded-xl shadow">
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
