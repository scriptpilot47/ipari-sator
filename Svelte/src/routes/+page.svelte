<script lang="ts">
    import type { PageProps } from './$types';
    import Legend from "../components/Legend.svelte";
    import Quickproducts from "../components/QuickProducts.svelte";
    import Timeline from "../components/Timeline.svelte";
    import BlogAll from '../components/BlogAll.svelte';
    import ContactUs from '../components/ContactUs.svelte';
    
    let { data }: PageProps = $props();
    console.log(data.blog)
</script>
<div class="">
    <Legend/>
    <Quickproducts data={data}/>
    <Timeline/>
    <ContactUs /> 
    <div class="mt-40">
    <BlogAll  data={data}/>
    </div>
</div>