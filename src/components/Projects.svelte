<script>
    import Project from './Project.svelte';
</script>

<section class="mt-10">
    <h2 class="text-center text-3xl">My Projects</h2>
    <p>Here are some of the things I've built!</p>
    <div class="flex flex-col space-x-10">
        <Project title="GloomyBB"
                 info="GloomyBB is a forum software designed to allow users to communicate with ease.
                Users can share their ideas across different categories and forums."
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
                        image: "mariadb-logo.svg"
                    },
                    {
                        id: 4,
                        name: "PHP",
                        image: "php-logo.svg"
                    }
                ]
                 } />
        <Project title="NumPuz"
                 info="I created a Java GUI application version of the classic NumPuz game. This game was developed
            for a Java class in college."
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
        />
    </div>
</section>