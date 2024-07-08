import { Country } from "../types/country.d";
import Link from "next/link";

interface CountryListProps {
  countries: Country[];
}

const CountryList: React.FC<CountryListProps> = ({ countries }) => {
  console.log(countries)
  return (
    <div className="country-list">
      {countries.map((country) => (
        <Link key={country.id} href={`/country/${country.code}`} passHref>
          <div className="country-card">
            <div>{country.name}</div>
            <div>{country.emoji}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountryList;
