const apiHost = 'http://localhost/strokeknowhow2/wp-json/toolkit/v1/';

export default {
  async fetchEmergency() {
    try {
      const response = await fetch(apiHost + 'get-emergency/3');
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },

};




