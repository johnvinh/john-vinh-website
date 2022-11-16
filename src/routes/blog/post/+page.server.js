/** @type {import('./$types').PageServerLoad} */
import {getPostById} from '$lib/api.js';
import {error} from '@sveltejs/kit';

export async function load({ url, params }) {
    const id = url.searchParams.get('id');
    const post = await getPostById(id);
    if (post == null) {
        throw error(404, "That post couldn't be found.");
    }
    return {
        post: JSON.stringify(post)
    };
}