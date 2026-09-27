import { qaConfig } from './config/qa.config';
import { uatConfig } from './config/uat.config';
import { sitConfig } from './config/sit.config';

type Config = {
    baseURL: string;
    username: string;
    password: string;
    productName: string;
};

const env = process.env.ENV || 'qa';
let testConfig: Config;

switch (env) {
    case 'qa':
        testConfig = qaConfig;
        break;
    case 'uat':
        testConfig = uatConfig;
        break;
    case 'sit':
        testConfig = sitConfig;
        break;
    default:
        throw new Error(`Invalid environment: ${env}`);
}
export { testConfig };

//Adding some changes
//Second change