import axios from "axios";

import { appConfig } from "../config/config";



export async function getPosts() {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  const res = await axios.get(`${appConfig.API_URL}/getAllMovies`, config);
  return res
 
}




// ========================= get user Profile ============================


export async function Profile() {

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    
    },
   
  };
  console.log(localStorage.getItem("token"))
  const res = await axios.get(`${appConfig.API_URL}/getUser`, config);

  return res;

}
//================ update User + (component + end point ) ./ pages =======================










//=================================== add to warchList ======================



export async function addWatchList(movieId) {
  const token = localStorage.getItem("token");
  if (!token) {
    return;
  }
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  };
  const body = {
    movieId: movieId
  };
  const res = await axios.post(`${appConfig.API_URL}/addWatchList`, body, config);
  return res;
}



//=========================================================== remove from watcList ==========


export async function removeFromWatchList(movieId) {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
  };
  
  const data = {
    movieId: movieId
  };

  const res = await axios.delete(`${appConfig.API_URL}/deleteMovieWatchList`, {
    ...config,
    data
  });

  return res;
}



//================================================================================================= get watchList =======


export async function WatchList() {

  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": localStorage.getItem("token"),
    },
   
  };
  console.log(localStorage.getItem("token"))
  const res = await axios.get(`${appConfig.API_URL}/getWatchList`, config);

  return res;

}


// ===================================== create reviews =============================

export const createReview = (movieId, review, rating) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({movieId, review, rating });
  console.log(body)
  try {
    const res = await axios.post(`${appConfig.API_URL}/review`, body, config);
    console.log(res)
  }catch(err){
    console.log(err)
  }

}



