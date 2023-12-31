import WP from "../wp";

export default async function getHome(uri:string){
    try {
        const res = await WP(`
        query getHome($uri: ID!){
            page(id: $uri, idType: URI) {
                content
                GQL_content {
                  fieldGroupName
                }
                title
              }
              contentNode(id: "") {
                id
              }
            }
        `, {uri})

        if(!res?.data){
            throw `error couldn't fetch api`;
        }
        const data = res?.data?.page
        return data
    } catch (error) {
        console.error(error)
    }
}