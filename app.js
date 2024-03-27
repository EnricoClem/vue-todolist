const { createApp } = Vue;

createApp ({
    data () {
        return {
            todos: [
                'Portare fuori il cane',
                'Lavare i piatti',
                'Spedire il pacco'
            ],
        inputValue: '',
        }
    },
    methods: {
        addTodo() {
            if (this.inputValue !== '') {
                this.todos.push(this.inputValue);
                this.inputValue = '';
            }
            
        },
        deleteTodo(i) {
            this.todos.splice(i, 1)
        }
    }
}).mount('#app');