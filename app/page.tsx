import Image from "next/image";
import { IoLogoAndroid } from "react-icons/io";
import { TfiDownload } from "react-icons/tfi";
import Features from "./components/features";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div className="relative">
      <nav className=" py-8 px-7 max-sm:px-4 flex">
        <h1 className="flex relative">
          <span className="h-16 w-16 top-[-.85rem] left-[-.5rem] rounded-full bg-colorSecondary absolute"></span>
          <span className="z-10 text-2xl max-sm:text-xl font-bold text-colorSecondary font-serif">
            <span className="text-white">mute</span> on location
          </span>
        </h1>
        <ul className="flex gap-6 text-colorSecondary ml-auto">
          <li className="max-sm:hidden">
            <a href="/privacy-policy">Policy policy</a>
          </li>
          <li className="max-sm:hidden">
            <a href="/terms-of-use">Terms of Use</a>
          </li>
          <li>
            <a
              className="border-colorSecondary border max-sm:px-2 max-sm:py-1.5 px-4 hover:text-white transition-all
              capitalize hover:bg-colorSecondary py-3"
              href="https://jpctwxmsfbarwyzy.public.blob.vercel-storage.com/app-release-fObSevn4Ysw5dPMMpqxBkgLgoBIz5L.apk"
            >
              Download
            </a>
          </li>
        </ul>
      </nav>
      <div className="relative -z-20 w-[80%]">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob"></div>

        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

        <div className="absolute -bottom-8 left-2 w-72 h-72 bg-pink-300 rounded-full opacity-70 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <main className="flex flex-col items-center justify-center p-6 sm:p-8 text-center">
        <div className="w-full max-w-lg mb-6 sm:mb-8">
          <Image
            src="/hero-image.png"
            alt="hero image"
            width={350}
            height={400}
            className="mx-auto rounded-lg"
          />
        </div>
        <div className="w-full max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-colorSecondary mb-4 sm:mb-6">
            A powerful app for managing ringer state
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto px-4">
            Effortless Notification Control, Mute Distractions, Stay Focused,
            Your Personalized Quiet Zones, Automatically
          </p>
        </div>
      </main>
      <div className="flex justify-center items-center gap-7">
        <a
          className="bg-colorSecondary text-white max-sm:px-2 max-sm:py-1.5 px-4
              capitalize py-3"
          href="https://jpctwxmsfbarwyzy.public.blob.vercel-storage.com/app-release-fObSevn4Ysw5dPMMpqxBkgLgoBIz5L.apk"
        >
          <TfiDownload size={18} className="inline" /> download now
        </a>
        <span className="text-colorSecondary uppercase">
          <IoLogoAndroid className="inline mr-1" size={22} />
          APK 6.8MB
        </span>
      </div>
      <p className="text-center py-5">2 Downloads</p>

      <Features />
      <Footer />
    </div>
  );
}
