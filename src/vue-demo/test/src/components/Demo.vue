<template name="component-name">
  <div>
    <h2>demo-component</h2>
    <p>{{ value }}</p>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  props: {
    value: Object,
  },
  watch: {
    value(n, o) {
      console.log('watch-value', n, o);
    },
  },
  mounted() {
    this.props.value
  },
  beforeUpdate(a, b) {
    console.log(a, b, this.props);
  },
  updated(a, b) {
    console.log(a, b, this.props);
  },
};
</script>
