import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/city/Boston">Boston</a>
          </li>
          <li>
            <a href="/city/Seoul">Seoul</a>
          </li>
          <li>
            <a href="/city/Beijing">Beijing</a>
          </li>
          <li>
            <a href="/city/Tokyo">Tokyo</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
