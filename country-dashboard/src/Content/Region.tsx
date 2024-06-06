import React, { ChangeEvent } from 'react';
import regions from '../data/regions.json';

interface RegionProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Region: React.FC<RegionProps> = ({ name, value, onChange }) => {
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">Select Region</option>
      {regions.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Region;
