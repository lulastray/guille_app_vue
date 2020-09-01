const baseUrl = `${process.env.VUE_APP_API_URL}api`

const taskService = {
    async createTask(task) {
        return await fetch(`${baseUrl}/new_task`, {
            method: "POST",
            body: JSON.stringify(task),
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        })
    },

    async getAllTasks() {
        return await fetch(`${baseUrl}/all_tasks`, {
            method: "GET",
            credentials: "include"
        })
    },

    async changeTaskProgress(id, stateProgress) {
        return await fetch(`${baseUrl}/change_progress`, {
            method: "POST",
            body: JSON.stringify({ id, stateProgress }),
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        })
    }

}

export default taskService