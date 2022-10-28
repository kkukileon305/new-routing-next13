export default function CategoryPage({ params }: { params: { category: string } }) {
  return (
    <div>
      <h2 style={{ color: 'rgb(107, 169, 216)' }}>
        Choose your{' '}
        <span style={{ textDecoration: 'underline' }}>
          {params.category[0].toUpperCase()}
          {params.category.slice(1)}
        </span>
      </h2>
    </div>
  );
}
