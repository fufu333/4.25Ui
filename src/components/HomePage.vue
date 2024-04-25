<!-- src/components/HomePage.vue -->
<template>
  <div class="list">
    <div>
      <AppHeader />
      <TodoList />
    </div>
  </div>

</template>

<script>
import { defineComponent } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import TodoList from '../components/TodoList.vue'


export default defineComponent({
  name: 'HomePage',
  components: {
    AppHeader,
    TodoList
  },
  data() {
    return {

    }

  }
})
</script>

<style scoped>
.btn-group {
  background-color: rgba(255, 255, 255, 0.612);
  width: 50%;
  margin-left: 20px;

}

</style>