<script>
    import Box from './Box.svelte';

    export let post;
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<div class="mt-5 space-y-2">
    <a href="/blog/post?id={post.id}">
        <h2 class="text-2xl md:text-4xl font-semibold hover:text-purple-600 transition-colors duration-200">{post.title}</h2>
    </a>
    <p class="text-lg md:text-xl text-gray-500">{prettyDate}</p>
</div>
