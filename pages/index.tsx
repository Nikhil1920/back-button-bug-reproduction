import type { NextPage } from "next";
import Head from "next/head";
import NextLink from "next/link";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Home</title>
            </Head>

            <NextLink href="/page-2" passHref>
                <h1>Link to page 2</h1>
            </NextLink>
        </>
    );
};

export default Home;
