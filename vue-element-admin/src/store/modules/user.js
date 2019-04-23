import { login, logout, getInfo, getviewAuthority , user_gx } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [],
  userInfo:{},
  Authoritys:[]
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  userInfo(state,payload){
    state.userInfo = payload
  },
  viewAuthority(state,payload){
    state.Authoritys = payload;
  }
}

const actions = {
  async user_user({commit},payload){
    console.log(payload,'123')
      await user_gx(payload);
      let result = await getInfo();
      commit('userInfo',result.data)
  },
  // user login
  async login({ commit }, userInfo) {
    const { username, password } = userInfo
    let res = await login({user_name:username,user_pwd:password})
    console.log('res...',res)
    setToken(res.token)
    return res;
  },

  // get user info
  async getInfo({ commit, state }) {
    let result = await getInfo();
    commit('userInfo',result.data)
    return result.data;
  },

  async getViewAuthoritys({commit},payload){
    let getviewAuthority_s = await getviewAuthority();
    console.log(getviewAuthority_s,'asdas')
    if(getviewAuthority_s.code == 1){
      commit('viewAuthority',getviewAuthority_s.data)
      return getviewAuthority_s.data;
    }
    return [];
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        removeToken()
        resetRouter()
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLES', [])
      removeToken()
      resolve()
    })
  },

  // Dynamically modify permissions
  changeRoles({ commit, dispatch }, role) {
    return new Promise(async resolve => {
      const token = role + '-token'

      commit('SET_TOKEN', token)
      setToken(token)

      const { roles } = await dispatch('getInfo')

      resetRouter()

      // generate accessible routes map based on roles
      const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

      // dynamically add accessible routes
      router.addRoutes(accessRoutes)

      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
