const fetch = require('node-fetch');

module.exports = {
  async fetchAccounts() {
    const response = await fetch('http://localhost:3090/api/accounts');
    const json = await response.json();
    return json;
  },
};
