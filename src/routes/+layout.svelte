<script>
  let { children } = $props();
  import "../app.css";
  import Header from "../component/header.svelte";
  import Footer from "../component/footer.svelte";
  

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
<!-- {@render children()} -->
<div class="relative flex flex-col w-full min-h-screen  no-scrollbar  custom-scroll "> 
 
  <div class="">
    <!-- <Header /> -->
    <Header tabs={tabs} />
    <slot />
  </div>
    <Footer />
  </div>