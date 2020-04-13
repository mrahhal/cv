<template>
  <sheet-section :title="'Cover Letter'">
    <div class="sheet-content-cl">
      <div class="sheet-content-cl-left">
        <div>
          <div>To:</div>
          <div>{{'to' | config}}</div>
        </div>

        <div>
          <div>Position:</div>
          <div>{{'position' | config}}</div>
        </div>
      </div>

      <div class="sheet-content-cl-right">
        <content-cl></content-cl>
      </div>
    </div>
  </sheet-section>
</template>

<style lang="scss" scoped src="./sheet-content-cl.scss"></style>
