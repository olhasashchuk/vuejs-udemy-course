<template>
  <li>
    <h2>{{ name }}</h2>
    <h3>Age: {{ age }}</h3>
    <button @click="$emit('call-edit-user', { id, name, age })">
      Edit User
    </button>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
  },
};
</script>
