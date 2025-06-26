<script>
    export let does;
</script>

{#each does as doe}

    <div class="flex flex-col gap-2 bg-gray-900 p-8 rounded-2xl">
         <h1 class="border-gray-300 border-b  pb-2" >{doe.head}</h1>
         <p class=" f-h4">{doe.desc}</p>
    </div>

{/each}