import Link from "next/link";
import { EmailForm } from "../misc/email";

const components: {
  id: number;
  title: string;
  href: string;
  description: string;
}[] = [
  {
    id: 1,
    title: "Home",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    id: 2,
    title: "About Us",
    href: "/about",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    id: 3,
    title: "Contact Us",
    href: "/contact",
    description:
      "For sighted users to preview content available behind a link.",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <footer className="grid h-fit w-full items-center justify-center border-t py-8 xl:py-12">
        <div className="grid w-5xl grid-flow-col grid-cols-3 gap-4">
          <div className="flex flex-col gap-2">
            <h4 className="scroll-m-20 pb-2 text-xl font-semibold tracking-tight">
              Information
            </h4>
            <div className="flex flex-col">
              {components.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className="py-1 hover:text-[#ff6a28]"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Contuct Us
            </h4>
            <div className="flex flex-col gap-2">
              <p className="leading-7">
                Address: 212/1 Karim Villa, Fokirapool, Motijheel, Dhaka-1000.
              </p>
              <p className="pt-0.5 leading-7">Phone: +8801833978229.</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              Email Us
            </h4>
            <div className="flex flex-col gap-2">
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Contact us via Email!
              </p>
              <EmailForm />
            </div>
          </div>
        </div>
      </footer>
      <div className="flex h-6 w-full justify-center border-t">
        <div className="flex w-5xl items-center justify-start">
          <div className="flex gap-1 font-sans">
            &copy;{currentYear} <p className="font-bold">KMR</p> Made With ♥️ By
            <Link
              target="_"
              href={"https://github.com/asif-munshi"}
              className="font-bold text-[#ff6a28]"
            >
              <p>{"    "}Asif Munshi</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
