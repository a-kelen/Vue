import Axios from '../axios'
const state = {
    auditions: [],
  }
  
  // getters
  const getters = {
   getAuditions: state =>{ 
       return state.auditions;
    },
    getAudition: state => id => {
        return state.auditions.find(x => x.Id == id);
    }
  }
  
  // actions
  const actions = {
    getAuditions({commit},id) {
        Axios.get('/api/Auditions/byowner/'+id).then(res => {
           
            console.log(res);
            
            commit('SET_AUDITIONS',res.data)
        });
    },
    createAudition({commit},obj) {

        Axios.post('/api/Auditions',obj).then(res => {
            
            commit('ADD_AUDITION',res.data);
        });
    },
    createPost({commit}, obj){
        let photoId = null;
        if(obj.photo!=null) {
             Axios.post('/api/Posts/addphoto', obj.photo,{
                headers: {'Content-Type': 'multipart/form-data'}
            }).then(res => {
                obj.photoId = res.data.id;
                Axios.post('/api/Posts', obj).then(res => {
                    console.log("Post created");
                    console.log(res);
                });
            });
        } else {
            obj.photo = null;
            Axios.post('/api/Posts', obj).then(res => {
                console.log("Post created");
                console.log(res);
            });
        }

        
        
    }
  }
  
  // mutations
  const mutations = {
    SET_AUDITIONS (state, list) {
        state.auditions = list;
    },
    ADD_AUDITION (state, aud) {
        
        state.auditions.push(aud);
       
    }
  }
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }