import React, { ChangeEvent } from 'react';
import currencies from '../data/currency-codes.json';

const optionsArray = Object.entries(currencies).map(([key, value]) => ({ key, value }));

interface CurrencyProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Currency: React.FC<CurrencyProps> = ({ name, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">Select Currency</option>
      {optionsArray.map((item, index) => (
        <option key={index} value={item.key}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Currency;
