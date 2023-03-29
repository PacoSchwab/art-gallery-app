import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "2rem",
        }}
      >
        <li>
          <h3>
            <Link href="/">Spotlight</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/art-pieces">Art Pieces</Link>
          </h3>
        </li>
        <li>
          <h3>
            <Link href="/favorites">Favorites</Link>
          </h3>
        </li>
      </ul>
    </nav>
  );
}
