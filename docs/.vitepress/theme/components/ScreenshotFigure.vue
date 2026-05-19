<script setup lang="ts">
withDefaults(
  defineProps<{
    src: string;
    alt: string;
    caption?: string;
    width?: string;
    maxWidth?: string;
    align?: "left" | "center" | "right";
  }>(),
  {
    width: "100%",
    maxWidth: "900px",
    align: "center",
  },
);

function alignmentClass(align: string) {
  return `align-${align}`;
}
</script>

<template>
  <figure
    class="doc-screenshot"
    :class="alignmentClass(align)"
    :style="{ '--screenshot-width': width, '--screenshot-max-width': maxWidth }"
  >
    <a class="doc-screenshot-link" :href="src" target="_blank" rel="noreferrer">
      <img :src="src" :alt="alt" loading="lazy" />
      <span class="doc-screenshot-hint">Open full size</span>
    </a>
    <figcaption v-if="caption">{{ caption }}</figcaption>
  </figure>
</template>
