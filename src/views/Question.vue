<template>
  <div class>
    <!-- TITULO -->
    <div class="mt-5 mb-4" style="width:80%; margin:0px auto;">
      <h2>Puedes registrar una nueva pregunta</h2>
      <p>Añade la respuesta correcta junto a 3 incorrectas.</p>
    </div>

    <!-- FORMULARIO -->
    <div class="card bg-info" style="width:80%; margin:0px auto;">
      <div class="card-body">
        <form @submit.prevent="agregarPregunta(dataPregunta)">
          <!-- PREGUNTA -->
          <div class="form-group row">
            <label for="pregunta" class="col-sm-2 col-form-label text-white">Pregunta</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="pregunta" v-model="pregunta" />
            </div>
          </div>
          <hr>
          <div class="mb-3 font-weight-bold text-warning">
            <p>Respuestas</p>
          </div>
          <!-- RESPUESTA CORRECTA -->
          <div class="form-group row">
            <label for="respuesta" class="col-sm-2 col-form-label text-white">Correcta</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="respuesta" v-model="respuesta_correcta"/>
            </div>
          </div>
          <!-- RESPUESTA INCORRECTA 1 -->
          <div class="form-group row">
            <label for="respuesta2" class="col-sm-2 col-form-label">Incorrecta 1</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="respuesta2" v-model="respuesta_incorrecta_1"/>
            </div>
          </div>
          <!-- RESPUESTA INCORRECTA 2 -->
          <div class="form-group row">
            <label for="respuesta3" class="col-sm-2 col-form-label">Incorrecta 2</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="respuesta3" v-model="respuesta_incorrecta_2"/>
            </div>
          </div>
          <!-- RESPUESTA INCORRECTA 3 -->
          <div class="form-group row">
            <label for="respuesta4" class="col-sm-2 col-form-label">Incorrecta 3</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="respuesta4" v-model="respuesta_incorrecta_3"/>
            </div>
          </div>
          <br>
          <div>
            <button class="btn btn-warning px-4" type="submit">Agregar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Question',
  data() {
    return {
      pregunta: '',
      respuesta_correcta: '',
      respuesta_incorrecta_1: '',
      respuesta_incorrecta_2: '',
      respuesta_incorrecta_3: '',
    }
  },
  computed: {
    dataPregunta() {
      const data = {
          pregunta: this.pregunta,
          respuestas: {
            correcta: this.respuesta_correcta,
            incorrecta_1: this.respuesta_incorrecta_1,
            incorrecta_2: this.respuesta_incorrecta_2,
            incorrecta_3: this.respuesta_incorrecta_3,
          }
        }
      return data; 
    }
  },
  methods: {
    ...mapActions(['agregarPregunta'])
  }
}
</script>