const mockNeswletter = require('./mocks/mockNewsletter.json');
const mockCarte = require('./mocks/mockCarte.json');
const mockEvenements = require('./mocks/mockEvenements.json');
const mockTrending = require('./mocks/mockTrending.json');

const prod = 'https://kraken.picasso-utc.fr/api';
const dev = 'https://kraken-dev.picasso-utc.fr/api';
const local = 'https://127.0.0.1:8000/api';

const checkEnv = (env) => {
    switch (env) {
        case 'prod':
            return prod;
        case 'dev':
            return dev;
        default:
            return local;
    }
};

// const API_BASE_URL = checkEnv(process.env.REACT_APP_CHOPIN);
const API_BASE_URL = 'https://kraken-dev.picasso-utc.fr/api';

export { mockNeswletter, mockCarte, mockEvenements, mockTrending, API_BASE_URL };
