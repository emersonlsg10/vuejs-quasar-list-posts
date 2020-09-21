<template>
  <q-page padding>
    <!-- content -->
    <span class="q-display-2">{{ artigo.title.rendered }}</span>
    <div class="row">
      <div class="col" v-html="artigo.content.rendered">
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Artigo',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  mounted () {
    this.setArtigo(this.id)
  },
  computed: {
    ...mapState('posts', ['artigo'])
  },
  methods: {
    ...mapActions('posts', ['setArtigo'])
  }
}
</script>
