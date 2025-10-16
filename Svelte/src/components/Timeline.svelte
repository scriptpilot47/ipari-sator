  <script lang="ts">
    import { text } from "@sveltejs/kit";
    import TimelineItem from "./TimelineItem.svelte";
    import Title from "./Title.svelte";
    
    // Create a store to hold the scroll position
    let scrollPosition = $state(0);
    
    let timelineStartPoint = $state(1000);

    // Track scroll event on window
    import { onMount } from 'svelte';

    onMount(() => {
        let screenWidth = window.innerWidth;

        if (screenWidth > 767 && screenWidth < 1535) {
          timelineStartPoint = 1150;
        } else if (screenWidth > 1535) {
          timelineStartPoint = 1000;
        } else {
          timelineStartPoint = 750
        }

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

  <div class="p-8 bg-base-200 border-y-1">
    <Title text="Rendeles menete" extra="mt-10"/>
<!-- <p>Scroll Position: {scrollPosition}</p> -->
<ul class="timeline timeline-vertical">
<TimelineItem 
  title="Rendelés leadása" 
  description="Válaszd ki a terméket, és add le rendelésed online vagy telefonon." 
  filled={scrollPosition > timelineStartPoint}
  position="start" 
  first={true} 
  last={false}
/>

<TimelineItem 
  title="Fizetés és beszerzés" 
  description="A visszaigazoló e-mail után utald el az összeget, és elindítjuk a beszerzést." 
  filled={scrollPosition > timelineStartPoint + 400} 
  position="end" 
  first={false} 
  last={false}
/>

<TimelineItem 
  title="Termék átvétele" 
  description="Ha megérkezett, e-mailben és SMS-ben értesítünk az átvételről." 
  filled={scrollPosition > timelineStartPoint + 850} 
  position="start" 
  first={false} 
  last={false}
/>

<TimelineItem 
  title="Kiszállítás és összeszerelés" 
  description="Ha ezt kérted, csapatunk kiszállítja és összeszereli a sátrat egyeztetett időpontban." 
  filled={scrollPosition > timelineStartPoint + 1300} 
  position="end" 
  first={false} 
  last={true}
/>
</ul>
  </div>