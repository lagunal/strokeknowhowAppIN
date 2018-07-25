
const apiHost = 'https://strokeknowhow.org/wp-json/toolkit/v1/';

export default {
  //fetch the data from energency toolkit
  async getToolkit(userId, toolkit) {
    try {
      const response = await fetch(apiHost + 'get-' + toolkit + '/' + userId);
      const responseJson = await response.json();
      return responseJson;
    } catch(error) {
      console.error(error);
    }
  },
  //save data emergency toolkit
  saveToolkit(data, userId, token, toolkit) {
    try {
      fetch(apiHost + 'save-' + toolkit + '/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        body: JSON.stringify({
          json: data,
          id: userId,
        }),
      });
    } catch(error) {
        console.error(error);
    }
  },


};




