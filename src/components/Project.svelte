<script>
    export let title;
    export let info;
    export let mainImage;
    export let technologies;
    export let link;
</script>

<div class="mt-10 bg-white shadow-md rounded-lg overflow-hidden transition-all duration-200 ease-in-out transform hover:scale-105">
    <img src="/images/{mainImage}" alt="{title}" class="w-full h-64 object-cover">
    <div class="p-6">
        <h3 class="text-2xl font-bold mb-2">{title}</h3>
        <a href={link} class="text-blue-500 hover:underline mb-2 block">Project Link</a>
        <p class="text-gray-700">{info}</p>
        <h4 class="font-bold my-5">Technologies Used</h4>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
            {#each technologies as technology (technology.id)}
                <img src="/images/{technology.image}"
                     class="w-12 h-12 md:w-14 md:h-14 lg:w-20 lg:h-20" alt="{technology.name} logo">
            {/each}
        </div>
    </div>
</div>
