import {useEffect, useState} from 'react';
import {Box} from '@mui/material';
import {useParams} from 'react-router-dom';
import {fetchData} from '../../utils';
import styles from './country.module.css';
import Error404 from '../error404/error404';

const Country = () => {
  const [error, setError] = useState(null);
  const [country, setCountry] = useState(null);
  const {name} = useParams();

  useEffect(() => {
    if (!country) {
      fetchData(`https://restcountries.com/v3.1/name/${name}`)
        .then((data) => {
          setError(data[0]);
          setCountry(data[1][0]);
        });
    }
  }, []);

  const currenciesStringify = (currencies) => {
    return Object.entries(currencies)
      .map(([, currency]) => `${currency.name} (${currency.symbol})`)
      .join(', ');
  }
  
  return (
    country
      ? <Box className={styles.country}
          maxWidth="1200px"
          display="flex"
          alignItems="center"
          gap={5}
          p={2}
        >
          <img className={styles.flag} src={country.flags.svg} alt={country.flags.alt || ''} />
          <Box className={styles.countryInfo}
            display="flex"
            flexDirection="column"
            rowGap={1}
          >
            <h1 className={styles.title}>{country.name.official}</h1>
            <p className={styles.details}><span>Capital: </span>{country.capital.join(', ')}</p>
            <p className={styles.details}><span>Currencies: </span>{currenciesStringify(country.currencies)}</p>
            <p className={styles.details}><span>Time Zone: </span>{country.timezones.join(', ')}</p>
          </Box>
        </Box>
      : error && <Error404 />
  );
};

export default Country;