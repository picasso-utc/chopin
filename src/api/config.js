const urls = {
    prod: 'https://kraken.picasso-utc.fr',
    dev: 'https://kraken-dev.picasso-utc.fr',
    local: 'http://127.0.0.1:8000',
};

const BASE_URL = urls.prod;
const API_BASE_URL = `${BASE_URL}/api`;

const isMock = false;

export { API_BASE_URL, BASE_URL, isMock };
