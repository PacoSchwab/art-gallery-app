import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";
import { useEffect, useState } from "react";

export default function Spotlight({ pieces, onToggleFavorite, artPiecesInfo }) {
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * pieces.length));
  }, [pieces]);

  const randomSpotlight = pieces[randomIndex];
  return (
    <ul>
      <ArtPiecePreview
        src={randomSpotlight.imageSource}
        name={randomSpotlight.name}
        artist={randomSpotlight.artist}
        slug={randomSpotlight.slug}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </ul>
  );
}
