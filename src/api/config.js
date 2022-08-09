const MockAdapter = require('axios-mock-adapter');
const mockNeswletter = require('./mocks/mockNewsletter.json');

const API_BASE_URL = "https://kraken.picasso-utc.fr/api";

export default {
    MockAdapter,
    mockNeswletter,
    API_BASE_URL
}
