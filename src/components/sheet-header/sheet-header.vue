<template>
  <div class="sheet-header">
    <div class="sheet-header-left">
      <img src="@/assets/pic.png" />
      <div class="sheet-header-name-title">
        <div class="sheet-header-name">{{'name' | config}}</div>
        <div class="sheet-header-title">{{'title' | config}}</div>
      </div>
    </div>

    <div class="sheet-header-right">
      <div>
        <svg-email></svg-email>
        <div>
          <a target="_blank" :href="'mailto://' + $options.filters.config('email')">{{'email' | config}}</a>
        </div>
      </div>

      <div>
        <svg-globe></svg-globe>
        <div>
          <a target="_blank" :href="'website' | config">{{'website' | config}}</a>
        </div>
      </div>

      <div>
        <svg-github></svg-github>
        <div>
          <a
            target="_blank"
            :href="'https://github.com/' + $options.filters.config('githubUsername')"
          >@{{'githubUsername' | config}}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped src="./sheet-header.scss"></style>
