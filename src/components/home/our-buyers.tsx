import Image from "next/image";

export const OurBuyers = () => {
  return (
    <div className="col-span-1 row-span-15 flex w-fit flex-col items-center justify-start rounded-xl p-4 shadow">
      <h3 className="font-semibold">OUR BUYERS</h3>
      <div className="grid grid-cols-2 items-center justify-items-center gap-8">
        <Image
          src={`/buyers/alcott.svg`}
          width={112}
          height={112}
          style={{ width: 112, height: 112 }}
          alt="Picture of buyers"
        />
        <Image
          src={`/buyers/tpj-logo-white-transparent.avif`}
          width={72}
          height={64}
          style={{ width: 72, height: 64, backgroundColor: "black" }}
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
  );
};
