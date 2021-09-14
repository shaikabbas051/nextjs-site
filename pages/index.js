import Head from "next/head";
import Link from "next/link";

export default function Home(props) {
  const updatedList = props.data.slice(0, 15);
  return (
    <div>
      <ul className="list-disc">
        {updatedList.map((item) => (
          <li key={item.id} className="p-2">
            {item.title}
          </li>
        ))}
      </ul>

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
export async function getServerSideProps() {
  // console.log("initial");
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const json = await res.json();
  return { props: { data: json } };
}
