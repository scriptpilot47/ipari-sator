  <script lang="ts">
    import TimelineItem from "./TimelineItem.svelte";
    
    // Create a store to hold the scroll position
    let scrollPosition = $state(0);
    
    const scrollLimit = 960;

    // Track scroll event on window
    import { onMount } from 'svelte';

    onMount(() => {
        const handleScroll = (event: Event) => {
                scrollPosition = window.scrollY;
            };

        window.addEventListener('scroll', handleScroll);

        // Cleanup when component is destroyed
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

  <div class="p-8 bg-base-200">
    <h1 class="text-center text-bold text-2xl md:text-4xl font-bold text-base-content mt-10">Rendeles menete</h1>
<p>Scroll Position: {scrollPosition}</p>
<ul class="timeline timeline-vertical">
    <TimelineItem title={'Macbook'} filled={scrollPosition > 960 ? true : false}  position={'start'} first={true} last={false}/>
    <TimelineItem title={'Macbook'} filled={scrollPosition > 1460 ? true : false} position={'end'} first={false} last={false}/>
    <TimelineItem title={'Macbook'} filled={scrollPosition > 1860 ? true : false} position={'start'} first={false} last={false}/>
    <TimelineItem title={'Macbook'} filled={scrollPosition > 2260 ? true : false} position={'end'} first={false} last={true}/>
</ul>
  </div>