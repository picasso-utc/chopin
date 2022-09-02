import MockAdapter from 'axios-mock-adapter';

const axios = require('axios');
const config = require('./config');

const mock = new MockAdapter(axios);

if (config.isMock) {
    mock.onGet(`${config.API_BASE_URL}/newsletter`).reply(200, config.mockNeswletter);
    mock.onGet(`${config.API_BASE_URL}/calendar`).reply(200, config.mockEvenements);
    mock.onGet(`${config.API_BASE_URL}/payutc/public/articles`).reply(200, config.mockCarte);
    mock.onGet(`${config.API_BASE_URL}/trending_product`).reply(200, config.mockTrending);
} else {
    mock.onAny().passThrough();
}

export const getNewsletter = () => axios.get(`${config.API_BASE_URL}/newsletter`);
export const getCarte = () => axios.get(`${config.API_BASE_URL}/payutc/public/articles`);
export const getEvenements = () => axios.get(`${config.API_BASE_URL}/calendar`);
export const getTrendingProduct = () => axios.get(`${config.API_BASE_URL}/trending_product`);
