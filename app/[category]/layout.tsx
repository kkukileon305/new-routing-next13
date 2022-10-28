import { ReactNode } from 'react';
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
      <h3>Category layout</h3>
      <section>{children}</section>
    </div>
  );
}
