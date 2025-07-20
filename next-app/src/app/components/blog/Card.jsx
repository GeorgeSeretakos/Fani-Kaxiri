import Image from "next/image";
import Link from "next/link";

export default function Card({
                               type,
                               title,
                               description,
                               image,
                               link,
                               views,
                               date,
                             }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-all flex flex-col">
      {image && (
        <div className="relative w-full h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-t-lg"
          />
        </div>
      )}

      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium uppercase text-gray-500">
            {type}
          </span>
          {date && (
            <span className="text-xs text-gray-400">{date}</span>
          )}
        </div>

        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>

        <div className="flex justify-between items-center mt-auto">
          {views && (
            <span className="text-xs text-gray-500">{views} views</span>
          )}
          <Link
            href={link}
            target="_blank"
            className="text-blue-600 text-sm font-medium hover:underline"
          >
            {type === "tv" ? "Watch" : type === "podcast" ? "Listen" : "Read"}
          </Link>
        </div>
      </div>
    </div>
  );
}
