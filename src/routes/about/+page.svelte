<script>
    import Title from '../../components/Title.svelte';
    import Subtitle from '../../components/Subtitle.svelte';
</script>

<svelte:head>
    <title>About - John Vinh: Software Developer</title>
</svelte:head>

<Title>
    About Me
</Title>

<div class="text-lg space-y-8">
    <section class="space-y-4">
        <figure class="text-center">
            <img src="/images/me.png" class="w-1/3 h-1/3 lg:w-1/6 lg:h-1/6 mx-auto rounded-full" alt="John Vinh">
            <figcaption class="text-gray-500"><em>John Vinh</em></figcaption>
        </figure>
        <Subtitle>
            Early On
        </Subtitle>
        <p>
            I've been interested in building since I was around 10 years old. I started following YouTube tutorials on making basic websites with just HTML in the early 2010s. I followed up on my interest by learning Python in high school using various sources like Codecademy and YouTube videos. I used Python to automate tedious tasks and make scripts for online browser games I play.
        </p>
    </section>
    <section class="space-y-4">
        <Subtitle>High School</Subtitle>
        <p>
            I took a computer science class in high school starting in grade 10. We used Visual Basic and ActionScript, some not-so-popular languages. I loved it, and I also ended up taking computer science classes in grades 11 and 12. In each of these classes, I had a final project that involved working with 3rd-grade students and using their ideas and drawings to create a flash game with ActionScript. In these classes, my love for programming started to grow.
        </p>
    </section>
    <section class="space-y-4">
        <Subtitle>
            Now
        </Subtitle>
        <p>
            I'm a student at Algonquin College in the Computer Engineering Technology - Computing Science program. I recently learned I have a passion for making things for other people to have fun with and enjoy after watching the "Minecraft Championship" event on YouTube and playing on the Hypixel Minecraft server with friends. After graduating, I plan to get a software developer job in the tech industry.
        </p>
    </section>
</div>
