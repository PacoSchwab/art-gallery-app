import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function ArtPiecesPage({
  pieces,
  onToggleFavorite,
  artPiecesInfo,
}) {
  return (
    <>
      <ArtPieces
        pieces={pieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
