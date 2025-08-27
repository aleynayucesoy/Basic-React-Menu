import MenuItem from "../components/MenuItem";

export default function Menu() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Restaurant Menu
        </h2>

        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <MenuItem />
        </div>
      </div>
    </div>
  );
}
