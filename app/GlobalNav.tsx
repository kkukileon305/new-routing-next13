import Link from 'next/link';
import { CategoriesResponse } from '../interface';
import styles from './GlobalNav.module.css';

const getCategories = async (): Promise<CategoriesResponse> => {
  const res = await fetch('https://dummyjson.com/products/categories');

  return res.json();
};

export default async function GlobalNav() {
  const categories = await getCategories();

  return (
    <nav className={styles.globalNav}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Link href={'/'}>Go Home</Link>
        </h1>

        <ul className={styles.uList}>
          {categories.map(category => (
            <li key={category}>
              <Link href={category} className={styles.link}>
                {category[0].toUpperCase()}
                {category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
