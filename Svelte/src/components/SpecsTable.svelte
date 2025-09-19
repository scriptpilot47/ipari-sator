<script lang="ts">
  interface Props {
    material: string;
    dimensions: string;
    color: string;
    area: string;
  }
  
  let { material, dimensions, color, area }: Props = $props();
</script>
<div class="overflow-x-auto my-auto">
  <table class="table table-zebra">
    <!-- head -->
    <tbody>
      <!-- row 1 -->
      <tr>
        <td>Anyag</td>
        <td>{material}</td>
      </tr>
      <!-- row 2 -->
      <tr>
        <td>Szin</td>
        <td>{color}</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <td>Terulet</td>
        <td>{area}</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <td>Meret (SZ,H,M)</td>
        <td>{dimensions}</td>
      </tr>
    </tbody>
  </table>
</div>