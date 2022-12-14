import PocketBase from 'pocketbase';

export async function getPosts()
{
    const email = import.meta.env.VITE_POCKETBASE_EMAIL;
    const password = import.meta.env.VITE_POCKETBASE_PASSWORD;
    const host = import.meta.env.VITE_POCKETBASE_HOST;
    const client = new PocketBase(`${host}:8090`);
    await client.admins.authViaEmail(email, password);
    return await client.records.getFullList('posts', 200, {
        sort: '-created',
    });
}

export async function getPostById(id)
{
    const email = import.meta.env.VITE_POCKETBASE_EMAIL;
    const password = import.meta.env.VITE_POCKETBASE_PASSWORD;
    const host = import.meta.env.VITE_POCKETBASE_HOST;
    const client = new PocketBase(`${host}:8090`);
    await client.admins.authViaEmail(email, password);
    let post;
    try {
        post = await client.records.getOne('posts', id);
    } catch (e) {
        return null;
    }
    return post;
}

export async function createPost(title, content)
{
    const email = import.meta.env.VITE_POCKETBASE_EMAIL;
    const password = import.meta.env.VITE_POCKETBASE_PASSWORD;
    const host = import.meta.env.VITE_POCKETBASE_HOST;
    const client = new PocketBase(`${host}:8090`);
    await client.admins.authViaEmail(email, password);
    try {
        await client.records.create('posts', {
            title: title,
            content: content.replace(/\n/g, "<br />")
        });
    } catch (e) {
        console.log(e);
        return false;
    }
    return true;
}

export async function login(username, password)
{
    const host = import.meta.env.VITE_POCKETBASE_HOST;
    const client = new PocketBase(`${host}:8090`);
    try {
        await client.users.authViaEmail(username, password);
    } catch (e) {
        return false;
    }
    return true;
}