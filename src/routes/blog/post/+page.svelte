<script>
    import Title from '../../../components/Title.svelte';
    import {getPostById} from '$lib/api.js';
    import {page} from '$app/stores';

    let id = $page.url.searchParams.get('id');

    let post;

    (async () => {
        post = await getPostById(id);
    })();
</script>

{#if post}
    <Title>
        {post.title}
    </Title>
    <p>{post.content}</p>
{/if}
