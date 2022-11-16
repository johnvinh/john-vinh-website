<script>
    import {page} from "$app/stores";

</script>

<h2 class="text-4xl">
    Oops, something went wrong.
</h2>
<p>
    {$page.error.message} Click <a href="/">here</a> to go back to the homepage!
</p>