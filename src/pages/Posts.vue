<template>
  <div class="container">
    <div class="row">
      <div v-for="(post, index) in posts" :key="index" class="col-6 q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" flat bordered>
          <q-img
            :src="post.jetpack_featured_media_url"
          />

          <q-card-section>
            <div class="text-h5 q-mt-sm q-mb-xs">{{ post.title.rendered }}</div>
            <div class="text-caption text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </q-card-section>

          <q-card-actions>
            <q-btn push color="dark" label="Detalhes" class="full-width" @click="detalhar(post.id)" />
            <q-space />
          </q-card-actions>

          <q-slide-transition>
            <div v-show="expanded">
              <q-separator />
              <q-card-section class="text-subitle2">
                {{ lorem }}
              </q-card-section>
            </div>
          </q-slide-transition>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Posts',
  // data () {
  //   return {
  //     posts: []
  //   }
  // },
  mounted () {
    // this.getPosts()
    // this.$q.loading.show()
    this.CLEAR_ARTIGO()
    this.setPosts()
    // .then(() => {
    //   this.$q.loading.hide()
    // })
  },
  computed: {
    ...mapState('posts', ['posts'])
  },
  methods: {
    ...mapActions('posts', ['setPosts']),
    ...mapMutations('posts', ['CLEAR_ARTIGO']),
    detalhar (id) {
      this.$router.push(`artigo/${id}`)
    }
  }
}
</script>
