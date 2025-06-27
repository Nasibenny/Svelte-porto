<script>
    export let text ="click";
    export let href = '';

    export let className ='';
</script>

<a 
            href= {href};
       
            class="flex mx-auto overflow-hidden px-5 py-2  rounded-full bg-white text-slate-950" >
            <h4 class={"relative z-9 "+ className}>{text}</h4>
</a>