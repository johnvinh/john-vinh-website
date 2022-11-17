import {createPost, login} from '$lib/api.js';

/** @type {import('./$types').Actions} */
export const actions = {
    createPost: async (event) => {
        const data = await event.request.formData();
        const title = data.get('title');
        const content = data.get('content');
        const result = await createPost(title, content);
        return {success: result}
    },
    login: async (event) => {
        const data = await event.request.formData();
        const email = data.get('email');
        const password = data.get('password');
        const result = await login(email, password);
        return {loggedin: result}
    }
};