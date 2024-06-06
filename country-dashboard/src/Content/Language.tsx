import React, { ChangeEvent } from 'react';
import languages from '../data/language-codes.json';

const optionsArray = Object.entries(languages).map(([key, value]) => ({ key, value }));

interface LanguageProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Language: React.FC<LanguageProps> = ({ name, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">Select Language</option>
      {optionsArray.map((item, index) => (
        <option key={index} value={item.key}>
          {item.value}
        </option>
      ))}
    </select>
  );
};

export default Language;
