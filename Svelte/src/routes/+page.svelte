<script lang="ts">
    import type { PageProps } from './$types';
    import Legend from "../components/Legend.svelte";
    import Quickproducts from "../components/QuickProducts.svelte";
    import Timeline from "../components/Timeline.svelte";
    import BlogAll from '../components/BlogAll.svelte';
    import ContactUs from '../components/ContactUs.svelte';
    import UseCase from '../components/UseCase.svelte';
    import Location from '../components/Location.svelte';
    import Stats from '../components/Stats.svelte';
    
    let { data }: PageProps = $props();
    console.log(data.blog)
</script>
<div class="">
    <Legend/>
    <!-- <div class="hidden lg:block mb-5"> -->
    <div class="mb-20 hidden sm:block">
    <Stats />
    </div>
    <!-- <UseCase /> -->
    <Quickproducts data={data}/>
    <div class="mt-20 sm:mt-40">
    <Location />
    </div>
    <Timeline/>
    <ContactUs/> 
    <div class="mt-40">
    <BlogAll  data={data}/>
    </div>
</div>