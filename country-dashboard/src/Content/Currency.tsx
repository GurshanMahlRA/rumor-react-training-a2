import currencies from '../data/currency-codes.json';

const optionsArray = Object.entries(currencies).map(([key, value]) => ({ key, value }));

export const Currency = () => {
    return (
        <select> 
          {optionsArray.map((item, index) => (
              <option key={index} value={item.key}>
                {item.value}
              </option>
            ))}
      </select>
    );
  }
  
  export default Currency;