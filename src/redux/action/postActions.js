const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
const BEARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2MwNDc4YTE4Yzg1OTAwMTUyNGE3OTMiLCJpYXQiOjE3NDA2NTQ0NzQsImV4cCI6MTc0MTg2NDA3NH0.DyURPu1gqS9wjTZ5bpE-OvmekF19RQkrNjkUuXDLfHY";

  export const FetchPosts = ()=>async (dispatch)=> {
    try {
        const response = await fetch (`${API_URL}`,{
            headers:{
                
                Authorization:`Bearer ${BEARER_TOKEN}`
            }
        })
    } if (!response.ok) {
        throw new Error ("Errore nel recupero dei post")
    }
    const data = await response.json();
    dispatch ({type:"SET_POSTS",payload:data})
  }catch (error){
    console.log ("Errore nella fetch")
  }

  
