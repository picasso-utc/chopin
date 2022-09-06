import MockAdapter from 'axios-mock-adapter';

const axios = require('axios');
const config = require('./config');

const mockNeswletter = require('./mocks/mockNewsletter.json');
const mockCarte = require('./mocks/mockCarte.json');
const mockEvenements = require('./mocks/mockEvenements.json');
const mockTrending = require('./mocks/mockTrending.json');
const mockCalendrier = require('./mocks/mockCalendrier.json');

const mock = new MockAdapter(axios);

if (config.isMock) {
    mock.onGet(`${config.API_BASE_URL}/newsletter`).reply(200, mockNeswletter);
    mock.onGet(`${config.API_BASE_URL}/events`).reply(200, mockEvenements);
    mock.onGet(`${config.API_BASE_URL}/payutc/public/articles`).reply(200, mockCarte);
    mock.onGet(`${config.API_BASE_URL}/trending_product`).reply(200, mockTrending);
    mock.onGet(`${config.API_BASE_URL}/calendar`).reply(200, mockCalendrier);
} else {
    mock.onAny().passThrough();
}

export const getNewsletter = () => axios.get(`${config.API_BASE_URL}/newsletter`);
export const getCarte = () => axios.get(`${config.API_BASE_URL}/payutc/public/articles`);
export const getEvenements = () => axios.get(`${config.API_BASE_URL}/events`);
export const getTrendingProduct = () => axios.get(`${config.API_BASE_URL}/trending_product`);
export const getCalendar = () => axios.get(`${config.API_BASE_URL}/calendar`);
