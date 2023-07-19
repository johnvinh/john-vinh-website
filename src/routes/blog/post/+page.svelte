<script>
    import Title from '../../../components/Title.svelte';
    import "$lib/new-post.css";

    export let data;
    let post = JSON.parse(data.post);
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
    <title>{`${post.title} - John Vinh: Software Developer`}</title>
</svelte:head>

<div class="space-y-8">
    {#if post}
        <Title>
            {post.title}
        </Title>
        <p class="text-lg text-gray-500">{prettyDate}</p>
        <div class="prose lg:prose-xl mt-10">
            {@html post.content}
        </div>
    {/if}
    {#if !post}
        <Title>
            Loading...
        </Title>
    {/if}
</div>