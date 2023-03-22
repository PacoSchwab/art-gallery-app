import Image from "next/image";

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
