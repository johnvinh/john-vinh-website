<script>
    export let title;
    export let info;
    export let titleImage;
    export let mainImage;
    export let technologies;
    export let link;
    export let showTitleImage = true;
</script>

<div class="mt-10 bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
    {#if showTitleImage}
        <img src="/images/{titleImage}" alt="{title}" class="w-full object-cover h-64">
    {/if}
    <div class="p-6">
        <img src="/images/{mainImage}" class="w-1/3 mx-auto" alt="{title} logo">
        <h3 class="text-2xl text-center mt-4">{title}</h3>
        <a href={link} class="text-blue-500 hover:underline text-center block mt-2">Project Link</a>
        <p class="mt-4">{info}</p>
        <h4 class="font-bold my-5">Technologies Used</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {#each technologies as technology (technology.id)}
                <img src="/images/{technology.image}"
                     class="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20" alt="{technology.name} logo">
            {/each}
        </div>
    </div>
</div>
