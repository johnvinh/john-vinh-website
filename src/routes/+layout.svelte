<script>
    import '$lib/bootstrap.min.css';
    import '$lib/style.css';
</script>

<header>
    <nav class="navbar navbar-expand">
        <div class="container">
            <a href="#" class="navbar-brand">John Vinh</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="#" class="nav-link">Home</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">About</a>
                </li>
            </ul>
        </div>
    </nav>
</header>
<main>
    <slot></slot>
</main>

<style>
    header {
        background-color: #001514;
        color: #fff;
    }

    a {
        color: #fff;
        text-decoration: none;
    }
</style>