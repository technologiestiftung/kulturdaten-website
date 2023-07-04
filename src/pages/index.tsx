import Head from "next/head";
import Link from "../components/Link";

export default function Home() {
  return (
    <>
      <Head>
        <title>TypeScript Template</title>
        <meta name="description" content="Some description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        Hello world
        <br />
        <Link href="https://www.technologiestiftung-berlin.de/">Go somewhere else</Link>
      </main>
    </>
  );
}
