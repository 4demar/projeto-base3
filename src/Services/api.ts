import axios from "axios";

const api = axios.create({
   baseURL: process.env.REACT_APP_API,
   headers: {
      "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
   }
});

// const apiColetaProduto = axios.create({s
//   baseURL: process.env.REACT_APP_COLETA_PRODUTO_API_URL,
//   headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
//   }
// });

export { api }
