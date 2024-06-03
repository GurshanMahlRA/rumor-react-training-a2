import regions from '../data/regions.json';

const regionmap = regions.map(item => <option value={item}>{item}</option> );

export const Region = () => {
    return (
        <select> 
          {regionmap}
      </select>
    );
  }
  
  export default Region;