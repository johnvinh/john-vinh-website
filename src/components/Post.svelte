<script>
    import Box from './Box.svelte';

    export let post;
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<div class="mt-5">
    <h2 class="text-4xl">{post.title}</h2>
    <p>{prettyDate}</p>
</div>