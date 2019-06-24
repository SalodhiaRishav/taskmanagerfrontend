<template>
    <div>
        <app-bargraph></app-bargraph>


        <app-Linegraph></app-Linegraph>


    </div>
</template>

<script>
 import bargraph from './bargraph.vue';
 import LineGraph from './LineGraph.vue';
export default {

components: {
  appBargraph:bargraph,
  appLinegraph:LineGraph
  },
}
</script>

<style>

</style>
