<script>
    export let title;
    export let description;
    export let image;
    export let link;
</script>

<div class="mt-10">
    <a href="{link}" target="_blank">
        <img src="{image}" alt="{title}" class="w-full">
    </a>
    <h3 class="text-xl font-bold">{title}</h3>
    <a href="{link}" target="_blank">GitHub Repository</a>
    <p>{description}</p>
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