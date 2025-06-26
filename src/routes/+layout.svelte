<script>
  let { children } = $props();
  import "../app.css";
  import Header from "../component/header.svelte";
  import Footer from "../component/footer.svelte";
  
</script>
<!-- {@render children()} -->
<div class="relative flex flex-col w-full min-h-screen  no-scrollbar  custom-scroll "> 
  <div class="">
    <Header />
  </div>
  <slot />
    <Footer />
  </div>