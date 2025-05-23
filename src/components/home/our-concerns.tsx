import Image from "next/image";

export const OurConcerns = () => {
  return (
    <div className="col-span-1 row-span-15 flex w-fit flex-col items-center justify-start rounded-xl p-4 shadow">
      <h3 className="font-semibold">OUR CONCERNS</h3>
      <div className="grid grid-cols-2 items-center justify-items-center gap-8">
        <Image
          src={`/concerns/DREUSS LOGO.png`}
          width={112}
          height={112}
          style={{ width: 112, height: 112 }}
          alt="Picture of buyers"
        />
        <Image
          src={`/concerns/logo-synergiesworldwide.png`}
          width={112}
          height={112}
          style={{ width: 112, height: 112, backgroundColor: "black" }}
          alt="Picture of buyers"
        />
      </div>
    </div>
  );
};
