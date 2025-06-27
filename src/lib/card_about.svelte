<script>
    export let techs;
</script>
{#each techs as tec}
     <!-- content here -->

<div class="flex gap-4 " >    
    <img class="w-20" src={tec.foto} alt="">
    <div class="flex flex-col justify-center">
        <p class="font-bold text-lg">{tec.name}</p>
        <p class="f-h4 text-md">{tec.ex}</p>
    </div>
</div>
{/each}