const baseURL = `${process.env.VUE_APP_API_URL}api`

const rewardService = {
    async getAllRewards () {
        return await fetch(`${baseURL}/all_rewards`, {
            method: "GET",
            credentials: "include"
        })
    }
}

export default rewardService