<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Name</label>
      <input type="text" placeholder="Name" v-model="enteredName" />
    </div>
    <div>
      <label>Age</label>
      <input type="text" placeholder="Age" v-model="enteredAge" />
    </div>
    <div>
      <button type="submit">{{ isEditing ? "Edit" : "Add" }} User</button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    editingUser: Object,
  },
  data() {
    return {
      enteredName: "",
      enteredAge: "",
      isEditing: false,
      userId: null,
    };
  },
  watch: {
    editingUser(newUser) {
      if (newUser) {
        this.enteredName = newUser.name;
        this.enteredAge = newUser.age;
        this.userId = newUser.id;
        this.isEditing = true;
      }
    },
  },
  emits: ["add-user", "edit-user"],
  methods: {
    submitData() {
      if (this.isEditing) {
        this.$emit("edit-user", {
          id: this.userId,
          name: this.enteredName,
          age: this.enteredAge,
        });
        this.isEditing = false;
        this.userId = null;
      } else {
        this.$emit("add-user", this.enteredName, this.enteredAge);
      }
      this.enteredName = "";
      this.enteredAge = "";
    },
  },
};
</script>
