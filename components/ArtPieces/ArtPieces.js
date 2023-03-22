import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function ArtPieces({ pieces }) {
  console.log("pieces", pieces);

  const randomIndex = Math.floor(Math.random() * pieces.length);

  const randomSpotlight = pieces[randomIndex];

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