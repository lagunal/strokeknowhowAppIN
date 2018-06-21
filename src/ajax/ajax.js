const apiHost = 'http://10.0.0.34:80/strokeknowhow2/wp-json/toolkit/v1/';

export default {
  //fetch the data from energency toolkit
  async getEmergency() {
    try {
      const response = await fetch(apiHost + 'get-emergency/3');
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  
  //save data emergency toolkit
  saveToolkit(data) {
    try {
      fetch(apiHost + 'save-emergency/3', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          json: data,
        }),
      });
    } catch(error) {
        console.error(error);
    }
},
};




