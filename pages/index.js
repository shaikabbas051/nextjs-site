import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Home(props) {
  const updatedList = props.data.slice(0, 15);
  return (
    <div>
      <div className="px-10 py-6 font-semibold text-xl">Favourites</div>
      <div
        className="grid gap-8 px-10 "
        style={{
          maxWidth: "100vw",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "repeat(3, 250px)",
        }}
      >
        {updatedList.map((item) => (
          <Card key={item.imdbID} movie={item} />
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{``}</style>
    </div>
  );
}
const Card = (props) => {
  const { movie } = props;
  return (
    <div className="text-white h-30" style={{ backgroundColor: "#24272c" }}>
      <div
        style={{ width: "100%", height: "80%", position: "relative" }}
        className="img-cont"
      >
        <Image
          src={movie.Poster}
          layout="fill"
          objectFit={"cover"}
          // style={{
          //   objectFit: "contain",
          //   width: "100% !important",
          //   position: "relative !important",
          //   height: "unset",
          // }}
        />
      </div>
      <div className="px-3 pt-2">
        {movie.Title} ({movie.Year})
      </div>
      <style>
        {`
          
        `}
      </style>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3800/api/favourites");
  const json = await res.json();
  return { props: { data: json.data } };
}
