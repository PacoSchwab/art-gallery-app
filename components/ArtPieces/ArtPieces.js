import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces, onToggleFavorite, artPiecesInfo }) {
  console.log("pieces", pieces);
  console.log("2", artPiecesInfo);
  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            src={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
            slug={piece.slug}
            onToggleFavorite={onToggleFavorite}
            artPiecesInfo={artPiecesInfo}
          />
        );
      })}
    </ul>
  );
}
