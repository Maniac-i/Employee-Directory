import axios from "axios";

const apiCall = {

  getEmployees: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
};

export default apiCall;