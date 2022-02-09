import * as axios from "axios"

const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY" : "8f8f04b2-e66b-4195-b78a-7a4267ce859c"
      // "API-KEY" : "8a38190c-fe05-4106-8fa5-41b335e55f97"
   },
   baseURL: 'https://social-network.samuraijs.com/api/1.0/'
}) 



export const usersAPI = {
   getUsers(currentPage=1, pageSize= 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`) 
         .then(response => {
            return response.data;
         });
   },
   follow(userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow(userId) {
      return instance.delete(`unfollow/${userId}`)
   },
   getProfile(userId) {
      return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
   getProfile(userId) {
      return instance.get(`profile/${userId}`);
  },
  getStatus(userId){
     return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status){
     return instance.put(`profile/status`, {status: status});
  }
}

export const authAPI = {
   me () {
       return instance.get(`auth/me`)
   },
   login(email, password, rememberMe = false) {
      return instance.post('auth/login', {email, password, rememberMe});
    },
  
    logout() {
      return instance.delete('auth/login');
    }
}