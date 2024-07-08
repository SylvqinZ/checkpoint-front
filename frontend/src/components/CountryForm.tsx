import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_COUNTRIES } from "../requetes/queries/country.queries";
import { ADD_COUNTRY } from "../requetes/mutations/country.mutations";

const CountryForm = () => {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [continentId, setContinentId] = useState("");

  const [addCountry] = useMutation(ADD_COUNTRY, {
    refetchQueries: [{ query: GET_COUNTRIES }],
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await addCountry({ variables: { name, emoji, code, continentId } });
    setName("");
    setEmoji("");
    setCode("");
    setContinentId("");
  };

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
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default CountryForm;
