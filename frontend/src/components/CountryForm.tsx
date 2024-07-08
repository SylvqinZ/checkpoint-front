import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../requetes/queries/country.queries";
import { ADD_COUNTRY } from "../requetes/mutations/country.mutations";
import { GET_CONTINENTS } from "../requetes/queries/continent.queries";

const CountryForm = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [continent, setContinent] = useState("");

  const { loading, error, data } = useQuery(GET_CONTINENTS);

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addCountry({
        variables: { name, emoji, code, continent: parseInt(continent)}, 
      });
      setName("");
      setEmoji("");
      setCode("");
      setContinent("");
    } catch (error) {
      console.error("Error adding country:", error);
     
    }
  };

  if (loading) return <p>Loading continents...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="emoji">Emoji</label>
        <input
          type="text"
          id="emoji"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="continent">Continent</label>
        <select
          id="continent"
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
          required
        >
          <option value="">Select a continent</option>
          {data.continents.map((continent: any) => (
            <option key={continent.id} value={continent.id}>
              {continent.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default CountryForm;
