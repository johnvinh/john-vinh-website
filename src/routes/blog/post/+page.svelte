<script>
    import Title from '../../../components/Title.svelte';

    export let data;
    let post = JSON.parse(data.post);
    $: title = `John Vinh: Software Developer - ${post.title}`;
    let date = new Date(post.created);
    let prettyDate =
        date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
{#if post}
    <Title>
        {post.title}
    </Title>
    <p>{prettyDate}</p>
    <p class="w-fit md:text-2xl lg:w-[75%] mt-10">
        {@html post.content}
    </p>
{/if}
{#if !post}
    <Title>
        Loading...
    </Title>
{/if}