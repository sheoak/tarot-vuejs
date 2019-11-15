<template lang="pug">
  section.hero.is-dark
    .hero-body
      .container.columns
        .column
          h1.title
            router-link.has-text-white(to="/")
              img.logo.image.is-64x64.is-pulled-left.has-margin-right-20(
                src="@/assets/images/logo.svg"
              )
              | Ultra Magic Tarot
          h2.subtitle.is-6.is-italic Comme madame Irma, mais en mieux
        .column.is-one-fifth
          router-link.has-text-white.is-uppercase(to='/history') historique
</template>
