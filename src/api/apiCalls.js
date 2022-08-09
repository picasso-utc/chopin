const axios = require('axios');
const config = require('./config');

const mock = new config.MockAdapter(axios);

mock.onGet(`${config.API_BASE_URL}/newsletter`).reply(200, {
    data: config.mockNeswletter
});

export const getNewsletter = () => axios.get(`${config.API_BASE_URL}/newsletter`)

export default {
    getNewsletter
}
