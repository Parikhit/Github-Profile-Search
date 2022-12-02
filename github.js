// Put your Github Api Keys within the constructor.
class Github {
    constructor() {
        this.client_id = '4ea3725de3d4e0b38cf0';
        this.client_secret = SECRET_ID;
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos,
        };
    }
}
