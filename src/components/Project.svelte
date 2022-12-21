<script>
    import Box from './Box.svelte';

    export let title;
    export let info;
    export let titleImage;
    export let mainImage;
    export let technologies;
    export let link;
</script>

<div class="mt-10 box">
    <img src="/images/{titleImage}" alt="{title}" class="w-1/2 mx-auto">
    <img src="/images/{mainImage}" class="w-1/3 mx-auto" alt="{title} logo">
    <h3 class="text-2xl text-center">{title}</h3>
    <a href={link} ><p class="text-center">Project Link</p></a>
    <p>{info}</p>
    <h4 class="font-bold my-5">Technologies Used</h4>
    <div class="flex flex-row space-x-5">
        {#each technologies as technology (technology.id)}
            <img src="/images/{technology.image}" class="w-[75px] h-[75px]" alt="{technology.name} logo">
        {/each}
    </div>
</div>

<style>
    .box {
        background-color: #f5f5f5;
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