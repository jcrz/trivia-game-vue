import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { db } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		agregarPregunta({ commit }, datos) {
			console.log(datos);
			db.collection("preguntas")
				.add({
					pregunta: datos.pregunta,
					respuestas: {
						correcta: datos.respuestas.correcta,
						incorrecta_1: datos.respuestas.incorrecta_1,
						incorrecta_2: datos.respuestas.incorrecta_2,
						incorrecta_3: datos.respuestas.incorrecta_3,
					},
				})
				.then(() => {
					alert("Agregada con exito!");
				});
		},
	},
	modules: {},
});
