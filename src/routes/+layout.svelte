<script>
  let { children } = $props();
  import "../app.css";
  import Header from "../component/header.svelte";
  import Footer from "../component/footer.svelte";
</script>
<!-- {@render children()} -->
<div class="relative flex flex-col  mx-auto max-w-[1400px] w-full min-h-screen "> 
  <div class="">
    <Header />
  </div>
  <slot />
    <Footer />
  </div>