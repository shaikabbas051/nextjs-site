import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
const data = [
  "https://c4.wallpaperflare.com/wallpaper/449/327/810/venom-movie-venom-hd-4k-wallpaper-preview.jpg",
  "https://c4.wallpaperflare.com/wallpaper/1006/739/769/marvel-comics-wakanda-artwork-wallpaper-thumb.jpg",
  "https://c4.wallpaperflare.com/wallpaper/883/305/230/movie-you-were-never-really-here-joaquin-phoenix-wallpaper-thumb.jpg",
  "https://c4.wallpaperflare.com/wallpaper/222/410/453/comics-ghost-rider-bike-chain-fire-hd-wallpaper-thumb.jpg",
  "https://c4.wallpaperflare.com/wallpaper/538/47/579/marvel-comics-comics-guardians-of-the-galaxy-marvel-cinematic-universe-wallpaper-thumb.jpg",
  "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg",
];
export default function About() {
  return (
    <div
      className="px-10 py-20 flex justify-center flex-col items-center"
      style={{ position: "relative" }}
    >
      {data.map((item, idx) => (
        <div style={{ position: "relative" }} className="mb-6">
          <Image
            height={600}
            width={1080}
            key={idx}
            //   placeholder="blur"
            // layout="responsive"
            src={item}
          />
        </div>
      ))}
    </div>
  );
}
