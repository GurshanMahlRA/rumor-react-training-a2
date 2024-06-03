import './App.css';
import countries from './data/countries.json';
import Currency from './Content/Currency';
import Language from './Content/Language';
import Region from './Content/Region';
import Card from './Content/Card';
import Empty from './Content/Empty';

let test =0;

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Countries</h1>
      </header>
      <nav>
        <input placeholder="Search..." />
        <Currency />
        <Language />
        <Region />
      </nav>
      {countries.length === 0 ? (
          <Empty />
      ) : (
        <div className="cardDiv">
          {countries.map((country, index) => {
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
