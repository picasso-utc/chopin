import MockAdapter from 'axios-mock-adapter';

const axios = require('axios');
const config = require('./config');

const mock = new MockAdapter(axios);

mock.onGet(`${config.API_BASE_URL}/newsletter`).reply(200, {
    data: config.mockNeswletter,
});

mock.onGet(`${config.API_BASE_URL}/carte`).reply(200, {
    data: config.mockCarte,
});

mock.onGet(`${config.API_BASE_URL}/calendar`).reply(200, {
    data: config.mockEvenements,
});

export const getNewsletter = () => axios.get(`${config.API_BASE_URL}/newsletter`);
export const getCarte = () => axios.get(`${config.API_BASE_URL}/carte`);
export const getEvenements = () => axios.get(`${config.API_BASE_URL}/calendar`);
