<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="name" />
    <h2>name：{{ name }}</h2>
    <h2>value：{{ value }}</h2>
    <h2>type:{{ type }}</h2>
    <Demo :value="obj"></Demo>
    <h1>anchored-heading</h1>
    <anchored-heading :level="Number(name)">ddddd</anchored-heading>
  </div>
</template>
<script>
import Demo from '../components/Demo.vue';

export default {
  components: {
    Demo,
  },
  data() {
    return {
      name: '1',
      value: '',
      obj: Object.freeze({ name: 1, type: 2 }),
    };
  },
  watch: {
    name() {
      this.value = this.name + 'abc';
    },
  },
  computed: {
    type() {
      return window.ddd;
    },
  },
  mounted() {
    setTimeout(() => {
      this.name = '1';
      this.value = '2';
      setTimeout(() => {
        this.name = '1';
        this.value = '3';
      });
    }, 2000);
  },
};
</script>
