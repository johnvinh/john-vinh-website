<script>
    import {onMount} from 'svelte';
    import {browser} from '$app/environment';

    let textarea;

    onMount(() => {
        if (browser) {
            import('tinymce/tinymce').then(module => {
                const tinymce = module.default;
                import('tinymce/themes/silver');
                import('tinymce/plugins/link');
                import('tinymce/plugins/table');

                tinymce.init({
                    target: textarea,
                    plugins: ['link', 'table' ,'lists'], // add more plugins as needed
                    toolbar: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | outdent indent | link table | numlist bullist', // customize the toolbar as needed
                    base_url: '/node_modules/tinymce', // point to tinymce in node_modules
                    suffix: '', // no suffix for modern browsers
                    // add more options as needed
                });
            });
        }
    });

</script>

<textarea class="block w-full h-screen" name="content" id="content" bind:this={textarea}></textarea>