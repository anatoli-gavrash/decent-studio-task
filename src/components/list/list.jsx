import {useEffect, useState} from 'react';
import {Container, Grid} from '@mui/material';
import {Link} from 'react-router-dom';
import {fetchData, stringToCharCode} from '../../utils';
import Error404 from '../error404/error404';
import styles from './list.module.css';

const List = () => {
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState(null);

  useEffect(() => {
    if (!countries) {
      fetchData('https://restcountries.com/v3.1/all?fields=name,flags')
        .then((data) => {
          setError(data[0]);
          setCountries(data[1]);
        });
    }
  }, []);

  return (
    <Container className={styles.list}>
      <h1 className={styles.title}>List of Countries</h1>
      <Grid className={styles.grid} container spacing={2} justifyContent={'center'}>
        {countries
          ? countries.map((country) => {
              return (
                <Grid className={styles.item} item xs={12} sm={10} md={6} lg={4} key={stringToCharCode(country.name.common)}>
                  <Link className={styles.link} to={`/${country.name.common.toLowerCase()}`}>
                    <img className={styles.flag} src={country.flags.png} alt={country.flags.alt || ''} />
                    <h3 className={styles.countryTitle}>{country.name.common}</h3>
                  </Link>
                </Grid>
              );
            })
          : error && <Error404 />
        }
      </Grid>
    </Container>
  );
};

export default List;
