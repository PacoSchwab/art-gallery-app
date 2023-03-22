import Navigation from "../Navigation/Navigation";
import styled from "styled-components";

const StyledLayout = styled.div`
  background-color: hotpink;
`;

export default function Layout({ children }) {
  return (
    <StyledLayout>
      {children}
      <Navigation />
    </StyledLayout>
  );
}
