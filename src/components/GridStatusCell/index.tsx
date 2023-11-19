import { computed, defineComponent, PropType } from "vue";

interface IStatusCell {
  value: number;
}
export default defineComponent({
  components: {},
  props: {
    params: {
      type: Object as PropType<IStatusCell>,
      required: true,
    },
  },
  setup(props) {
    const statusValue = props.params.value;
    enum STATUSES {
      "Не доступен" = 0,
      "Доступен" = 1,
    }
    const status = computed(() => STATUSES[statusValue]);
    return {
      status,
    };
  },
  render() {
    return <div>{this.status}</div>;
  },
});
