import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "../components/Layout/Layout";
import useLocalStorageState from "use-local-storage-state";

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
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: [] }
  );

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  function handleToggleFavorite(slug) {
    setArtPiecesInfo((artPiecesInfo) => {
      const info = artPiecesInfo.find(
        (artPieceInfo) => artPieceInfo.slug === slug
      );

      if (info) {
        return artPiecesInfo.map((artPieceInfo) =>
          artPieceInfo.slug === slug
            ? { ...artPieceInfo, isFavorite: !artPieceInfo.isFavorite }
            : artPieceInfo
        );
      }
      return [...artPiecesInfo, { slug, isFavorite: true }];
    });
  }
  console.log("1", artPiecesInfo);
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pieces={data}
          artPiecesInfo={artPiecesInfo}
          onToggleFavorite={handleToggleFavorite}
        />
      </Layout>
    </>
  );
}
