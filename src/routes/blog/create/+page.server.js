import {createPost} from '$lib/api.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        const data = await event.request.formData();
        const title = data.get('title');
        const content = data.get('content');
        const result = await createPost(title, content);
        return {success: result}
    }
};