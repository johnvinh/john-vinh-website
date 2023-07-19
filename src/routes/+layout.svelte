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

<main class="mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 py-6">
    <slot></slot>
</main>

<footer class="flex flex-row mt-10 justify-center space-x-4">
    <a href="https://www.linkedin.com/in/john-vinh/">
        <img src="/images/linkedin-logo.svg" alt="LinkedIn logo" class="w-12 h-12">
    </a>
    <a href="https://twitter.com/JohnVinhDev">
        <img src="/images/twitter-logo.svg" alt="Twitter logo" class="w-12 h-12">
    </a>
    <a href="https://github.com/johnvinh">
        <img src="/images/github-logo-light.svg" alt="GitHub logo" class="w-12 h-12">
    </a>
</footer>
