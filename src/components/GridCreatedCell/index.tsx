import { computed, defineComponent, PropType } from "vue";

interface ICreatedCell {
  value: string;
}
export default defineComponent({
  components: {},
  props: {
    params: {
      type: Object as PropType<ICreatedCell>,
      required: true,
    },
  },
  setup(props) {
    const formatedDate = computed(() => {
      const date = new Date(+props.params.value);
      const formattedTime = date.toLocaleTimeString("ru-RU", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      return formattedTime;
    });
    return {
      formatedDate,
    };
  },
  render() {
    return <div>{this.formatedDate}</div>;
  },
});
