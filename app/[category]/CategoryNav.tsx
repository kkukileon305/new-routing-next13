import Link from 'next/link';
import { ProductsResponse } from '../../interface';
import styles from './CategoryNav.module.css';

const getProductsByCategory = async (category: string): Promise<ProductsResponse> => {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  return res.json();
};

interface CategoryNavProps {
  category: string;
}

export default async function CategoryNav({ category }: CategoryNavProps) {
  const { products } = await getProductsByCategory(category);

  return (
    <nav className={styles.container}>
      <h3 className={styles.title}>
        <Link href={`/${category}`}>
          {category[0].toUpperCase()}
          {category.slice(1)}
        </Link>
      </h3>

      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link className={styles.link} href={`/${category}/${product.id}`}>
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
