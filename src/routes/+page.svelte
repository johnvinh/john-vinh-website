<script>
    import TopHeader from '../components/TopHeader.svelte';
    import Subtitle from '../components/Subtitle.svelte';
    import Hero from "../components/Hero.svelte";
</script>

<svelte:head>
    <title>Home - John Vinh: Software Developer</title>
</svelte:head>
<Hero>
    <TopHeader />
</Hero>
<ul class="my-10">
    <li class="font-bold md:text-3xl mb-5">Read more <a href="/about">about me!</a></li>
    <li class="font-bold md:text-3xl">Check out all of <a href="/projects">my projects!</a></li>
</ul>