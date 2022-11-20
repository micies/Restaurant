const BASE_URL = process.env.REACT_APP_BASE_URL;

const USER_API_BASE_URL = BASE_URL + "tables";

class ApiService {

    Post(data) {
        return fetch(USER_API_BASE_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      }
    
    
    PostById (id, data){
      return fetch(`${USER_API_BASE_URL}/${id}`,{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      })
    }


  Delete (id) {
    return fetch(`${USER_API_BASE_URL}/${id}`, {
        method: 'DELETE'
      })
   
}

Get() {
    return fetch(USER_API_BASE_URL,{

      method: 'GET',
      headers: {
        accept: 'application/json',
      }})  
}

GetSit(url) {
  return fetch(`${url}`,{

    method: 'GET',
    headers: {
      accept: 'application/json',
    }})  
}

  GetById(id) {
    return fetch(`${USER_API_BASE_URL}/${id}`);
  }

  Put( id, data) { 
    return fetch(`${USER_API_BASE_URL}/${id}`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  }
}

export default new ApiService();






