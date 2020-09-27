<template>
  <div>
    <ul v-for="i in items" :key="i">
      <li>{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "some",
  data() {
    return {
      items: [
        1, 2, 3, true, 'string'
      ]
    }
  }
};
</script>

<style scoped>
#id {
  color: red;
  background: white;
}
#id:hover {
  font-size: 12px;
}
.class > code {
  display: block;
}
</style>