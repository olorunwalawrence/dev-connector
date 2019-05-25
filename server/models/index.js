import { Pool } from 'pg';
import dotenv from 'dotenv';

import config from '../config/config';

dotenv.config();

const print = console;

/*= ================================================================
        DESCTRUCTURE THE CONFIGS FROM THE IMPORTED CONFIGURATION
=================================================================== */

const { development, production } = config;

/*= ================================================================
        SET UP NEW INSTANCE OF POOL   [THIS RETURN A PROMISE]
=================================================================== */
const pool = new Pool(development);

/*= ================================================================
       SETUP THE CONNECTION
=================================================================== */
pool.connect().then(() => {
  print.log('Database connected');
}).catch((err) => {
  print.log(err.message);
});

export default pool;
