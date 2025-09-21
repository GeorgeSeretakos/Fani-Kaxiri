export default function SocialSection() {
  return (
    <section>
      <div className="flex flex-col items-start gap-4">
        {/* top line */}
        <div className="w-16 h-0.25 bg-white"></div>

        {/* icons */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/profile.php?id=100003586060421&locale=el_GR"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Facebook"
          >
            <img
              src="/icons/facebook.png"
              alt="Facebook"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.instagram.com/nutridiarybyfani/"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="Instagram"
          >
            <img
              src="/icons/instagram.png"
              alt="Instagram"
              width={40}
              height={40}
            />
          </a>
          <a
            href="https://www.tiktok.com/@nutridiarybyfani"
            className="w-12 h-12 rounded-full flex items-center justify-center"
            aria-label="TikTok"
          >
            <img
              src="/icons/tiktok.png"
              alt="TikTok"
              width={40}
              height={40}
              // style={{border: "2px solid white", backgroundColor: "white", borderRadius: "50%"}}
            />
          </a>
        </div>

        {/* bottom line */}
        {/*<div className="w-16 h-1 bg-black"></div>*/}
      </div>
    </section>
  );
}
