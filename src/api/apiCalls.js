import MockAdapter from 'axios-mock-adapter';

const axios = require('axios');
const config = require('./config');

const mock = new MockAdapter(axios);

mock.onGet(`${config.API_BASE_URL}/newsletter`).reply(200, {
    data: config.mockNeswletter,
});

mock.onGet(`${config.API_BASE_URL}/calendar`).reply(200, {
    data: config.mockEvenements,
});

mock.onGet(`${config.API_BASE_URL}/trendingProduct`).reply(200, {
    data: config.mockTrending,
});

mock.onAny().passThrough();

export const getNewsletter = () => axios.get(`${config.API_BASE_URL}/newsletter`);
export const getCarte = () => axios.get(`${config.API_BASE_URL}/payutc/public/articles`);
export const getEvenements = () => axios.get(`${config.API_BASE_URL}/calendar`);
export const getTrendingProduct = () => axios.get(`${config.API_BASE_URL}/trendingProduct`);
