<template>
  <div class="home">
    <!-- PLAY -->
    <div class="card" style="width:60%; margin: 50px auto">
      <div class="card-body p-4 bg-success text-white text-center">
        <svg
          @click="jugar"
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          class="bi bi-play-fill play"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
          />
        </svg>
        <h5>JUEGA UNA TRIVIA Y PONTE A PRUEBA</h5>
        <p>Presiona Play para comenzar a jugar</p>
      </div>
    </div>

    <!-- LISTADO -->
    <div style="width: 80%; margin:0px auto">
      <!-- BUSCADOR -->
      <div class="input-group float-right my-3" style="width:40%">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Buscar</span>
        </div>
        <input
          v-model="usuarioBuscado"
          type="text"
          class="form-control"
          placeholder="Usuario"
          aria-label="Usuario"
          aria-describedby="basic-addon1"
        />
      </div>

      <!-- TABLA -->
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Puntaje</th>
              <th scope="col">Porcentaje</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(jugada, index) in filtrarJugadas" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ jugada.usuario }}</td>
              <td>{{ jugada.puntaje + '/3' }}</td>
              <td>{{ jugada.porcentaje + '%'}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      usuarioBuscado: "",
    };
  },
  created() {
    this.getJugadas();
  },
  methods: {
    jugar() {
      this.$router.push("/game");
    },
    ...mapActions(["getJugadas"]),
  },
  computed: {
    ...mapState(["jugadas"]),
    filtrarJugadas() {
      if (this.usuarioBuscado != "") {
        const jugador = this.jugadas.filter(
          (item) => item.usuario == this.usuarioBuscado
        );
        return jugador;
      }
      return this.jugadas;
    },
  },
};
</script>

<style scoped>
</style>
