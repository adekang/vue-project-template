import {defineStore} from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        token: '',
        userInfo: {},
    }),
    getters: {
        isAuthenticated: (state) => state.token !== '',
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
        },
        logout() {
            this.token = '';
            this.userInfo = {};
        }
    },
    // persist: {
    //     key: 'user-token-key',
    // },
})
