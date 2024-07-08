// pages/country/[id].tsx
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../../requetes/queries/country.queries';
import { Country } from '../../types/country';


const CountryDetails = () => {
  const router = useRouter();
  const { code } = router.query; 

  if (!code) {
    return <p>Code not provided</p>;
  }

  const { data, loading, error } = useQuery<{ country: Country }>(GET_COUNTRY, {
    variables: { code: code as string }, 
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data?.country;

  return (
    <div className="country-details">
      {country ? (
        <div>
          <h1>Country</h1>
          <p>{country.name} ({country.code})</p>
          <p>Emoji: {country.emoji}</p>
          
          {country.continent && <p>Continent: {country.continent.name}</p>}
         
        </div>
      ) : (
        <p>Country not found</p>
      )}
    </div>
  );
};

export default CountryDetails;
