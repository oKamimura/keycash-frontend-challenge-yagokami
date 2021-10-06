<template>
  <main>
   <b-container>
        <div class="carrosel">
          <ul >
              <li>
                <img :src="imoveis[0].images[1]" alt="">
              </li>
                <li>
                <img :src="imoveis[3].images[1]" alt="">
              </li>
                <li>
                <img :src="imoveis[13].images[0]" alt="">
              </li>
                <li>
                <img :src="imoveis[6].images[1]" alt="">
              </li>
          </ul>
        </div>
       <div>
            <b-card class="card-center" >
            <b-card-text> <h2><b> 24 </b> Imóveis       <button class="button-maiorValor"  @click="sortHighest">Maior valor<b-icon-arrow-up></b-icon-arrow-up> </button> 
              <button @click="sortLowest"> Menor valor  <b-icon-arrow-down></b-icon-arrow-down> </button>
               </h2>
      
            </b-card-text>
            </b-card>
          </div>
          <b-card class="card-left">
            <b-card-header><b-card-title>Busca avançada<b-icon-zoom-in class="icon-card-left"></b-icon-zoom-in></b-card-title></b-card-header>
        <b-card-body class="card-left-body">
          <b-form-group class="input-checkbox1">
            <label > Cidades:  </label>
       <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="selected.cidade"
        name="flavour-1" 
        class="itens-checkbox"
        >
        <b-form-checkbox value="SP"> São Paulo</b-form-checkbox>
       </b-form-checkbox-group>
         </b-form-group>

         <b-form-group class="input-checkbox1">
            <label > Bairros:  </label>
       <b-form-checkbox-group
        id="checkbox-group-2"
        v-model="selected.bairro"
        name="flavour-2" 
         class="itens-checkbox">
        <b-form-checkbox value="SP">Itaim Bibi</b-form-checkbox>
       </b-form-checkbox-group>
         </b-form-group>
          
          
                <b-form-group   class="input-checkbox1">
                 <label > Quartos:  </label>
                  <b-form-checkbox-group
                 id="checkbox-group-3"
                  v-model="selected.bedrooms"
                  name="flavour-3" 
                   class="itens-checkbox"
                  >
                      
                <b-form-checkbox value=1 > +1</b-form-checkbox>
              <b-form-checkbox value=2> +2</b-form-checkbox>
          <b-form-checkbox value=3 > +3</b-form-checkbox>
       </b-form-checkbox-group>
         </b-form-group  >

           <b-form-group class="input-checkbox1">
            <label > Banheiros:  </label>
            <b-form-checkbox-group
              id="checkbox-group-4"
              v-model="selected.bathrooms"
              name="flavour-4" 
               class="itens-checkbox"
              >
          <b-form-checkbox value="+1"> +1</b-form-checkbox>
         <b-form-checkbox value="+2"> +2</b-form-checkbox>
          <b-form-checkbox value="+3"> +3</b-form-checkbox>
       </b-form-checkbox-group>
         </b-form-group>
     
     
         <b-form-group class="input-checkbox1">
            <label > Vagas(garagem):  </label>
       <b-form-checkbox-group
        id="checkbox-group-4"
        v-model="selected.parkingSpaces"
        name="flavour-5"
         class="itens-checkbox"
         >
     
          <b-form-checkbox value="+1"> +1</b-form-checkbox>
         <b-form-checkbox value="+2"> +2</b-form-checkbox>
          <b-form-checkbox value="+3"> +3</b-form-checkbox>
       </b-form-checkbox-group>
         </b-form-group>
      
          <b-button title="Buscar" @click="filterList" class="button-checkbox">Buscar </b-button>
              
        </b-card-body>
      </b-card>
        <div class="cards-imoveis">
          <div class="mt-4"  >
            <ul v-for="(imovel,index) in  imoveis" :key="index" class="ul-for">
                <li v-if="imovel.publish == true" >     
                   <b-card  :img-src="  imoveis[index].images[0]" img-alt="Card image" img-left class="mb-3"> 
                   <b-card-header>
                     <b-card-title>  
                     <b>{{  imoveis[index].address.formattedAddress }} </b>
                   
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title class="card-subtitle">
                   <b>  {{    imoveis[index].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text >
                     <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{  imoveis[index].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{  imoveis[index].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{  imoveis[index].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{  imoveis[index].usableArea}} m²
                       </li>            
                     </ul>
                    <b-button class="button-detalhes"><a :href="imoveis[index].id" >Mais detalhes </a><b-icon-check></b-icon-check></b-button>
                   </b-card-text>
                 </b-card> 
              </li>
            </ul>
         </div>
      </div>
    </b-container>
  </main>
</template>


<script>

import api from '../services/api.js'




export default {
    name: 'Home',
    
    data(){

        return {
          imoveis: [],
          selected: {
              cidade:[],  
              bairro: [],
              bedrooms:[],
              bathrooms:[],
              parkingSpaces:[]
          }
        }      
      },  

      methods: {
            filterList(){  
                alert("Função 'Buscar' não está funcionando! Tente novamente mais tarde ")           
      },
           sortLowest() {  
            this.imoveis.sort((a,b) =>  a.price > b.price ? 1 : -1); 
            
           },
            sortHighest() {
            this.imoveis.sort((a,b) =>  a.price < b.price ? 1 : -1);      
           }

          },

      mounted(){ 
        api.get('').then(response => {
          this.imoveis = response.data;
        })
      }

  } 


</script>


<style scoped>

main {
  background-color: #d8d8d8;
}

.flip-list-move {
  transition: transform 1s;
}
.carrosel{
  width: 1024px;
  height: 550px;
  border-radius: 10px;
  overflow: hidden;
  margin: 4px auto;
 box-shadow: 5px 5px 10px rgba(0,0,0,0.7);
}
.carrosel ul {
  display: flex;
  list-style: none;
  width: 1200px;
  height: 500px;
}

.carrosel li{
  position: relative;
  animation: slide 15s infinite ease-in-out;
}

@keyframes slide{
  0%{left: 0px};
  10%{left: 0px}

  20%{left: -1024px}
  30%{left: -1024px}
  40%{left: -2048px}
  50%{left: -2048px}
  60%{left: -3072px}
  90%{left: -3072px}
  100%{left: 0px}
}
.card-center{
  width: 100%;
  height: 70px;
 box-shadow: 5px 5px 10px rgba(0,0,0,0.7);
  margin-top: 1.5rem;
  display: flex;
  align-content: center;
  justify-items: center;
}
.card-center h2{
  font-size: 40px;
}
.card-center h2 button{
  font-size: 20px;
  width: 180px;
  float: right;
  background-color: #ff0094;
  color:#fff;
  border: 1px #6c757d;
  border-radius: 8px;
  margin-top: 5px;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
}
.button-maiorValor{
  margin: 5px;
}


.card-left{
  float: left;
  width: 330px;
  height: 595px;
  margin-top: 2rem;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.7);
}
.card-left-body{
  display: flex;
  flex-direction: column;

 
  width: 100%;
  padding: 16px;
}

.icon-card-left{
  float: right;
  margin-top: 5px;
}
.input-checkbox1{
  margin: 5px;
}
.input-checkbox1 label {
  font-size: 18px;
}
.itens-checkbox {
  margin-left: 2px;
  letter-spacing: 0.2px;
}

.button-checkbox{
  background-color: #ff0094;
  margin-top: 5px;
}

.mb-3 {
  width: 750px;
  box-shadow: 5px 5px 10px rgba(0,0,0,0.7);
  margin-top: 0.5rem;
  float: right;
}

.mb-3 img{
  max-width: 280px;
}

.mb-3 ul{
  list-style: none;
  float: left;
}
.card-subtitle{
  margin: 10px;
}
.mb-3  li img{
  width: 20px;
}
.ul-for{
  list-style: none;
}

.button-detalhes{
  float: right;
  margin-top: 58px;
  background-color: #ff0094;
}
.button-detalhes a{
  text-decoration: none;
  color: #fff;
}

</style>