<script>
    import Project from '/src/components/Project.svelte';
    import Title from '../../components/Title.svelte';
    import MinecraftProject from '../../components/MinecraftProject.svelte';
</script>

<svelte:head>
    <title>Minecraft - John Vinh: Software Developer</title>
</svelte:head>

<section class="mt-10">
    <Title>Minecraft</Title>
    <p>Welcome to the Minecraft corner of my portfolio! As a passionate software developer and an avid Minecraft enthusiast, I discovered I love creating Minecraft content. Inspired by Noxcrew's MC Championship event and fun with friends playing on the Hypixel server, I've been captivated by the limitless potential for creativity and innovation in Minecraft minigames and found that I love making content for people to have fun with and enjoy. Below you can find some of the Minecraft content I've created.</p>
</section>
<section class="flex flex-col">
    <MinecraftProject
        title="One in the Chamber"
        description="A recreation of the classic Minecraft minigame One in the Chamber, where players have one arrow and one life. If you kill a player, you get an arrow. If you get killed, you lose an arrow. The first player to get 20 kills wins!"
        image="/images/one-in-the-chamber.png"
        link="https://github.com/johnvinh/one-in-the-chamber"
    />
</section>