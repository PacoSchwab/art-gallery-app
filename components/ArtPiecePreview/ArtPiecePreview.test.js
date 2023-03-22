import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ArtPiecePreview from "./ArtPiecePreview";

test("All art pieces are displayed as a list", () => {
  render(
    <ArtPiecePreview
      name="Der grüne Paco"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Franz_Marc_Blaues_Pferd_1911.jpg/800px-Franz_Marc_Blaues_Pferd_1911.jpg"
      artist="Donna Ella"
    />
  );
  const artPiece = screen.getByText(/Der grüne Paco/i);
  expect(artPiece).toBeInTheDocument();

  const artImage = screen.getByRole("img", { name: /Der grüne Paco/i });
  expect(artImage).toBeInTheDocument();

  const artArtist = screen.getByText(/Donna Ella/i);
  expect(artArtist).toBeInTheDocument();
});

/* expect(artImage).toContain(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Franz_Marc_Blaues_Pferd_1911.jpg/800px-Franz_Marc_Blaues_Pferd_1911.jpg"
  ); */

/* import { render } from '@testing-library/react';
import { ImageComponent } from './';

describe('The image component', () => {
  test('alt contains correct value', () => {
    render(<ImageComponent size="large"/>)
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("The image alt tag for the large image");
  })

  test('src contains correct value', () => {
    render(<ImageComponent size="large"/>)
    const testImage = document.querySelector("img") as HTMLImageElement;
    expect(testImage.alt).toContain("https://www.example.com/image-large.png");
  })
}); */
