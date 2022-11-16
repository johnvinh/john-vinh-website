<script>
    import Box from './Box.svelte';

    export let title;
    export let info;
    export let mainImage;
    export let technologies;
    export let link;
</script>

<div class="mt-10">
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