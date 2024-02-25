import axios from 'axios';
import env_config from '../../env.config';

const request = axios.create({ baseURL: env_config.api_url });

export { request };
