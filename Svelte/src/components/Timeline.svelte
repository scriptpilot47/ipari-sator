<script lang="ts">
  import { text } from "@sveltejs/kit";
  import TimelineItem from "./TimelineItem.svelte";
  import Title from "./Title.svelte";

  let scrollPosition = $state(0);
  let timelineStartPoint = $state(1000);

  import { onMount } from "svelte";

  let timelineEl: HTMLUListElement;

  // deeply reactive so per-index writes propagate
  let filledStates = $state([false, false, false, false]);

  onMount(() => {
    const onScroll = () => (scrollPosition = window.scrollY);
    window.addEventListener("scroll", onScroll);

    const items = Array.from(
      timelineEl.querySelectorAll(":scope > li")
    ) as HTMLElement[];

    // hold timers so we only mark filled after a short dwell time
    const timers = new Map<number, number>();

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = items.indexOf(entry.target as HTMLElement);
          if (idx === -1 || filledStates[idx]) continue;

          // require ~90% visibility for "later" trigger
          const visibleEnough = entry.intersectionRatio >= 0.9;

          if (visibleEnough) {
            // start dwell timer (250ms) before committing
            if (!timers.has(idx)) {
              const id = window.setTimeout(() => {
                // re-check in case it left the viewport meanwhile
                if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
                  filledStates[idx] = true; // runes: deep reactive
                  io.unobserve(entry.target); // one-shot
                }
                timers.delete(idx);
              }, 250);
              timers.set(idx, id);
            }
          } else {
            // not visible enough anymore — cancel any pending timer
            const pending = timers.get(idx);
            if (pending) {
              clearTimeout(pending);
              timers.delete(idx);
            }
          }
        }
      },
      {
        // multiple thresholds so we get updates as visibility changes
        threshold: [0, 0.25, 0.5, 0.75, 0.9, 0.95, 1.0],
        root: null,
        rootMargin: "0px" // no early margin; makes it stricter/later
      }
    );

    items.forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
      // cleanup timers
      timers.forEach((id) => clearTimeout(id));
      timers.clear();
    };
  });
</script>

<div class="p-8 bg-base-200 border-y-1">
  <Title text="Rendelés menete" extra="mt-10"/>
  <!-- <p>Scroll Position: {scrollPosition}</p> -->
  <ul class="timeline timeline-vertical" bind:this={timelineEl}>
    <TimelineItem 
      title="Rendelés leadása" 
      description="Válaszd ki a terméket, és add le rendelésed online vagy telefonon." 
      filled={filledStates[0]}
      position="start" 
      first={true} 
      last={false}
    />

    <TimelineItem 
      title="Fizetés és beszerzés" 
      description="A visszaigazoló e-mail után utald el az összeget, és elindítjuk a beszerzést." 
      filled={filledStates[1]} 
      position="end" 
      first={false} 
      last={false}
    />

    <TimelineItem 
      title="Termék átvétele" 
      description="Ha megérkezett, e-mailben és SMS-ben értesítünk az átvételről." 
      filled={filledStates[2]} 
      position="start" 
      first={false} 
      last={false}
    />

    <TimelineItem 
      title="Kiszállítás és összeszerelés" 
      description="Ha ezt kérted, csapatunk kiszállítja és összeszereli a sátrat egyeztetett időpontban." 
      filled={filledStates[3]} 
      position="end" 
      first={false} 
      last={true}
    />
  </ul>
</div>