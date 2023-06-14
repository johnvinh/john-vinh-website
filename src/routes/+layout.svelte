<script>
    import "../app.css";
    import NavigationBar from "../components/NavigationBar.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu">
    <link rel="icon" href="favicon.ico" />
    <meta charset="utf-8">
    <meta name="description" content="John Vinh is a computer engineering student and software developer.">
</svelte:head>

<NavigationBar />
<main class="w-[65%] md:w-1/2 mx-auto">
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
        <img src="/images/github-logo-light.svg" alt="GitHub logo" class="w-[50px] h-[50px]">
    </a>
</footer>

<style>
    :global(body) {
        font-family: "Ubuntu", "Verdana", serif;
        background-color: #121212;
        color: #E0E0E0;
    }

    :global(a) {
        color: #BB86FC;
    }

    :global(a:hover) {
        color: #3700B3;
    }

    :global(a:active) {
        color: #457B9D;
    }
</style>