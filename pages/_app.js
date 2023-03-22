import GlobalStyle from "../styles";
import { SWRConfig } from "swr";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import { useState } from "react";

const fetcher = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  console.log("data", data);

  const [artPiecesInfo, setArtPiecesInfo] = useState(data);

  function handleToggleFavorite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPieceInfo) =>
        slug === artPieceInfo.slug
          ? {
              ...artPieceInfo,
              isFavorite: !artPieceInfo.isFavorite,
            }
          : artPieceInfo
      )
    );
  }

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
