import PocketBase from 'pocketbase';

export async function getPosts()
{
    const email = import.meta.env.VITE_POCKETBASE_EMAIL;
    const password = import.meta.env.VITE_POCKETBASE_PASSWORD;
    const client = new PocketBase("http://127.0.0.1:8090");
    await client.admins.authViaEmail(email, password);
    return await client.records.getFullList('posts', 200, {
        sort: '-created',
    });
}

export async function getPostById(id)
{
    const email = import.meta.env.VITE_POCKETBASE_EMAIL;
    const password = import.meta.env.VITE_POCKETBASE_PASSWORD;
    const client = new PocketBase("http://127.0.0.1:8090");
    await client.admins.authViaEmail(email, password);
    let post;
    try {
        post = await client.records.getOne('posts', id);
    } catch (e) {
        return null;
    }
    return post;
}