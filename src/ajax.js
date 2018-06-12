const apiHost = 'https://strokeknowhow.org/wp-json/toolkit/v1/';

export default {
  async getEmergency() {
    try {
      const response = await fetch(apiHost + 'get-emergency/3');
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },

};




