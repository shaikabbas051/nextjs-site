import Image from "next/image";
export default function Home(props) {
  const updatedList = props.data;
  return (
    <div>
      <div className="px-10 py-6 font-semibold text-xl">Favourites</div>
      <div className="grid gap-8 px-10 fav-wrapper pb-6">
        {updatedList.map((item) => (
          <Card key={item._id} movie={item} />
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
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
        {movie.title} ({movie.release_date})
      </div>
      <style>
        {`
          
        `}
      </style>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await fetch(`${process.env.DEV_URL}/api/favourites`);
  const json = await res.json();
  return { props: { data: json.data } };
}
