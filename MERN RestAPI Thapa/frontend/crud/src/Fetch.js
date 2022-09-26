class Fetch
{
    async getdata() {
        let res = await fetch("/api/alldata")
        return res.json()
    }
}
export default new Fetch()