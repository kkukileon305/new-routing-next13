import Skeleton from '../ui/Skeleton';

export default function GlobalLoading() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '20rem', padding: '20px', borderRight: '1px solid gray' }}>
        <Skeleton style={{ height: '2.5rem', marginTop: '1rem', marginBottom: '2rem', width: '15rem' }} />
        {[4, 4.4, 3, 5, 5.5].map(e => (
          <Skeleton key={e} style={{ marginBottom: '2rem', width: `${e * 2}rem` }} />
        ))}
      </div>
      <div style={{ padding: '20px' }}>
        <Skeleton style={{ height: '2.5rem', marginTop: '1rem', marginBottom: '2rem', width: '15rem' }} />
        <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '40rem' }} />
        <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '30rem' }} />
        <Skeleton style={{ marginTop: '1rem', marginBottom: '1rem', width: '34rem' }} />
      </div>
    </div>
  );
}
