<script>
    import Title from '../../../components/Title.svelte';

    export let data;
    let post = JSON.parse(data.post);
    $: title = 'John Vinh: Software Developer';
    if (post.title) {
        title = `John Vinh: Software Developer - ${post.title}`;
    }
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
{#if post}
    <Title>
        {post.title}
    </Title>
    <p>{prettyDate}</p>
    <p class="mt-10">
        {@html post.content}
    </p>
{/if}
{#if !post}
    <Title>
        Loading...
    </Title>
{/if}

<style>
    p {
        font-size: 1.2rem;
    }

    /* Restrict width of content */
    p, h1, h2, h3, h4, h5, h6 {
        max-width: 75%;
    }
</style>