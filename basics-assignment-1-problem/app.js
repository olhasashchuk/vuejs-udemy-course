const app = Vue.createApp({
  data() {
    return {
      name: "Olha",
      age: 38,
      imgLink:
        "https://ru-brightdata.com/wp-content/uploads/2024/12/How-to-Scrape-Google-Images-blog-image-1.svg",
    };
  },
  methods: {
    outputAge() {
      const countAge = this.age + 5;
      return countAge;
    },
    outputRandomNumber() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
