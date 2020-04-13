<template>
  <sheet-section :title="'Memberships and Certifications'">
    <div class="sheet-content-cv-certs">
      <div class="sheet-content-cv-certs-item" v-for="cert in certs" :key="cert.id">
        <div class="sheet-content-cv-certs-item-left">
          <div class="sheet-content-cv-certs-item-year">{{cert.year}}</div>
        </div>
        <div class="sheet-content-cv-certs-item-right">
          <div class="sheet-content-cv-certs-item-title">{{cert.title}}</div>
        </div>
      </div>
    </div>
  </sheet-section>
</template>

<script lang="ts" src="./sheet-content-cv-certs.ts"></script>
<style lang="scss" scoped src="./sheet-content-cv-certs.scss"></style>
