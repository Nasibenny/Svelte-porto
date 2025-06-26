<script>
  import Button from "$lib/button.svelte";
   export let buts;
   export let y;
   let tabs = [
       { name  : "Home",
         link  : "#home",   
       },
       {
         name  : "About",
         link  : "#about",
       },
       {
         name  : "Project",
         link  : "#project",
       },
   ];
   
</script>
<header class={'sticky z-[10]  top-0 duration-200 px-6 flex items-center justify-center border border-solid ' +
(y > 0 ? 'py-4 bg-slate-950 border-blue-600' : 'py-7 bg-transparent border-transparent ')}>
   
   <div class="w-1/3 "></div>
  
   <div class="w-1/3 sm:flex items-center justify-center gap-12 ">
           {#each tabs as tab}
           <a href={tab.link} class="duration-200 hover:text-blue-600">
               <p >{tab.name}</p>
           </a>
           {/each}
   </div> 
   

   <div class="w-1/3 flex justify-end ">


     <Button text="Download CV" href=""/>
        
   
       <!-- <a 
           href="_blank"
           target="_blank"
           class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-slate-950">
           <div class="absoulte top-0 right-full w-full bg-blue-600 opacity-20 group-hover:translate-x-full x-0 duration-200"></div>
           <h4 class="relative z-9 ">Download CV</h4>
       </a> -->
   </div>
</header>