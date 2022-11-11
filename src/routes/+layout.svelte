<script>
    import '$lib/bootstrap.min.css';
    import '$lib/bootstrap.css';
    import '$lib/style.css';
</script>

<header>
    <nav class="navbar navbar-expand bg-secondary bg-gradient">
        <div class="container">
            <a href="/" class="navbar-brand">John Vinh</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="/" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="/" class="nav-link">Blog</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main>
    <slot></slot>
</main>
<footer>
    <div class="container">
        <p>Copyright &copy; 2022 John Vinh</p>
    </div>
</footer>

<style>
    a {
        color: #000;
        text-decoration: none;
    }
</style>