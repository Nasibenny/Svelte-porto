<script>
    import Hero from "../pages/hero.svelte";
    import About from "../pages/about.svelte";
    import Experience from "../pages/experience.svelte";
    import Project from "../pages/project.svelte";
    import Cardabout from "$lib/card_about.svelte";
    let techs = [
        { name  : "Svelte",
          foto  : "svelte.svg",   
          ex  : "Framework",   
        },
        {
          name  : "Tailwind",
          foto  : "css.svg",
          ex  : "Frontend",
        },
        {
          name  : "PHP",
          foto  : "php.svg",
          ex  : "Backend",
        },
        {
          name  : "Laravel",
          foto  : "laravel.svg",
          ex  : "Backend",
        },
        {
          name  : "Javascript",
          foto  : "javascript.svg",
          ex  : "Frontend",
        },
        {
          name  : "Mysql",
          foto  : "mysql.svg",
          ex  : "Database",
        },
        {
          name  : "VsCode",
          foto  : "vscode.svg",
          ex  : "Tools",
        },
        {
          name  : "Github",
          foto  : "github.svg",
          ex  : "Deployment",
        },
   
       
    ];
</script>

<Hero/>
<About />

  <div class="grid grid-cols-4 gap-9 mx-auto w-[22cm] px-3 py-5 " >
   
    <Cardabout {techs} />
     
  </div>
<Experience/>
<Project/>
        

 


<style lang="postcss">
    @reference "tailwindcss";
    :global(html) {
      background-color: theme(--color-gray-100);
    }
  </style>