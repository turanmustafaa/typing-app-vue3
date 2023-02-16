<template>
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Sonuçlar</h5>
      </div>
      <div class="modal-body">
        <p>Dogru puanı : {{ trueScore }}</p>
        <p>yanlış puanı : {{ falseScore }}</p>
        <p>Fena degil...</p>
      </div>
      <div class="modal-footer">
        <button @click="[showWords(),$emit('some-event')]" type="button" class="btn btn-primary">tekrar dene</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  export default {
    props : ["trueScore","falseScore","showWords","returningVal"],
  }
</script>
<style>
.modal {
  display: block;
  background-color: rgba(0,0,0, 0.4)
}
</style>