import {getPosts} from '$lib/api.js';
import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ url, params }) {
    const posts = await getPosts();
    if (posts == null) {
        throw error(404, "That post couldn't be found.");
    }
    return {
        posts: JSON.stringify(posts)
    };
}