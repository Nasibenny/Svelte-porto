<script>
     let socials = [
      {
        icon : "ig.svg",
        social : "",
        link : "https://www.instagram.com/bwnnz_/",
      },
      {
        icon : "github.svg",
        social : "",
        link : "https://github.com/Nasibenny",
      },
      {
        icon : "linkedln.svg",
        social : "",
        link : "https://www.linkedin.com/in/benny-darmawan-a8a92229a/",
      },
    ];
</script>

<footer class="max-w-[1400px] mx-40 py-20">
<div class="">

    <div class="flex flex-col gap-10 " >
       
        <h4 class="  f-h4 text-center text-sm">© 2025 — Copyright
            All Rights reserved</h4>
        
        <div class="flex flex-row gap-10 justify-center">
            
            {#each socials as social}
             <!-- content here -->
            <img src={social.icon} class="w-10 cursor-pointer" alt="">
              
            {/each}

        </div>
    </div>
</div>

</footer>