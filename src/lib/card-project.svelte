<script>
    export let projects;
</script>

{#each projects as pro}

    <div class="flex flex-col gap-2 bg-gray-900 p-8 rounded-2xl">
        <img class="pb-2 " src={pro.foto} alt="">
        <div class=" w-40  ">
            
            <h1 class="border-gray-300 border-b  pb-2" >{pro.name}</h1>
            <p class=" f-h4">{pro.name}</p>
            
        </div>
        <p class=" bg-gray-100 text-black rounded-full py-3 px-3 text-xs w-fit ">{pro.mode}</p>
    </div>

{/each}