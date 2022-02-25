const { config } = require('dotenv');

const WebConfig = (path) => config({ path }).parsed;

module.exports = WebConfig;
