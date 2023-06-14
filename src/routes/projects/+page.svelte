<script>
    import Project from '/src/components/Project.svelte';
    import Title from '../../components/Title.svelte';
    import Hero from "../../components/Hero.svelte";
</script>

<svelte:head>
    <title>Projects - John Vinh: Software Developer</title>
</svelte:head>

<section class="mt-10">
    <Title>
        My Projects
    </Title>
    <p>Here are some of the things I've built!</p>
    <div class="flex flex-col">
        <Hero>
            <Project title="GloomyBB"
                     info="GloomyBB is a forum software designed to allow users to communicate with ease.
                Users can share their ideas across different categories and forums."
                     titleImage="gloomybb-title.svg"
                     mainImage="gloomybb.png"
                     technologies={
                 [
                    {
                        id: 1,
                        name: "HTML5",
                        image: "html5-logo.svg"
                    },
                    {
                        id: 2,
                        name: "JavaScript",
                        image: "js-logo.svg"
                    },
                    {
                        id: 3,
                        name: "MariaDB",
                        image: "mariadb-logo-black.svg"
                    },
                    {
                        id: 4,
                        name: "PHP",
                        image: "php-logo.svg"
                    }
                ]
                 } link="https://github.com/johnvinh/gloomybb"/>
        </Hero>
        <Project title="Personal Portfolio"
                 info="This website! My website was created using SvelteKit, Tailwind CSS, and a PocketBase backend."
                 mainImage="website.png"
                 technologies={
                 [
                     {
                         id: 1,
                         name: "Svelte",
                         image: "svelte.svg"
                     },
                     {
                         id: 2,
                         name: "Tailwind CSS",
                         image: "tailwind.svg"
                     },
                     {
                         id: 3,
                         name: "PocketBase",
                         image: "pocketbase.svg"
                     },
                     {
                         id: 4,
                         name: "HTML",
                         image: "html5-logo.svg"
                     },
                 ]
                 }
                 showTitleImage={false}
                 link="https://github.com/johnvinh/john-vinh-website"
        />
        <Hero>
            <Project title="NumPuz"
                     info="NumPuz is a classic puzzle game where the player has to arrange the numbers in order. This game was built using Java Swing."
                     titleImage="num-puz-title.svg"
                     mainImage="numpuz.png"
                     technologies={
                 [
                    {
                        id: 1,
                        name: "Java",
                        image: "java-logo.svg"
                    }
                ]
                 }
                     link="https://github.com/johnvinh/num-puz"
            />
        </Hero>
        <Project title="Conway's Game of Life"
                 info="Conway's Game of Life is a cellular automaton devised by the British mathematician John Horton Conway in 1970.
                     The user provides an initial input of 'alive' cells and the game automatically evolves based on the rules. This is am implementation
of the simulation using Java Swing."
                 titleImage="conway-title.svg"
                 mainImage="conway.png"
                 technologies={
                    [
                        {
                            id: 1,
                            name: "Java",
                            image: "java-logo.svg"
                        }
                    ]
                    }
                 link="https://github.com/johnvinh/conways-game-of-life"
        />
    </div>
</section>