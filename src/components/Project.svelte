<script>
    import Box from './Box.svelte';

    export let title;
    export let info;
    export let titleImage;
    export let mainImage;
    export let technologies;
    export let link;
    export let showTitleImage = true;
</script>

<div class="mt-10 box">
    {#if showTitleImage}
        <img src="/images/{titleImage}" alt="{title}" class="md:w-1/2 mx-auto">
    {/if}
    <img src="/images/{mainImage}" class="md:w-1/3 mx-auto" alt="{title} logo">
    <h3 class="text-2xl text-center">{title}</h3>
    <a href={link}><p class="text-center">Project Link</p></a>
    <p>{info}</p>
    <h4 class="font-bold my-5">Technologies Used</h4>
    <div class="container flex flex-row lg:flex-row lg:space-x-5 justify-evenly">
        {#each technologies as technology (technology.id)}
            <img src="/images/{technology.image}"
                 class="w-[45px] h-[45px] md:w-[55px] md:h-[55px] lg:w-[75px] lg:h-[75px]" alt="{technology.name} logo">
        {/each}
    </div>
</div>

<style>
    .box {
        background-color: #B3B3B3;
        border-radius: 10px;
        padding: 1rem;
    }

    .box:hover {
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    }

    .box img {
        border-radius: 10px;
    }

    .box h3 {
        margin-top: 1rem;
    }

    .box p {
        margin-top: 1rem;
    }

    .box a {
        color: #000;
    }

    .box a:hover {
        color: #000;
    }

    .box a:visited {
        color: #000;
    }

    .box a:active {
        color: #000;
    }
</style>