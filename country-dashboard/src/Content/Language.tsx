import languages from  '../data/language-codes.json';

const optionsArray = Object.entries(languages).map(([key, value]) => ({ key, value }));

export const Language = () => {
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
  
  export default Language;