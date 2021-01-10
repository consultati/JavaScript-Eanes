
const app = new Vue({
  el: '#app',
  data: {
    titulo: 'GYM con Vue',
    tarefas: [],
    novaTarefa: ''    
  },
  methods: {
    adicionarTarefas: function(){
      this.tarefas.push ({
        nome: this.novaTarefa,
        estado: false
      });
      this.novaTarefa = ''
    },
    editarTarefa: function(index){
      //console.log('editar ', index)
      this.tarefas[index].estado = true
    }
  }
});