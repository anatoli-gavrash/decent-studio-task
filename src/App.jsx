import {Outlet} from 'react-router-dom';
import {Box} from '@mui/material';
import styles from './App.module.css';

function App() {
  return (
    <Box className={styles.app}
      height="100%"
      display="flex"
      justifyContent="center"
      p={5}
      py={10}
    >
      <Outlet />
    </Box>
  );
}

export default App;
