<script lang="ts">
    import type { PageProps } from './$types';
    import Title from '../../components/Title.svelte';
    import BlogAll from '../../components/BlogAll.svelte';

    let { data }: PageProps = $props();
</script>
<div class="min-h-screen bg-base-100">
<BlogAll  data={data} extra={'min-h-screen bg-base-200 rounded-t-xl'}/>
</div>