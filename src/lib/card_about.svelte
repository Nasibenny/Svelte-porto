<script>
    export let techs;
</script>
{#each techs as tec}
     <!-- content here -->

<div class="flex gap-3   " >    
    <img class="w-17" src={tec.foto} alt="">
    <div class="flex flex-col justify-center">
        <p class="font-bold">{tec.name}</p>
        <p class="f-h4">{tec.ex}</p>
    </div>
</div>
{/each}