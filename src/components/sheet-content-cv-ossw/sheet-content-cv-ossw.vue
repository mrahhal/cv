<template>
  <div>
    <sheet-section :title="'Open Source Work'">
      <div class="sheet-content-cv-ossw">
        <div class="sheet-content-cv-ossw-item" v-for="p in projects" :key="p.id">
          <div class="sheet-content-cv-ossw-item-header">
            <svg-github></svg-github>
            <a target="_blank" :href="p.link" class="sheet-content-cv-ossw-item-title">{{p.title}}</a>
          </div>
          <div class="sheet-content-cv-ossw-item-description">{{p.description}}</div>
        </div>
      </div>
    </sheet-section>
    <hr>
    <div class="sheet-content-cv-ossw-more">
      For more: <a target="_blank" :href="'https://github.com/' + githubUserName">https://github.com/{{githubUserName}}</a>
    </div>
  </div>
</template>

<script lang="ts" src="./sheet-content-cv-ossw.ts"></script>
<style lang="scss" scoped src="./sheet-content-cv-ossw.scss"></style>
