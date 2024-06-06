import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import './App.css';
import Currency from './Content/Currency';
import Language from './Content/Language';
import Region from './Content/Region';
import Card from './Content/Card';
import Empty from './Content/Empty';

const API_BASE_URL = 'https://restcountries.com/v3.1';

interface Country {
  cca3: string;
  name: {
    common: string;
  };
  population: number;
  region: string;
  capital: string[];
  currencies?: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  languages?: {
    [key: string]: string;
  };
  flags: {
    png: string;
    svg: string;
  };
}

export const App = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    name: '',
    currency: '',
    language: '',
    region: ''
  });

  useEffect(() => {
    const fetchCountries = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/all`);
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const applyFilters = () => {
      let filteredData: Country[] = countries;

      if (filters.name) {
        filteredData = filteredData.filter(country =>
          country.name.common.toLowerCase().includes(filters.name.toLowerCase())
        );
      }

      if (filters.currency) {
        filteredData = filteredData.filter(country =>
          country.currencies && Object.keys(country.currencies).includes(filters.currency)
        );
      }

      if (filters.language) {
        filteredData = filteredData.filter(country =>
          country.languages && Object.keys(country.languages).includes(filters.language)
        );
      }

      if (filters.region) {
        filteredData = filteredData.filter(country =>
          country.region.toLowerCase() === filters.region.toLowerCase()
        );
      }

      setFilteredCountries(filteredData);
    };

    applyFilters();
  }, [filters, countries]);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const clearFilters = () => {
    setFilters({
      name: '',
      currency: '',
      language: '',
      region: ''
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
      </header>
      <nav>
        <input
          placeholder="Search..."
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <Currency
          name="currency"
          value={filters.currency}
          onChange={handleFilterChange}
        />
        <Language
          name="language"
          value={filters.language}
          onChange={handleFilterChange}
        />
        <Region
          name="region"
          value={filters.region}
          onChange={handleFilterChange}
        />
      </nav>
      {loading ? (
        <div>Loading...</div>
      ) : filteredCountries.length === 0 ? (
        <Empty clearFilters={clearFilters} />
      ) : (
        <div className="cardDiv">
          {filteredCountries.map((country, index) => {
            const currencyKey = country.currencies ? Object.keys(country.currencies)[0] : '';
            const currencyName = currencyKey;
            const capital = country.capital ? country.capital[0] : 'Unknown';

            return (
              <Card
                key={index}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={capital}
                currency={currencyName}
                flagUrl={country.flags.png}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
