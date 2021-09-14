import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
function Layout(props) {
  return (
    <div className="">
      <Head>
        <title>Golden Bakery</title>
        <meta name="description" content="Bakery description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="flex justify-between px-20 items-center h-16">
        <Link href={"/"}>
          <div className={"text-2xl link"}>Golden Bakery</div>
        </Link>
        <div className="flex  gap-10">
          <Link href={"/profile"}>
            <h3 className="link">Profile</h3>
          </Link>
          <Link
            href={{
              pathname: "/about",
              query: { name: "test" },
            }}
          >
            <h3 className="link">About</h3>
          </Link>
        </div>
      </header>
      <main className="w-max m-auto py-20">{props.children}</main>
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
        header {
          background-color: #24272c;
          color: white;
        }
        .link:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
