<script>
    import Hero from "../pages/hero.svelte";
    import About from "../pages/about.svelte";
    import Experience from "../pages/experience.svelte";
    import Project from "../pages/project.svelte";
    import Button from "$lib/button.svelte";
    import Carddo from "$lib/card_text.svelte"; 
    import CardProject from "$lib/card-project.svelte"; 
    import Cardabout from "$lib/card_about.svelte";
    import Header from "../component/header.svelte";
  // import { getLinkColor } from "tsparticles-engine";

 
   
    let projects = [
      {
        foto :"juice.png",
        name : "Little Oasis Juicery",
        mode : "Wordpress",
        status : "Private",
        link : "",
      },
      {
        foto :"luna.png",
        name : "Luna Coffee",
        mode : "Wordpress",
        status : "Visit",
        link : "https://lunacafe.codekraf.com/",
      },
      {
        foto :"londre.png",
        name : "Laundry Pesisir",
        mode : "PHP, Tailwind, Javascript",
        status : "Private",
        link : "",
      },
      {
        foto :"infi.png",
        name : "Infinity",
        mode : "Maintenance",
        status : "Visit",
        link : "https://infinityprogress.id/",
      },
      
    ];

    let does = [
      {
        head :"Graphic Design ",
        desc :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia modi delectus eos minus ullam, nisi illum facilis blanditiis perspiciatis magni?",

      },
      {
        head :"Website Development",
        desc :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia modi delectus eos minus ullam, nisi illum facilis blanditiis perspiciatis magni?",
      },
    
    ];

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

<div id="home">
</div>
<Hero/>
<div class="flex">
  <Button text="Hire Me" className="text-lg px-10 py-1.5 text-black" href="https://www.linkedin.com/in/benny-darmawan-a8a92229a/"/>
</div>


<div id="about" class="mt-40">
  <About />
  <div class="grid grid-cols-4 gap-9 mx-auto w-[22cm] px-3 py-5 " >
    
    <Cardabout {techs} />
    
  </div>
</div>

<Experience/>
  <div class="grid grid-cols-2 gap-5 mx-auto   w-[23cm]   px-3 ">
    <Carddo {does} />
  </div>

<div id="project" class="bg-gray-900 mt-40   rounded-t-[60px]  ">
  <Project/>       
  <div class=" grid grid-cols-2     px-30 pb-60 ">
    <CardProject {projects}/>
  </div>
</div>


<style lang="postcss">
    @reference "tailwindcss";
    :global(html) {
      background-color: theme(--color-gray-100);
    }
  </style>