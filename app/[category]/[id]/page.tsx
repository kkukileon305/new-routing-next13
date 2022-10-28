import { Product } from '../../../interface';
import styles from './page.module.css';

const getProduct = async (id: number): Promise<Product | void> => {
  if (!isNaN(id)) {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    return res.json();
  }
};

export default async function Detail({ params }: { params: { id: string } }) {
  const detail = await getProduct(Number(params.id));

  if (!detail) {
    return <div>No product</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>{detail.title}</h2>
      <p className={styles.price}>{detail.price}</p>
    </div>
  );
}
