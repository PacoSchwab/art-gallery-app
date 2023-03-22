import Image from "next/image";
import Link from "next/link";
export default function ArtPiecePreview({ src, name, artist, slug }) {
  console.log(slug);
  return (
    <li>
      <Image
        src={src}
        alt={name}
        width={300}
        height={200}
        style={{ borderRadius: "12px", objectFit: "cover" }}
      />
      <Link href={`/art-pieces/${slug}`}>{name}</Link>
      {<p>{`"${name}" by ${artist}`}</p>}
    </li>
  );
}
