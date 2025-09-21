import { Geist, Geist_Mono, Great_Vibes, Manrope, Open_Sans, Roboto } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: "--font-great-vibes" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const openSans = Open_Sans({ variable: "--font-open-sans", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });

export const metadata = {
    // metadataBase: new URL('https://tonia-kaparelioti.gr'),
    title: { default: 'Φανή Καξηρή', template: '%s | Φανή Καξηρή' },
    description: '...',
    alternates: { canonical: '/' },
    robots: { index: true, follow: true },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="el">
        <body
            className={`
          ${manrope.variable} ${openSans.variable} ${roboto.variable}
          ${geistSans.variable} ${geistMono.variable} ${greatVibes.variable}
          antialiased
        `}
        >

        <Navbar/>
        <main className="mt-20 sm:mt-24">{children}</main>
        <Footer/>

        </body>
        </html>
    );
}
