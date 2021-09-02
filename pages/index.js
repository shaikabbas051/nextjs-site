import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  const updatedList = props.data.slice(0, 15);
  return (
    <div className="container">
      <header className="">
        <div className="flex h-16 justify-center items-center gap-4 border-b-1 border-black">
          <Link href={"/profile"} className="card">
            <h3 className="card">Profile</h3>
          </Link>

          <Link
            href={{
              pathname: "/about",
              query: { name: "test" },
            }}
            className="card"
          >
            <h3 className="card">About</h3>
          </Link>
        </div>
      </header>
      <main className="p-10">
        {updatedList.map((item) => (
          <p key={item.id} className="p-2">
            {item.id}. {item.title}
          </p>
        ))}
      </main>

      <style jsx>{`
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
export async function getServerSideProps() {
  // console.log("initial");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return { data: json };
}
