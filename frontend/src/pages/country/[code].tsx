// pages/country/[id].tsx
import { useRouter } from "next/router";
import { useGetCountryQuery } from "@/graphql/generated/schema";

const CountryDetails = () => {
  const router = useRouter();
  const { code } = router.query;

  if (!code) {
    return <p>Code not provided</p>;
  }

  const { data, loading, error } = useGetCountryQuery({
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
          <p>
            {country.name} ({country.code})
          </p>
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
