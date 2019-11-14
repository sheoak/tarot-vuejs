<template lang="pug">
  section.section
    .columns
      .column.content.is-one-quarter
        AppButton(v-on:buttonAction="drawCards") Tirer 3 cartes
        div.has-margin-10(v-if="!currentCard && cards.length")
          p Cliquez sur une carte pour voir son interprétation
        CardDetail(:card="currentCard")
      .column.content
        div(v-if="cards.length === 0")
          h2.title.is-2 UMT va vous dire l’avenir…
        AppNotification(v-if="loading")
          | Tirage en cours, veuillez patienter…
        CardList(
          v-if="cards.length"
          :cards="cards" @select="showCard"
        )
</template>

<script>
// composants à charger
import AppButton from "@/components/app/AppButton"
import AppNotification from "@/components/app/AppNotification"
import CardList from "@/components/card/CardList"
import CardDetail from "@/components/card/CardDetail"

export default {
  name: 'SearchPage',
  components: {
    AppButton,
    AppNotification,
    CardList,
    CardDetail
  },
  data() {
    return {
      // indique si l'API est en train d’être appelée
      loading: false,
      // la carte cliquée
      currentCard: null,
      // la liste des cartes tirées
      cards: []
    }
  },
  methods: {
    // affiche le détail d'une carte
    showCard(card) {
      this.currentCard = card
    },
    // pour la démo
    sleep(milliseconds) {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    },
    // Ajoute la notion manquante de sens de la carte
    addRotate() {
      this.cards.map((data) => {
        // ajout du sens de la carte aléatoire
        data.up = Math.round(Math.random())
      })
    },
    // tirage de cartes
    drawCards() {
      // le loading va s'afficher dans le template
      this.loading = true
      // on efface la carte sélectionnée et tirées
      this.currentCard = null
      this.cards = []

      // on tire une carte au sort via l'API
      // TODO: gestion des erreurs réseau
      fetch('http://localhost:8080/api/v1/cards/random?n=3')
        .then((res) => { return res.json() })
        .then(async (res) => {
          // sleep en javascript:
          // https://flaviocopes.com/javascript-sleep/
          await this.sleep(1000)
          // la liste des cartes tirées est stockée
          this.cards = res.cards
          // bonne pratique: on sort la logique dans une fonction à part pour 
          // éviter de mélanger les opérations entre elles
          // récupération réseau ≠ traitement de la donnée
          this.addRotate()
          // sauvegarde des tirages
          this.saveCards()
          // le loading doit être caché
          this.loading = false
        })
    },
    saveCards() {
      let drawing = []
      if (localStorage.drawing) {
        drawing = JSON.parse(localStorage.drawing)
      }
      drawing.push(this.cards)
      // localStorage ne connait que les "string"
      // on doit convertir le JSON
      localStorage.drawing = JSON.stringify(drawing)
     }
  }
}
</script>
