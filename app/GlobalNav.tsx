import Link from 'next/link';
import styles from './GlobalNav.module.css';

interface NavItem {
  url: string;
  title: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Products',
    url: '/products',
  },
];

export default function GlobalNav() {
  return (
    <nav className={styles.globalNav}>
      <div className={styles.container}>
        <h1 className={styles.title}>This is Global Nav.</h1>

        <ul className={styles.uList}>
          {navItems.map(navItem => (
            <li key={navItem.title}>
              <Link className={styles.link} href={navItem.url}>
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
