import Image from "next/image";

export default function BlogCard({ image, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-700 flex-1">
          {description}
        </p>
        <span className="mt-4 text-sm text-teal-800 font-medium flex items-center gap-1">
          Μάθετε περισσότερα →
        </span>
      </div>
    </div>
  );
}
