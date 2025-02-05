const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      //fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
        
      }
    }
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // }
  },
  computed: {
    fullname(){
      console.log('Running again...');
      if(this.name === '' || this.lastName === ''){
        return '';
      }
      return this.name + ' ' +  this.lastName;
    }
  },
  methods: {
    outputFullname() {
      console.log("Running again...");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Sashchuk";
    },

    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Submitted");
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
