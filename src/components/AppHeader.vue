<!-- src/components/AppHeader.vue -->
<template>
    <div class="semi-transparent-background">
        <van-field
            v-model="newTodo"
            placeholder="要添加点什么好呢"
            input-align="center"
            @keyup.enter="addTodo"
            clearable
            class="custom-input"
        />
        <van-button round block type="primary" @click="addTodo">添加</van-button>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';
import { Field, Button } from 'vant';
import { bus } from '../bus'; 

export default defineComponent({
    name: 'AppHeader',
    components: {
        VanField: Field,
        VanButton: Button
    },
    setup() {
        const newTodo = ref('');

        const addTodo = () => {
            if (newTodo.value.trim()) {
                bus.emit('addTodo', { text: newTodo.value, done: false });
                newTodo.value = '';
            }
        };

        return {
            newTodo,
            addTodo
        };
    }
});
</script>

<style>
.semi-transparent-background {
    background-color: rgba(255, 255, 255, 0.652);
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20%;
    margin-bottom: 10%;
    margin-left: -8px;
}

.custom-input {
    width: 100%;
    height: 30px;
    top: 45%;
    margin-left: 10px;
    border-radius: 32px;
    background-color: rgba(255, 255, 255, 0);
    
    

    input[type="text" i]{
        height: 100%;
        padding: 6px;
        width: 90%;
        border-radius: 32px;
        border-color: rgb(255, 255, 255) !important;
        overflow: hidden ;
        font-size: 15px;
        margin-left: -20px;
    }
}

button {
    width: 15%;
    padding: 10px 5px;
    margin-right: 10px;
    color: inherit;
    background-color: rgba(238, 46, 46, 0.822);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 50%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


</style>