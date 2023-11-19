import { defineComponent } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import { mockdata } from "../../mockdata";
import GridCountCell from "../GridCountCell";
import GridStatusCell from "../GridStatusCell";
import GridCreatedCell from "../GridCreatedCell";

export default defineComponent({
  components: {
    AgGridVue,
    GridCountCell,
    GridStatusCell,
    GridCreatedCell,
  },
  setup() {
    const rowData = mockdata;
    const columnDefs = [
      {
        field: "id",
        filter: "agNumberColumnFilter",
        floatingFilter: true,
        sortable: true,
        type: "numericColumn",
      },
      { field: "name", filter: "agTextColumnFilter", floatingFilter: true, sortable: true },
      { field: "created", cellRenderer: "GridCreatedCell", sortable: true },
      { field: "count", cellRenderer: "GridCountCell", sortable: true },
      { field: "status", filter: "GridStatusFilter", cellRenderer: "GridStatusCell", sortable: true },
    ];

    return { rowData, columnDefs };
  },
  render() {
    return (
      <div>
        <ag-grid-vue
          rowData={this.rowData}
          columnDefs={this.columnDefs}
          pagination={true}
          style="width: 100%; height: 600px"
          class="ag-theme-alpine"
        ></ag-grid-vue>
      </div>
    );
  },
});
