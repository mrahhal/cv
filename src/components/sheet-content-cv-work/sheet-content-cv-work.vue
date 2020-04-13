<template>
  <sheet-section :title="'Work'">
    <div class="sheet-content-cv-work">
      <div class="sheet-content-cv-work-item" v-for="work in works" :key="work.id">
        <div class="sheet-content-cv-work-item-left">
          <div class="sheet-content-cv-work-item-place">{{work.place}}</div>
          <div class="sheet-content-cv-work-item-year">{{work.year}}</div>
        </div>
        <div class="sheet-content-cv-work-item-right">
          <div class="sheet-content-cv-work-item-title">{{work.title}}</div>
          <div class="sheet-content-cv-work-item-content">
            <VueShowdown :markdown="work.content" />
          </div>
        </div>
      </div>
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-work.ts"></script>
<style lang="scss" scoped src="./sheet-content-cv-work.scss"></style>
