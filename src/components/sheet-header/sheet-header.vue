<template>
  <div class="sheet-header">
    <div class="sheet-header-left">
      <img src="@/assets/pic.jpg" />
      <div class="sheet-header-name-title">
        <div class="sheet-header-name">{{'name' | config}}</div>
        <div class="sheet-header-title">{{'title' | config}}</div>
      </div>
    </div>

    <div class="sheet-header-right">
      <div>
        <svg-email></svg-email>
        <span>{{'email' | config}}</span>
      </div>

      <div>
        <svg-globe></svg-globe>
        <span>{{'website' | config}}</span>
      </div>

      <div>
        <svg-github></svg-github>
        <span>https://github.com/{{'githubUsername' | config}}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./sheet-header.scss"></style>
