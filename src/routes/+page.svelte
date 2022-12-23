<script>
    import TopHeader from '../components/TopHeader.svelte';
    import Projects from '../components/Projects.svelte';
    import Subtitle from '../components/Subtitle.svelte';
</script>

<svelte:head>
    <title>Home - John Vinh: Software Developer</title>
</svelte:head>
<TopHeader />
<Subtitle>A little about me</Subtitle>
<p>I love building things for others to enjoy and the thrill of solving problems.</p>
<Subtitle>More</Subtitle>
<ul>
    <li class="font-bold md:text-3xl">Read more <a href="/about">about me!</a></li>
    <li class="font-bold md:text-3xl">Check out all of <a href="/projects">my projects!</a></li>
</ul>