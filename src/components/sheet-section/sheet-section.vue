<template>
  <div class="sheet-section">
    <div class="sheet-section-title">
      {{title}}
    </div>

    <div class="sheet-section-body">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SheetSection extends Vue {
  @Prop() title!: string;
}
</script>

<style lang="scss" scoped src="./sheet-section.scss"></style>
