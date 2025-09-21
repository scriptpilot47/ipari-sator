<script lang="ts">
    import BlogItem from "./BlogItem.svelte";
    import Title from "./Title.svelte";
    interface Props {
        data: any;
    }
    let { data }: Props = $props();
</script>
<div class="max-w-400 mx-auto bg-base-200">
<Title text='Blog posztjaink' extra='mt-5 pb-10 bg-base-100'/>
<ul class="list bg-base-100 gap-3">
    {#if data}
        {#each data.blog as post}
            <BlogItem title={post.title} description={post.description} id={post.id} img_url={post.cover_image_url}/> 
        {/each}
    {/if}
</ul>
</div>