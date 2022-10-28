import Skeleton from '../../ui/Skeleton';

export default function CategoryLoading() {
  return (
    <div>
      <Skeleton style={{ height: '2.5rem', marginTop: '1rem', marginBottom: '2rem', width: '15rem' }} />
      <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '40rem' }} />
      <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '30rem' }} />
      <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '34rem' }} />
    </div>
  );
}
