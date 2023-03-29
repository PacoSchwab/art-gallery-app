import ArtPieces from "../components/ArtPieces/ArtPieces";
import { useState } from "react";

export default function Favorites({ pieces, onToggleFavorite, artPiecesInfo }) {
  const favoriteArtPiecesSlugs = artPiecesInfo
    .filter((artPieceInfo) => {
      return artPieceInfo.isFavorite === true;
    })
    .map((artPieceInfo) => {
      return artPieceInfo.slug;
    });

  const filteredArtPieces = pieces.filter((piece) => {
    return favoriteArtPiecesSlugs.includes(piece.slug);
  });

  console.log("filterdArtPieces", filteredArtPieces);
  return (
    <>
      <ArtPieces
        pieces={filteredArtPieces}
        onToggleFavorite={onToggleFavorite}
        artPiecesInfo={artPiecesInfo}
      />
    </>
  );
}
