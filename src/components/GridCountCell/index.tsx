import { computed, defineComponent, PropType } from "vue";
import styles from "./index.module.scss";
interface ICountCell {
  value: number;
}
export default defineComponent({
  components: {},
  props: {
    params: {
      type: Object as PropType<ICountCell>,
      required: true,
    },
  },
  setup(props) {
    const cellColor = computed(() => {
      if (props.params.value < 5) return styles.red;
      if (props.params.value > 20) return styles.green;
      else return styles.yellow;
    });
    return {
      cellColor,
    };
  },
  render() {
    return <div class={[styles.cell, this.cellColor]} />;
  },
});
