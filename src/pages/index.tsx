import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <title>lttstore.com feed</title>
        <meta
          name="description"
          content="A feed of products from lttstore.com"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div />
      <main className="flex flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-6xl font-bold uppercase">lttstore.com Feed</h1>
          <a
            href="https://lttstorefeed.vercel.app/api/feed"
            className="uppercase underline"
          >
            All Products Feed
          </a>
        </div>
      </main>
      <footer className=" flex flex-col items-center justify-center">
        <div className="flex flex-col items-center">
          <p>Made with ❤️</p>
          <p>
            This app and RSS feed is not affiliated with or endorsed by Linus
            Media Group Inc., Creator Warehouse Inc., or Floatplane Inc. All
            content and trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
