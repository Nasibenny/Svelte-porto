<script>
    export let projects;

    const getStatusColor = (status) => {
    if (status === "Private") return "text-red-400 ";
    if (status === "Visit") return "";
    return "text-gray-400";
  };
</script>

{#each projects as pro}

    <div class="flex flex-col gap-4  p-8 rounded-2xl">
        <img class="pb-2 rounded-2xl" src={pro.foto} alt="">
        <div class=" w-80 ">
            
            <h1 class="border-gray-300 border-b text-2xl pb-2" >{pro.name}</h1>
            <p class=" f-h4 text-lg">{pro.mode}</p>
            
        </div>
        <a href={pro.link} class={`bg-gray-100  text-black rounded-full py-2 px-10 text-lg w-fit cursor-pointer ${getStatusColor(pro.status)} `}>    
            {pro.status}        
        </a>
    </div>

{/each}