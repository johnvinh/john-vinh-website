<script>
    let title = "Welcome to Our Website!";
    let subtitle = "We provide high quality products and services.";
</script>

<section class="text-center bg-herobackground text-white py-20 full-width-section">
    <div class="container mx-auto">
        <slot></slot>
    </div>
</section>

<style>
    .full-width-section {
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
    }
</style>