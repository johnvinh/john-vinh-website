<script>
    import Title from '../../components/Title.svelte';
    import {getPosts} from '../../lib/api.js';

    let posts;
    (async () =>
    {
        posts = await getPosts();
    })();

</script>

<Title>
    Blog
</Title>

{#if posts && posts.length}
    {#each posts as post (post.id)}
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    {/each}
{/if}