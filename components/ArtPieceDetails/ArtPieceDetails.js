import Image from "next/image";
import Link from "next/link";

export default function ArtPieceDetails({
  image,
  title,
  artist,
  year,
  genre,
  colors,
}) {
  console.log(image);
  return (
    <>
      <button>
        <Link href={"/art-pieces"}> Display all images</Link>
      </button>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        style={{ borderRadius: "12px", objectFit: "scale-down" }}
      />
      <h1>{title}</h1>
      <div>
        <p>Artist: {artist}</p>
        <p>Year: {year}</p>
        <p>Genre: {genre}</p>
      </div>
    </>
  );
}
