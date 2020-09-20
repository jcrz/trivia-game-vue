import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { db } from "../firebase";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		jugadas: [],
		preguntas: [],
		preguntasRandom: [],
	},
	mutations: {
		setJugadas(state, payload) {
			state.jugadas = payload;
		},
		setPreguntas(state, payload) {
			state.preguntas = payload;
		},
		setPreguntasRandom(state, payload) {
			let elegidas = [...payload];
			state.preguntasRandom = elegidas.slice(0, 3);
		},
	},
	actions: {
		getJugadas({ commit }) {
			const jugadas = [];
			db.collection("jugadas")
				.get()
				.then((resp) => {
					resp.forEach((item) => {
						let jugada = item.data();
						jugadas.push(jugada);
					});
				});
			commit("setJugadas", jugadas);
		},
		getPreguntas({ commit }) {
			const preguntas = [];
			db.collection("preguntas")
				.get()
				.then((res) => {
					res.forEach((item) => {
						let pregunta = item.data();
						preguntas.push(pregunta);
					});
					commit("setPreguntas", preguntas);
					commit("setPreguntasRandom", preguntas);
				});
		},
		agregarPregunta({ commit }, datos) {
			console.log(datos);
			let respuestas_array = [
				{ resp: datos.respuestas.correcta, isTrue: true },
				{ resp: datos.respuestas.incorrecta_1, isTrue: false },
				{ resp: datos.respuestas.incorrecta_2, isTrue: false },
				{ resp: datos.respuestas.incorrecta_3, isTrue: false },
			];
			// Desordenamos nuestro array de respuestas
			respuestas_array = respuestas_array.sort(() => {
				return 0.5 - Math.random();
			});
			db.collection("preguntas")
				.add({
					pregunta: datos.pregunta,
					respuestas: respuestas_array,
				})
				.then(() => {
					console.log("Agregada con exito!");
					router.push("/");
				});
		},
		partidaJugada({ commit }, jugadas) {
			// Acción ejecutada luego de responder las 3 preguntas del juego
			if (jugadas.length < 3) {
				console.log("Debes completar todas las preguntas");
				return false;
			}
			// Calcular las respuestas acertadas
			const puntos = jugadas.filter((resp) => resp == "si").length;
			const porcentaje = Math.round((puntos * 100) / 3); // 33,67,100
			// Agregar a nuestra coleccion en firestore
			db.collection("jugadas")
				.add({
					usuario: "Juan",
					puntaje: puntos,
					porcentaje: porcentaje,
				})
				.then(() => {
					console.log("Jugada registrada!");
					router.push("/");
				});
		},
	},
	modules: {},
});
