<script>
    export let title;
    export let description;
    export let image;
    export let link;
</script>

<div class="mt-10 p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <a href="{link}" target="_blank">
        <img src="{image}" alt="{title}" class="w-full rounded-lg">
    </a>
    <div>
        <h3 class="text-xl font-bold">{title}</h3>
        <a href="{link}" target="_blank" class="text-blue-500 hover:underline">GitHub Repository</a>
        <p class="mt-2 text-gray-500">{description}</p>
    </div>
</div>