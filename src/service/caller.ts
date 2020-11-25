import axios from 'axios'

/*axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';*/
axios.defaults.timeout = 100;

axios.interceptors.request.use(req => {
    console.log(`${req.method} ${req.url}`);
     return req;
  });


/*axios.interceptors.response.use(
    res => res,
    err => {
      if (err.response.status === 404) {
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    }
  );*/


export async function sendget() {
    try {
        const resp = await axios({
            method: 'get',
            url : 'https://jsonplaceholder.typicode.com/posts/1',
         /*   params: {
              ID: 12345
            }, */
            

        });
        console.log(resp.data);
        return resp.data
    } catch (err) {
        // Handle Error Here
        console.error(err);
        return err
    }
};

