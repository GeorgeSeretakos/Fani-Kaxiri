import { Geist, Geist_Mono, Great_Vibes } from "next/font/google";
import "./styles/globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const greatVibes = Great_Vibes({
    weight: "400",
    subsets: ["latin"],
    variable: "--font-great-vibes",
})

export const metadata = {
    title: "tonia Kaparelioti",
    description: "Website for tonia Kaparelioti",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${greatVibes.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        </body>
        </html>
    );
}