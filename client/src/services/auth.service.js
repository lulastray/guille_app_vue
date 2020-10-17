const baseUrl = `${process.env.VUE_APP_API_URL}api`

const authService = {
    async signup(user) {
        return await fetch(`${baseUrl}/signup`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json' },
            credentials: "include"
        })
    },

    async login(user) {
        return await fetch(`${baseUrl}/login`, {
            method: "POST",
            body: JSON.stringify(user),
            headers: { 'Content-Type': 'application/json'},
            credentials: "include"
        })
    },

    async logOut (){
        return await this.services.post("/logout")
            .then(response => response.data)
    },

    async loggedIn (){
        return await fetch(`${this.baseUrl}/loggedin`, { credentials: "include"})
    }

}

export default authService