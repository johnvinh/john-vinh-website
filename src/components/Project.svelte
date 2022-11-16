<script>
    import Box from './Box.svelte';

    export let title;
    export let info;
    export let mainImage;
    export let technologies;
</script>

<div>
    <img src="/images/{mainImage}" class="w-1/3 mx-auto" alt="{title} logo">
    <h3 class="text-2xl text-center">{title}</h3>
    <p>{info}</p>
    <div class="flex flex-row space-x-5">
        {#each technologies as technology (technology.id)}
            <img src="/images/{technology.image}" class="w-[50px] h-[50px]" alt="{technology.name} logo">
        {/each}
    </div>
</div>