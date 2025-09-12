  <script lang="ts">
    import TimelineItem from "./TimelineItem.svelte";
    
    // Create a store to hold the scroll position
    let scrollPosition = $state(0);
    
    const timelineStartPoint = 720;

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
<!-- <p>Scroll Position: {scrollPosition}</p> -->
<ul class="timeline timeline-vertical">
    <TimelineItem title={'Rendeles leadasa'} filled={scrollPosition >  timelineStartPoint ? true : false}  position={'start'} first={true} last={false}/>
    <TimelineItem title={'Beszerzes megkezdese'} filled={scrollPosition > timelineStartPoint + 350 ? true : false} position={'end'} first={false} last={false}/>
    <TimelineItem title={'Termek atveheto'} filled={scrollPosition > timelineStartPoint + 800 ? true : false} position={'start'} first={false} last={false}/>
    <TimelineItem title={'Kiszallitas es osszeszereles (opcionalis)'} filled={scrollPosition > timelineStartPoint + 1200 ? true : false} position={'end'} first={false} last={true}/>
</ul>
  </div>