const app = Vue.createApp({
  data() {
    return {
      inputUser: "",
      isVisible: true,
      backgroundColor: "",
    };
  },
  computed: {
    userClass() {
      return {
        user1: this.inputUser === "user1",
        user2: this.inputUser === "user2",
      }
    },
    paragraphClasses() {
      return {
        visible: this.isVisible,
        hidden: !this.isVisible,
      };
    },
    styleObject() {
      return { backgroundColor: this.backgroundColor };
    },
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible;
    },
  },
});

app.mount("#assignment");
