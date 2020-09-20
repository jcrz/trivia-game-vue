<template>
  <div class="game bg-success text-white rounded">
    <!-- TITULO -->
    <div class="mt-5 mb-4 pt-3" style="width:80%; margin:0px auto;">
      <h4>Hola @usuario</h4>
      <p>Responde las siguientes preguntas y compite por el primer puesto en nuestro listado.</p>
    </div>
    <!-- FORMULARIO DE JUEGO -->
    <form @submit.prevent="partidaJugada(resultados)">
      <div class="mt-2 text-dark pb-4" style="width:80%; margin:0px auto;">
        <div class="card" v-for="(item, index) in preguntasRandom" :key="index">
          <div class="card-body">
            <h6>{{ item.pregunta }}</h6>
            <div class="form-check" v-for="(respuesta, i) in item.respuestas" :key="i">
              <input
                v-model="resultados[index]"
                class="form-check-input"
                type="radio"
                :name="'radio'+index"
                :id="'opc'+i"
                :value="respuesta.isTrue ? 'si' : 'no'"
              />
              <label class="form-check-label">{{ respuesta.resp }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="btn btn-warning px-4" type="submit">Termine</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Game",
  data() {
    return {
      resultados: [],
    };
  },
  created() {
    this.getPreguntas();
  },
  computed: {
    ...mapState(["preguntasRandom"]),
  },
  methods: {
    ...mapActions(["getPreguntas", "partidaJugada"]),
  },
};
</script>

<style scoped>
</style>