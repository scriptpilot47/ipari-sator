<script lang="ts">
    import type { PageProps } from './$types';
    import Legend from "../components/Legend.svelte";
    import Quickproducts from "../components/QuickProducts.svelte";
    import Timeline from "../components/Timeline.svelte";
    
    let { data }: PageProps = $props();
</script>
<div class="">
    <Legend/>
    <Quickproducts data={data}/>
    <Timeline/>
</div>