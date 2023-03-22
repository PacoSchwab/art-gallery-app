import Heart from "../../public/icons/Heart";
import styled from "styled-components";
import React from "react";

const HeartButton = styled.button`
  background-color: transparent;
  border-radius: 20%;
  border-style: dotted;
  border-color: blue;
`;
const isFavorite = true;

export default function FavoriteButton({ onToggleFavorite, slug }) {
  return (
    <>
      <HeartButton
        onClick={() => {
          onToggleFavorite(slug);
        }}
      >
        <Heart fill={isFavorite ? "green" : none} />
      </HeartButton>
    </>
  );
}
