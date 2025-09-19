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

  <div class="p-8 bg-base-200">
    <Title text="Rendeles menete" extra="mt-10"/>
<!-- <p>Scroll Position: {scrollPosition}</p> -->
<ul class="timeline timeline-vertical">
    <TimelineItem title={'Rendeles leadasa'} description={'Add le rendelesedet az altalat valasztott termekre. Ha meg kerdesed maradt, nyugodtan telefonalj kollegainknak, akik segitenek a megfelelo sator kivalasztasaban.'} filled={scrollPosition >  timelineStartPoint ? true : false}  position={'start'} first={true} last={false}/>
    <TimelineItem title={'Beszerzes megkezdese'} description='A visszaigazolo email erkezese utan nincs mas dolgod mint varni, amig mi beszerezzuk a termeket' filled={scrollPosition > timelineStartPoint + 400 ? true : false} position={'end'} first={false} last={false}/>
    <TimelineItem title={'Termek atveheto'} description='Amint beerkezett hozzank, ertesitunk emailben es SMS-ben is.' filled={scrollPosition > timelineStartPoint + 850 ? true : false} position={'start'} first={false} last={false}/>
    <TimelineItem title={'Kiszallitas es osszeszereles (opcionalis)'} description='Amennyiben ezt az opciot is kerted a termek rendelesnel, csapatunk az elore egyeztetett idopontban kiszallitja es osszerakja a satrat.' filled={scrollPosition > timelineStartPoint + 1300 ? true : false} position={'end'} first={false} last={true}/>
</ul>
  </div>