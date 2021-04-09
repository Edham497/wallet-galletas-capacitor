const API_URL = "https://galleta-api.herokuapp.com/bitso-books/"

module.exports = {
    async get_ltc() {
        const response = await fetch(API_URL + "ltc_mxn");
        return await response.json();
    },
    async get_mana() {
        const response = await fetch(API_URL + "mana_mxn");
        return await response.json();
    },
    async get_coin(coin) {
        const response = await fetch(`${API_URL}${coin}_mxn`);
        return await response.json();
    }
}