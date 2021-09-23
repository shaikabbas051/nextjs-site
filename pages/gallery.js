import Carousel from "../Components/Carousel";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function About() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getInitialData();
  }, []);

  async function getInitialData() {
    console.log("pro", process.env.BASE_URL);
    const res = await fetch(`${process.env.BASE_URL}/gallery`);
    const json = await res.json();
    console.log(json.data);
    setImages(json.data);
  }
  return (
    <div>
      {/* <Carousel slides={data} /> */}
      <div
        className="px-10 pt-20 flex justify-center flex-col items-center"
        style={{ position: "relative" }}
      >
        {images.map((item, idx) => (
          <div style={{ position: "relative" }} className="mb-6" key={item._id}>
            <Image
              height={600}
              width={1080}
              //   placeholder="blur"
              // layout="responsive"
              objectFit="contain"
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
            />
          </div>
        ))}
      </div>
      <div className="text-center mb-10 ">
        <div className="bg-black inline-block text-white px-5 py-3 rounded">
          <Link href={"/testimonials"}>
            <h3 className="link">See Testimonials</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
