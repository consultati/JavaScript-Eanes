
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
      localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
    },
    editarTarefa: function(index){
      //console.log('editar ', index)
      this.tarefas[index].estado = true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
    },
    eliminarTarefa: function(index){
      this.tarefas.splice(index, 1);
      localStorage.setItem('gym-vue', JSON.stringify(this.tarefas));
    }
  },
  created: function(){
    let dadosDB = JSON.parse(localStorage.getItem('gym-vue'))
    if(dadosDB === null){
      this.tarefas = [];
    }else{
      this.tarefas = dadosDB;
    }
  }
});