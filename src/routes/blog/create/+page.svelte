<script>
    import Title from '../../../components/Title.svelte';
    import Subtitle from '../../../components/Subtitle.svelte';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

{#if form?.loggedin}
    <Title>
        Make A Post
    </Title>
    {#if form?.success}
        <p>Your post has been submitted!</p>
    {/if}
    {#if form?.success === false}
        <p>There was an error submitting the post.</p>
    {/if}
    <form class="flex flex-col" method="POST" action="?/createPost">
        <label for="title" class="block">
            <Subtitle>
                Title
            </Subtitle>
        </label>
        <input class="block w-full" type="text" name="title" id="title" placeholder="Title" />
        <label class="block" for="content">
            <Subtitle>
                Content
            </Subtitle>
        </label>
        <textarea class="block w-full h-screen" name="content" id="content" placeholder="Content"></textarea>
        <button class="bg-themered text-white p-5 mt-10 rounded-2xl" type="submit">Submit</button>
    </form>
{:else}
    <Title>
        Login
    </Title>
    <form class="flex flex-col" method="POST" action="?/login">
        <label for="email" class="block">
            <Subtitle>
                Email
            </Subtitle>
        </label>
        <input class="block w-full" type="text" name="email" id="email" placeholder="Email" />
        <label class="block" for="password">
            <Subtitle>
                Password
            </Subtitle>
        </label>
        <input class="block w-full" type="password" name="password" id="password" placeholder="Password" />
        <button class="bg-themered text-white p-5 mt-10 rounded-2xl" type="submit">Login</button>
    </form>
{/if}