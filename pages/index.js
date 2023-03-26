import Link from "next/link";
import Spotlight from "../components/Spotlight/Spotlight";

export default function SpotlightPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <Spotlight
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
