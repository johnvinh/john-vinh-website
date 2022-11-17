<script>
    import Title from '../../../components/Title.svelte';
    import Subtitle from '../../../components/Subtitle.svelte';

    /** @type {import('./$types').ActionData} */
    export let form;
</script>

<Title>
    Make A Post
</Title>
{#if form?.success}
    <p>Your post has been submitted!</p>
{/if}
{#if form?.success === false}
    <p>There was an error submitting the post.</p>
{/if}
<form class="flex flex-col" method="POST">
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