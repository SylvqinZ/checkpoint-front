import { useQuery } from '@apollo/client';
import { GET_COUNTRIES } from '../requetes/queries/country.queries';
import CountryForm from '../components/CountryForm';
import CountryList from '../components/CountryList';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Country } from '../types/country.d';

const Home = () => {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>Checkpoint: frontend</title>
        <meta name="description" content="Country listing app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Checkpoint : frontend</h1>
        <h2 className={styles.subtitle}>Countries</h2>
        <CountryForm />
        {data && data.countries ? (
          <CountryList countries={data.countries} />
        ) : (
          <p>No countries available</p>
        )}
      </main>
    </div>
  );
};

export default Home;

