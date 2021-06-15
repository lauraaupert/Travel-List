import axios from 'axios';

export default {


geocode: function(address) {
    return axios.get(
      "http://api.positionstack.com/v1/forward?access_key=" + process.env.REACT_APP_GEOKEY +
      "&query=" + address 
      )
  },
}
