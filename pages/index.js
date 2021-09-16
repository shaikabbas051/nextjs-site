import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
export default function Home(props) {
  const updatedList = props.data.slice(0, 15);
  return (
    <div>
      <div className="px-10 py-6 font-semibold text-xl">Favourites</div>
      <div className="grid gap-8 px-10 fav-wrapper">
        {updatedList.map((item) => (
          <Card key={item.imdbID} movie={item} />
        ))}
      </div>

      <style jsx>{`
        .fav-wrapper {
          max-width: 100vw;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 250px;
        }
        @media (max-width: 992px) {
          .fav-wrapper {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 768px) {
          .fav-wrapper {
            grid-template-columns: repeat(2, 1fr);
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
  const res = await fetch(`${process.env.BASE_URL}/favourites`);
  const json = await res.json();
  return { props: { data: json.data } };
}
