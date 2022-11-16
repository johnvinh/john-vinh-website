<script>
    import Title from '../../components/Title.svelte';
    import Post from '../../components/Post.svelte';

    export let data;

    let posts = JSON.parse(data.posts);

</script>

<Title>
    Blog
</Title>

{#if posts && posts.length}
    {#each posts as post (post.id)}
        <Post
            {post}
        />
    {/each}
{/if}