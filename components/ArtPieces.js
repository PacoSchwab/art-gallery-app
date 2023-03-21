import Image from "next/image";

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

function ArtPiecePreview({ src, name, artist }) {
  return (
    <li>
      <Image
        src={src}
        alt={name}
        width={300}
        height={200}
        style={{ borderRadius: "12px", objectFit: "cover" }}
      />
      {<p>{`"${name}" by ${artist}`}</p>}
    </li>
  );
}
