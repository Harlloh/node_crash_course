const posts = [
    {
        id: 1, titel: 'Post1',
    },
    {
        id: 2, titel: 'Post2',
    },
]

export default function getPosts(){
    return posts
}

export const getPostLength = ()=>{
    return posts.length
}