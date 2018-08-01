<template lang="html">

  <section class="modal-generic">    
    <!-- Modal -->
    <div class="modal fade" :id="target" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" :class="getSizeClass()" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="body" v-if="$slots.body"></slot>
            <slot v-else></slot>
          </div>
          <div class="modal-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script lang="js">
  export default {
    name: 'modal-generic',
    props: ['target', 'title', 'size'],
    mounted () {

    },
    data () {
      return {
      }
    },
    methods: {
      getSizeClass () {
        return this.size ? 'modal-' + this.size : ''
      }
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .modal-generic {
    
  }
</style>
