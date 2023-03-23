const vm = Vue.createApp({
  data() {
    return {
      firstName: "john",
      middleName: "",
      lastName: "doe",
      url: "https://baidu.com",
      raw_url: '<a href = "https://baidu.com" target="_blank">BaiDu</a>',
      age: 20,
    };
  },
  methods: {
    /*  fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;  // 从实例中访问数据需要用到this
    }, */
    increment() {
      this.age++;
    },
    updateLastName(msg, event) {
      /* event.preventDefault();  */ //调用事件阻止默认方法来阻止默认行为。
      /* console.log(msg); */
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      this.middleName = event.target.value;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newVal, oldVal) {
      setTimeout(() => {
        this.age = 20;
      }, 3000);
    },
  },
}).mount("#app"); // mount它用于描述视图将自身插入到文档中的过程。

setTimeout(() => {
  vm.firstName = "Bob";
}, 2000);

/* Vue.createApp({
  data() {
    return {
      firstName: "jane",
      lastName: "doe",
    };
  },
}).mount("#app2");
 */
