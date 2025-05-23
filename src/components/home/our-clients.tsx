import Image from "next/image";

export const OurClients = () => {
  return (
    <div className="col-span-1 row-span-15 flex w-fit flex-col items-center justify-start rounded-xl p-4 shadow">
      <h3 className="font-semibold">OUR CLIENTS</h3>
      <div className="grid grid-cols-2 items-center justify-items-center gap-8">
        <Image
          src={`/clients/ananta-logo.png`}
          width={112}
          height={112}
          style={{ width: 112, height: 112 }}
          alt="Picture of Clients"
        />
        <Image
          src={`/clients/Dekko_Legacy_Group.svg`}
          width={112}
          height={112}
          style={{ width: 112, height: 112 }}
          alt="Picture of Clients"
        />
        <Image
          src={`/clients/square-group-seeklogo.svg`}
          width={112}
          height={112}
          style={{ width: 112, height: 112 }}
          alt="Picture of Clients"
        />
      </div>
    </div>
  );
};
