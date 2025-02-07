const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTask: '',
      isVisible: true,
    }
  },
  computed : {
    buttonCaption() {
      return this.isVisible ? 'Hide List' : 'Show List';
    },
  },
  methods: {
    addTask(){
      this.tasks.push(this.enteredTask);
    },
    toggleVisibility() {
      if (this.tasks.length > 0) {
        this.isVisible = !this.isVisible;
      } else {
        alert('No tasks to hide or show');
      }
    },
  }

});
app.mount('#assignment');