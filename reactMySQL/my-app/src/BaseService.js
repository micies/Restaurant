import axios from 'axios'



export function Delete(id, BaseUrl, setUse) {
  axios.delete(`${BaseUrl}/${id}`)
  .then(response => {setUse(response.data)
  console.log(response)}
  )
  .catch(error => {
      setUse(error.message);
      console.error('There was an error!', error);
  });

}

export function Post(BaseUrl, data, responseData) {
  axios.post(BaseUrl, data)
    .then((response) => {
      console.log(response);
      responseData(response)
    })
    .catch(error => {
      responseData({ errorMessage: error.message });
      console.error('There was an error!', error);
    })
}

export function Get(state, BaseUrl) {
  axios.get(BaseUrl)
    .then(res => {
      if (!res.data) {
        state({ errorMessage: "not found" })
      }
      else {
        console.log(res.data)
        state(res.data);
      }
    }).catch(error => {
      state({ errorMessage: error.message });
      console.error('There was an error!', error);
    })
}


export function Put(BaseUrl, id, put_data, setState) {

  axios.put(`${BaseUrl}/${id}`, put_data)
  .then(response => setState(response.data))
  .catch(error => {
      setState({ errorMessage: error.message });
      console.error('There was an error!', error);
  });
}


export function GetById(BaseUrl, id, state) {
  axios.get(`${BaseUrl}/${id}`)
    .then(res => {
      if (!res.data) {
        state({ errorMessage: "not found" })
      }
      else {
        console.log(res.data)
        state(res.data);
      }
    }).catch(error => {
      state({ errorMessage: error.message });
      console.error('There was an error!', error);
    })
}


export function GetByIdModel(BaseUrl, id, state) {
  axios.get(`${BaseUrl}/${id}`)
    .then(res => {
      if (!res.data) {
        state({ errorMessage: "not found" })
      }
      else {
        console.log(res.data)
        state(res.data[0]);
      }
    }).catch(error => {
      state({ errorMessage: error.message });
      console.error('There was an error!', error);
    })
}


export function PostById(BaseUrl, id, data, responseData) {
  axios.post(`${BaseUrl}/${id}`, data)
    .then((response) => {
      console.log(response);
      responseData(response)
    })
    .catch(error => {
      responseData({ errorMessage: error.message });
      console.error('There was an error!', error);
    })
}





