import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function ArtPiecePreview({
  src,
  name,
  artist,
  slug,
  onToggleFavorite,
}) {
  /* console.log(slug); */
  return (
    <li>
      <Link href={`/art-pieces/${slug}`}>
        <Image
          src={src}
          alt={name}
          width={300}
          height={200}
          style={{ borderRadius: "12px", objectFit: "cover" }}
        />
      </Link>
      <FavoriteButton onToggleFavorite={onToggleFavorite} slug={slug} />
      <br />
      <Link href={`/art-pieces/${slug}`}>{`"${name}"`}</Link>
      <span>{` by ${artist}`}</span>
    </li>
  );
}
