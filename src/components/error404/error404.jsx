import {Box} from '@mui/material';
import {Link} from 'react-router-dom';
import styles from './error404.module.css';

const Error404 = () => {
  return (
    <Box className={styles.error}
      component="section"
      height="100%"
      width="100%"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
    >
      <p className={styles.text}>404</p>
      <h1 className={styles.title}>Запрашиваемая страница не найдена</h1>
      <Link className={styles.link} to='/'>Вернуться на главную</Link>
    </Box>
  );
};

export default Error404;
