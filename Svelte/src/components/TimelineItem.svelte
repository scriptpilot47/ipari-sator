  <script lang="ts">
      interface Props {
        filled?: boolean;
        title: string;
        first: boolean;
        last: boolean;
        position: string;
        }
    let { filled = false, title, first = false, last = false, position}: Props = $props();

  </script>
  <li>
    <hr class={`${first ? 'hidden' : ''} ${filled ? 'bg-primary' : ''}`}/>
    <div class={`${position === 'start' ? 'timeline-start' : 'timeline-end'} timeline-box text-xl my-40`}>{title}</div>
    <div class="timeline-middle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class={`${filled ? 'text-primary' : ''} h-10 w-10`}
      >
        <path
          fill-rule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <hr class={`${last ? 'hidden' : ''} ${filled ? 'bg-primary' : ''}`}/>
    </li>