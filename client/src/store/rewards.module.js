import rewardService from '@/services/reward.service'

const initialState = {
    rewards:[],

}

const state = { ...initialState }

export const mutations = {
    SET_REWARDS(state, rewards) {
        state.rewards = rewards
    }
}

export const getters = {
    rewards(state) {
        return state.rewards
    }
}

export const actions = {
    async getRewards({ commit }) {
        const response = await rewardService.getAllRewards()
        const rewards = response.status === 200 ? await response.json() : []
        commit('SET_REWARDS',rewards)
    }
}

export default { state, mutations, getters, actions}