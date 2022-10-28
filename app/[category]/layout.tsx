import { ReactNode } from 'react';
import CategoryNav from './CategoryNav';
import styles from './layout.module.css';

export default function CategoryLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: {
    category: string;
  };
}) {
  return (
    <div className={styles.container}>
      <CategoryNav category={params.category} />
      <section>{children}</section>
    </div>
  );
}
