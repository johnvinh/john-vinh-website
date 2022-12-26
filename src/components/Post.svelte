<script>
    import Box from './Box.svelte';

    export let post;
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<div class="mt-5">
    <a href="/blog/post?id={post.id}">
        <h2 class="text-xl md:text-3xl">{post.title}</h2>
    </a>
    <p class="md:text-xl">{prettyDate}</p>
</div>