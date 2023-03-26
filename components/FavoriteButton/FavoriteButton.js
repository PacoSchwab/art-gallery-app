import Heart from "../../public/icons/Heart";
import styled from "styled-components";
import React from "react";

const HeartButton = styled.button`
  background-color: transparent;
  border-radius: 20%;
  border-style: dotted;
  border-color: blue;
  cursor: pointer;
`;

export default function FavoriteButton({
  onToggleFavorite,
  slug,
  artPiecesInfo,
}) {
  const clickedArtPieceInfo = artPiecesInfo.find(
    (artPieceInfo) => artPieceInfo.slug === slug
  ) ?? {
    isFavorite: false,
  };
  const isFavorite = clickedArtPieceInfo.isFavorite;
  console.log("clickedArtPieceInfo", clickedArtPieceInfo);
  console.log("isFavorite", isFavorite);
  return (
    <>
      <HeartButton
        onClick={() => {
          onToggleFavorite(slug);
        }}
      >
        <Heart fill={isFavorite ? "green" : "transparent"} />
      </HeartButton>
    </>
  );
}
