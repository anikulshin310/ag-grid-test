<template>
  <DataGrid />
</template>

<script lang="ts">
import DataGrid from "./components/DataGrid";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default {
  name: "App",
  components: {
    DataGrid,
  },
};
</script>

<style lang="scss"></style>
