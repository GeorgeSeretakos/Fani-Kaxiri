import Image from "next/image";

export default function SocialSection() {
  return (
    <section className="py-12">
      <div className="flex flex-col items-center gap-4">
        {/* top line */}
        <div className="w-16 h-1 bg-white"></div>

        {/* icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100092161156931&locale=el_GR"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Facebook"
          >
            <Image
              src="/icons/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="https://www.instagram.com/t_kaparelioti_wellness/"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Instagram"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="https://www.tiktok.com/@t_kaparelioti_wellness"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="TikTok"
          >
            <Image
              src="/icons/tiktok.png"
              alt="TikTok"
              width={40}
              height={40}
              style={{border: "2px solid white", backgroundColor: "white", borderRadius: "50%"}}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/tonia-kaparelioti-676296292/"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Image
              src="/icons/linkedin.png"
              alt="LinkedIn"
              width={40}
              height={40}
              // style={{backgroundColor: "white", border: "2px solid white", borderRadius: "50%"}}
            />
          </a>
        </div>

        {/* bottom line */}
        <div className="w-16 h-1 bg-white"></div>
      </div>
    </section>
  );
}
