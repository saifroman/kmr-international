import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex w-5xl flex-col items-center justify-center gap-4 py-4 xl:py-8">
        <div className="flex h-64 w-64 flex-col items-center justify-center rounded-xl shadow-2xl">
          <Image
            src={`/assets/BM Roman.jpg`}
            width={256}
            height={256}
            style={{ width: 256, height: 256, borderRadius: 16 }}
            alt="Picture of B.M Saif Haque Roman"
          />
        </div>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight transition-colors">
          BM. Saif Haque Roman
        </h2>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold tracking-tight">MBA, BBA</h3>
          <blockquote className="text-xl font-semibold italic">
            American International University Bangladesh
          </blockquote>
        </div>
        <h2 className="w-full pt-4 text-left text-xl font-semibold tracking-tight">
          My Vision
        </h2>
        <p className="text-justify leading-7">
          {`As we continue to grow and evolve, I'm excited to share our company's
          vision and goals for the upcoming year. Our mission remains the same:
          to provide innovative solutions that make a positive impact on our
          customers and community. We're committed to fostering a culture of
          collaboration, creativity, and excellence, and I'm confident that
          together, we'll achieve great things.`}
        </p>
      </div>
    </div>
  );
}
