<script>
    import "../app.css";
    import "$lib/style.css";
</script>

<div class="bg-coolwhite w-3/4 mx-auto rounded p-8 mt-1.5">
    <header class="flex flex-row justify-between mt-5">
        <h1 class="text-xl">John Vinh</h1>
        <nav class="space-x-10">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
        </nav>
    </header>
    <main>
        <slot></slot>
    </main>
    <footer class="mt-10">
        <p>John Vinh &copy; 2022</p>
    </footer>
</div>