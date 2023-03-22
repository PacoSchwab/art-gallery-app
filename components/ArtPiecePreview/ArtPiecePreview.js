import Image from "next/image";

export default function ArtPiecePreview({ src, name, artist }) {
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
