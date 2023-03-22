import useSWR from "swr";
import ArtPieces from "../components/ArtPieces/ArtPieces";

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `https://example-apis.vercel.app/api/art`
  );
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log("data", data);
  return (
    <>
      <ArtPieces pieces={data} />
    </>
  );
}
