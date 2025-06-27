<script>
    export let does;
</script>

{#each does as doe}

    <div class="flex flex-col gap-2   bg-slate-600/20  shadow-lg  px-8 py-8  rounded-2xl">
         <h1 class="border-gray-300 border-b  pb-4 text-xl" >{doe.head}</h1>
         <p class=" f-h4 text-md pt-2">{doe.desc}</p>
    </div>

{/each}