<script>
    import Title from '../../../components/Title.svelte';

    export let data;
    let post = JSON.parse(data.post);
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

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