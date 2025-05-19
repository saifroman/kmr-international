import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="grid w-5xl gap-6 pb-4 xl:pb-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Meet Our Team
        </h1>

        <div className="grid grid-cols-3 gap-x-3 gap-y-12">
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl shadow-2xl">
              <Image
                src={`/assets/B.M Enamul Haque Jewel.png`}
                width={256}
                height={256}
                style={{ width: 256, height: 256, borderRadius: 16 }}
                alt="Picture of B.M Enamul Haque Jewel"
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full px-2 py-6"
              >
                <h3 className="w-[256px] text-xl font-semibold tracking-tight">
                  BM Enamul Haque
                </h3>
              </Button>
              <h2 className="w-[256px] text-center leading-7 font-bold capitalize [&:not(:first-child)]:mt-2">
                FOUNDER & PROPRIETOR
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl shadow-2xl">
              <Image
                src={`/assets/B.M Tipu Sultan.jpg`}
                width={256}
                height={256}
                style={{ width: 256, height: 256, borderRadius: 16 }}
                alt="Picture of BM Roman"
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full px-2 py-6"
              >
                <h3 className="w-[256px] text-xl font-semibold tracking-tight">
                  BM Tipu Sultan
                </h3>
              </Button>
              <h2 className="w-[256px] text-center leading-7 font-bold capitalize [&:not(:first-child)]:mt-2">
                CO-FOUNDER
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <Link
              href={"/about/bm-saif-haque-roman"}
              className="flex w-full flex-col items-center justify-center"
            >
              <div className="flex h-64 w-64 items-center justify-center rounded-xl shadow-2xl">
                <Image
                  src={`/assets/BM Roman.jpg`}
                  width={256}
                  height={256}
                  style={{ width: 256, height: 256, borderRadius: 16 }}
                  alt="Picture of BM Roman"
                />
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/about/bm-saif-haque-roman"} className="w-full">
                  <Button
                    variant="outline"
                    className="mt-4 w-full cursor-pointer rounded-full px-2 py-6"
                  >
                    <h3 className="w-[256px] text-xl font-semibold tracking-tight">
                      BM. Saif Haque Roman
                    </h3>
                  </Button>
                </Link>
                <h2 className="w-[256px] text-center leading-7 font-bold capitalize [&:not(:first-child)]:mt-2">
                  DIRECTOR
                </h2>
              </div>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl shadow-2xl">
              <Image
                src={`/assets/Md Abu Salim.jpg`}
                width={256}
                height={256}
                style={{ width: 256, height: 256, borderRadius: 16 }}
                alt="Picture of BM Roman"
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full px-2 py-6"
              >
                <h3 className="w-[256px] text-xl font-semibold tracking-tight">
                  Md Abu Salim
                </h3>
              </Button>
              <h2 className="w-[256px] text-center leading-7 font-bold capitalize [&:not(:first-child)]:mt-2">
                GENERAL MANAGER
              </h2>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl shadow-2xl">
              <Image
                src={`/assets/Sufiullah.jpg`}
                width={256}
                height={256}
                style={{ width: 256, height: 256, borderRadius: 16 }}
                alt="Picture of BM Roman"
              />
            </div>
            <div className="flex flex-col items-center">
              <Button
                variant="outline"
                className="mt-4 w-full rounded-full px-2 py-6"
              >
                <h3 className="w-[256px] text-xl font-semibold tracking-tight">
                  Mr. Safi
                </h3>
              </Button>
              <h2 className="w-[256px] text-center leading-7 font-bold capitalize [&:not(:first-child)]:mt-2">
                LEAD GRAPHIC DESIGNER
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
