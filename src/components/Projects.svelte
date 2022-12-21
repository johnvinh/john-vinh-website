<script>
    import Project from './Project.svelte';
    import Subtitle from './Subtitle.svelte';
</script>

<section class="mt-10">
    <Subtitle>
        My Projects
    </Subtitle>
    <p>Here are some of the things I've built!</p>
    <div class="flex flex-col">
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
                 } link="https://github.com/johnvinh/gloomybb" />
        <Project title="NumPuz"
                 info="I created a Java GUI application version of the classic NumPuz game. This game was developed
            for a Java class in college."
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
    </div>
</section>