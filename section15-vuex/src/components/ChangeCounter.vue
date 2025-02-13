<template>
  <div> 
    <button @click="inc">Add2</button>
  <button @click="increase({value: 11})">Add11</button>

  </div>
  
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch('increment');
    // },
    //...mapActions(['increment', 'increase'])
    ...mapActions('counter', {
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>