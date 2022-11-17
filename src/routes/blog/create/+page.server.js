import {createPost, login} from '$lib/api.js';

/** @type {import('./$types').Actions} */
export const actions = {
    default: async (event) => {
        // Require the user to be logged in
        const data = await event.request.formData();
        const email = data.get('email');
        const password = data.get('password');
        if (!await login(email, password)) {
            return {
                failedLogin: true
            };
        }
        const title = data.get('title');
        const content = data.get('content');
        const result = await createPost(title, content);
        return {success: result}
    }
};