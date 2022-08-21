<template>
  
  <div class="p-3" style="max-width: 400px; margin: 50px auto; background: #000">
    
    <!-- Resultado -->
    <div class="w-full rounded m-1 p-3 text-right lead font-weight-bold text-black bg-vue-dark">
      {{ datoCalcu || 0 }}
    </div>

    <!-- Botones de la calculadora -->
    <div class="row no-gutters">
      <div class="col-3" v-for="n in botonesCalculadora" :key="n">
        <div class="lead text-black text-center m-1 py-3 bg-vue-dark rounded hover-class"
          :class="{'bg-vue-green': ['C','*','/','-','+','%','='].includes(n)}"
          @click="action(n)"
        >
          {{n}}
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Calculadora',
  props: {
    msg: String
  },

  data() {
    return {
      datoCalcu: '',
      botonesCalculadora: ['C','*','/','-',7,8,9,'+',4,5,6,'%',1,2,3,'=',0,'.'],
      operador: null,
      datoCalcuAnt: '',
    }
  },

  methods: {
    action(n){

      /* Ingresar dato */
      if(!isNaN(n) || n === '.'){
        this.datoCalcu += n + '';
      }

      /* Borrar dato */
      if(n === 'C'){
        this.datoCalcu = '';
      }

      /* Operadores */
      if(['/','*','-','+'].includes(n)){
        this.operador = n;
        this.datoCalcuAnt = this.datoCalcu;
        this.datoCalcu = '';
      }

      /* La funcion eval da el resultado */
      if(n === '='){
        this.datoCalcu = eval(
          this.datoCalcuAnt + this.operador + this.datoCalcu
        );
        this.datoCalcuAnt = '';
        this.operador = null;
      }

      /* Sacar porcentaje */
      if(n === '%'){
        this.datoCalcu = this.datoCalcu / 100 + '';
      }

    }
  }
}
</script>


<style scoped>
  .bg-vue-dark {
    background: #dde2e8;
  }
  .hover-class:hover {
    cursor: pointer;
    background: #ffffff;
  }
  .bg-vue-green {
    background: #3fb945;
  }
</style>