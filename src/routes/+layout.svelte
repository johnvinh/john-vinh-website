<script>
    import "../app.css";
    import "$lib/style.css";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu">
</svelte:head>
<div id="content">
    <header class="text-black p-5">
        <nav class="flex flex-row justify-evenly">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
        </nav>
    </header>
    <main class="w-1/2 mx-auto">
        <slot></slot>
    </main>
    <footer class="mt-10">
        <p>John Vinh &copy; 2022</p>
    </footer>
</div>

<style>
    #content {
        font-family: "Ubuntu", "Verdana", serif;
    }
</style>