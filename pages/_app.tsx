import { useEffect } from "react";
import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { App as CapacitorApp, BackButtonListenerEvent } from "@capacitor/app";

const App = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();
    useEffect(() => {
        CapacitorApp.addListener(
            "backButton",
            (evt: BackButtonListenerEvent) => {
                if (router.pathname === "/") {
                    CapacitorApp.exitApp();
                } else {
                    router.back();
                }
            }
        );

        return () => {
            CapacitorApp.removeAllListeners();
        };
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <link rel="manifest" href="manifest.json" />
                <link
                    rel="apple-touch-icon"
                    sizes="192x192"
                    href="icons/icon-192x192.png"
                />

                <meta name="theme-color" content="#1976d2" />
                <meta
                    name="viewport"
                    content="initial-scale=1, width=device-width"
                />
            </Head>

            <Component {...pageProps} />
        </>
    );
};

export default App;
