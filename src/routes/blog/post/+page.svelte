<script>
    import Title from '../../../components/Title.svelte';

    export let data;
    let post = JSON.parse(data.post);
</script>

{#if post}
    <Title>
        {post.title}
    </Title>
    <p>{post.content}</p>
{/if}
{#if !post}
    <Title>
        Loading...
    </Title>
{/if}