<script lang="ts">
    import BlogItem from "./BlogItem.svelte";
    import Title from "./Title.svelte";
    interface Props {
        data: any;
        extra?: any;
    }
    let { data,extra }: Props = $props();
</script>
<div class="max-w-300 mx-auto">
<Title text='Blog posztjaink' extra='mt-5 pb-10 bg-base-100'/>
<ul class={`list gap-3 ${extra}`}>
    {#if data}
        {#each data.blog as post}
            <BlogItem title={post.title} description={post.description} id={post.id} img_url={post.cover_image_url}/> 
        {/each}
    {/if}
</ul>
</div>