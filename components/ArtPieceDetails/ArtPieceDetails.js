import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPieceDetails({
  onToggleFavorite,
  currentArtPiece,
  artPiecesInfo,
}) {
  const { imageSource, artist, year, genre, name, colors, slug } =
    currentArtPiece;

  return (
    <>
      <button>
        <Link href={"/art-pieces"}> Display all images</Link>
      </button>
      <Image
        src={imageSource}
        alt={name}
        width={300}
        height={200}
        style={{ borderRadius: "12px", objectFit: "scale-down" }}
      />
      <FavoriteButton
        onToggleFavorite={onToggleFavorite}
        slug={slug}
        artPiecesInfo={artPiecesInfo}
      />
      <h1>{name}</h1>
      <div>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </>
  );
}
