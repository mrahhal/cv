<template>
  <sheet-section :title="'Cover Letter'">
    <div class="cl-section">
      <div class="cl-section-left">
        <div>
          <div>To:</div>
          <div>{{'to' | config}}</div>
        </div>

        <div>
          <div>Position:</div>
          <div>{{'position' | config}}</div>
        </div>
      </div>

      <div class="cl-section-right">
        <content-cl></content-cl>
      </div>
    </div>
  </sheet-section>
</template>

<style lang="scss" scoped src="./cl-section.scss"></style>
