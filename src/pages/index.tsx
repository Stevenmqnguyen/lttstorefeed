import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="flex h-screen flex-col justify-between bg-black">
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
        {/* <div className="container flex flex-col items-center"> */}
        <div className="flex flex-col  gap-5 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-400 via-fuchsia-600 to-rose-600 bg-clip-text text-transparent">
          <h1 className="text-6xl font-extrabold uppercase">
            <a href="https://lttstore.com">lttstore.com</a> Feed
          </h1>
          {/* <p className="bg-gradient-to-l from-teal-800 via-fuchsia-500 to-rose-600 bg-clip-text text-xl font-extrabold uppercase text-transparent">
            All Products Feed
          </p> */}
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <p className="text-xl font-bold uppercase text-transparent">
              All Products Feed
            </p>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <p className="text-xl font-extrabold uppercase text-transparent">
              Gear Products Feed
            </p>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <p className="text-xl font-extrabold uppercase text-transparent">
              Clothing Products Feed
            </p>
          </a>
          <a href="https://lttstorefeed.vercel.app/api/feed">
            <p className="text-xl font-extrabold uppercase text-transparent">
              The Newsletter Feed
            </p>
          </a>
        </div>
        {/* </div> */}
      </main>
      <footer className=" flex flex-col items-center justify-center">
        <div className="flex flex-col items-center text-xs text-white">
          <p>Made with ❤️</p>
          <p>
            This app is not affiliated with or endorsed by Linus Media Group
            Inc., Creator Warehouse Inc., or Floatplane Inc. All content and
            trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
