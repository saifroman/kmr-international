export default function HomePage() {
  return (
    <div className="px-2 py-4 xl:px-6 xl:py-6">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="col-span-2 row-span-30 flex items-center justify-center rounded-2xl shadow-xl">
          Image 01
        </div>
        <div className="col-span-1 row-span-15 flex items-center justify-center rounded-xl shadow">
          Image 02
        </div>
        <div className="col-span-1 row-span-15 flex items-center justify-center rounded-xl shadow">
          Image 03
        </div>
      </div>
    </div>
  );
}
