<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Name" v-model="enteredName" />
    </div>
    <div>
      <label>Phone</label>
      <input type="text" placeholder="Phone" v-model="enteredPhone" />
    </div>
    <div>
      <label>Email</label>
      <input type="text" placeholder="Email" v-model="enteredEmail" />
    </div>
    <div>
      <button type="submit">Add Contact</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    }
  },
  emits: ['add-contact'],
  methods: {
    submitData() {
      this.$emit(
        'add-contact', 
        this.enteredName, 
        this.enteredPhone, 
        this.enteredEmail
      )
    },
  },
}
</script>
