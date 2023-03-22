import ArtPiecePreview from "../ArtPiecePreview/ArtPiecePreview";

export default function Spotlight({ pieces }) {
  const randomIndex = Math.floor(Math.random() * pieces.length);

  const randomSpotlight = pieces[randomIndex];

  return (
    <ul>
      <ArtPiecePreview
        src={randomSpotlight.imageSource}
        name={randomSpotlight.name}
        artist={randomSpotlight.artist}
      />
    </ul>
  );
}
