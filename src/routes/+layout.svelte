<script>
    import "../app.css";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu">
    <meta charset="utf-8">
    <meta name="description" content="John Vinh is a computer engineering student and software developer.">
</svelte:head>

<header class="text-black p-5">
    <p class="text-center font-bold">John Vinh</p>
    <nav class="flex flex-row justify-evenly text-2xl font-bold">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
    </nav>
</header>
<main class="w-1/2 mx-auto">
    <slot></slot>
</main>
<footer class="flex flex-row mt-10 w-1/2 mx-auto justify-center">
    <a href="https://www.linkedin.com/in/john-vinh/">
        <img src="/images/linkedin-logo.svg" alt="LinkedIn logo" class="w-[50px] h-[50px]">
    </a>
    <a href="https://twitter.com/JohnVinhDev">
        <img src="/images/twitter-logo.svg" alt="Twitter logo" class="w-[50px] h-[50px]">
    </a>
    <a href="https://github.com/johnvinh">
        <img src="/images/github-logo.svg" alt="GitHub logo" class="w-[50px] h-[50px]">
    </a>
</footer>

<style>
    :global(body) {
        font-family: "Ubuntu", "Verdana", serif;
        background-color: #F1FAEE;
        color: #000;
    }

    :global(a) {
        color: #E63946;
    }
</style>