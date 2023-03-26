import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails/ArtPieceDetails";

export default function ArtPieceDetailsPage({
  pieces,
  artPiecesInfo,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentArtPiece = pieces.find((piece) => {
    return piece.slug === slug;
  });
  console.log("Test123", slug);
  console.log(currentArtPiece);
  /* const { imageSource, artist, year, genre, name, colors, slug } = currentArtPiece; */
  /* console.log("HIERIST", imageSource, artist, year, genre, name, colors); */
  return (
    <ArtPieceDetails
      /*   image={imageSource}
      title={name}
      artist={artist}
      year={year}
      genre={genre}
      colors={colors} */
      onToggleFavorite={onToggleFavorite}
      currentArtPiece={currentArtPiece}
      artPiecesInfo={artPiecesInfo}
    />
  );
}
