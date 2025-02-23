<template>
  <div
    :class="[
      'bg-white rounded-3xl overflow-y-auto mx-auto',
      `mt-${marginTop}`,
      'w-[90%]',
      'mt-[10%]',
      `p-${padding}`,
    ]"
    :style="computedStyles"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "WhiteCard",
  props: {
    marginTop: {
      type: String,
      default: "10",
    },
    height: {
      type: String,
      default: "60vh",
    },
    smHeight: {
      type: String,
      default: "70vh",
    },
    padding: {
      type: String,
      default: "8",
    },
    customStyles: {
      type: Object as PropType<Record<string, string>>,
      default: () => ({}),
    },
  },
  computed: {
    computedStyles() {
      return {
        height: this.height,
        ...this.customStyles,
      };
    },
  },
});
</script>
