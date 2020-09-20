<template>
  <div class="game bg-success text-white rounded">
    <!-- TITULO -->
    <div class="mt-5 mb-4 pt-3" style="width:80%; margin:0px auto;">
      <h4>Hola @usuario</h4>
      <p>Responde las siguientes preguntas y compite por el primer puesto en nuestro listado.</p>
    </div>
    <!-- FORMULARIO DE JUEGO -->
    <div class="mt-2 text-dark pb-4" style="width:80%; margin:0px auto;">
      <div class="card">
        <div class="card-body">
          <h6>Pregunta</h6>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="Radio1" value="option2" />
            <label class="form-check-label" for="Radio1">Respuesta 1</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="Radio2" value="option2" />
            <label class="form-check-label" for="Radio2">Respuesta 2</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="Radio3" value="option2" />
            <label class="form-check-label" for="Radio3">Respuesta 3</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="exampleRadios" id="Radio4" value="option2" />
            <label class="form-check-label" for="Radio4">Respuesta 4</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Game",
};
</script>

<style scoped>
</style>