<script>
    import {page} from "$app/stores";

</script>

<svelte:head>
    <title>John Vinh: Software Developer</title>
</svelte:head>
<h2 class="text-4xl">
    Oops, something went wrong.
</h2>
<p>
    {$page.error.message} Click <a href="/">here</a> to go back to the homepage!
</p>