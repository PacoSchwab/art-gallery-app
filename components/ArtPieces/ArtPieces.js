import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log("pieces", pieces);

  return (
    <ul>
      {pieces.map((piece) => {
        return (
          <ArtPiecePreview
            key={piece.slug}
            src={piece.imageSource}
            name={piece.name}
            artist={piece.artist}
          />
        );
      })}
    </ul>
  );
}
