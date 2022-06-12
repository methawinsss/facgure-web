import axios from "axios";

const getData = async () => {
  try {
    let res = await axios({
      headers: {
        "Content-Type": "multipart/form-data",
      },
      url: "/contact/getData",
      method: "get",
    });

    return {
      status: true,
      response: res,
    };
  } catch (err) {
    return {
      status: false,
      response: err,
    };
  }
};

const apiContact = {
  getData: getData,
};

export default apiContact;
