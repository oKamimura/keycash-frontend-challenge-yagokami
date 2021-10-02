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
            <b-card class="card-center">
            <b-card-text> <h2><b>25</b> Ímoveis</h2></b-card-text>
            <b-dropdown right text="Maior valor" class="button-card-center">
      <b-dropdown-item> <b-icon-arrow-up></b-icon-arrow-up> Maior valor</b-dropdown-item>
      <b-dropdown-item><b-icon-arrow-down></b-icon-arrow-down> Menor valor</b-dropdown-item>
      </b-dropdown>
            </b-card>
          </div>
          <b-card class="card-left">
            <b-card-header><b-card-title>Busca avançada<b-icon-zoom-in></b-icon-zoom-in></b-card-title></b-card-header>
        <b-card-body class="card-left-body">
          <b-dropdown right text="Cidade">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
          </b-dropdown>
           <b-dropdown right text="Bairro">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
       </b-dropdown>
        <b-dropdown right text="Região">
      <b-dropdown-item>Item 1</b-dropdown-item>
      <b-dropdown-item>Item 2</b-dropdown-item>
       </b-dropdown>
       <b-button-group>
          <b-button>Valor</b-button>
        <b-input-group size="sm" prepend="R$" append="">
      <b-form-input value="Maxímo" class="text-right"></b-form-input>
    </b-input-group>
      <b-input-group size="sm" prepend="" append="">
      <b-form-input value="Mínimo" class="text-right"></b-form-input>
    </b-input-group>
       </b-button-group>
        </b-card-body>
      </b-card>
        <div class="cards-imoveis">
          <div class="mt-4">
             <ul>
                <li>
                 <b-card :img-src="imoveis[0].images[0]" img-alt="Card image" img-left class="mb-3">
                   <b-card-header>
                     <b-card-title>
                     <b>{{imoveis[0].address.formattedAddress }} </b>
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title class="card-subtitle">
                   <b>R$   {{  imoveis[0].price  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text >
                     <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{imoveis[0].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{imoveis[0].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{imoveis[0].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{imoveis[0].usableArea}}
                       </li>            
                     </ul>
                    <b-button class="button-detalhes">Mais detalhes <b-icon-check></b-icon-check></b-button>
                   </b-card-text>
                 </b-card>
              </li>
                <li>
                 <b-card :img-src="imoveis[1].images[0]" img-alt="Card image" img-left class="mb-3">
                   <b-card-header>
                     <b-card-title>
                    <b>{{imoveis[1].address.formattedAddress }} </b>   
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title>
                       <b>R$   {{  imoveis[1].price  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text>
                     <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{imoveis[0].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{imoveis[0].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{imoveis[0].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{imoveis[0].usableArea}}
                       </li>            
                     </ul>
                    <b-button class="button-detalhes">Mais detalhes <b-icon-check></b-icon-check></b-button>
                   </b-card-text>
                 </b-card>
              </li>
                <li>
                 <b-card :img-src="imoveis[2].images[2]" img-alt="Card image" img-left class="mb-3">
                   <b-card-header>
                     <b-card-title>
                       <b>{{imoveis[2].address.formattedAddress }} </b>   
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title>
                     <b>R$   {{  imoveis[2].price  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text>
                     <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{imoveis[0].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{imoveis[0].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{imoveis[0].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{imoveis[0].usableArea}}
                       </li>            
                     </ul>
                    <b-button class="button-detalhes">Mais detalhes <b-icon-check></b-icon-check></b-button>
                   </b-card-text>
                 </b-card>
              </li>
                <li>
                 <b-card :img-src="imoveis[3].images[1]" img-alt="Card image" img-left class="mb-3">
                   <b-card-header>
                     <b-card-title>
                       <b>{{imoveis[3].address.formattedAddress }} </b>   
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title>
                        <b>R$   {{  imoveis[3].price  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text>
                   <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{imoveis[0].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{imoveis[0].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{imoveis[0].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{imoveis[0].usableArea}}
                       </li>            
                     </ul>
                    <b-button class="button-detalhes">Mais detalhes <b-icon-check></b-icon-check></b-button>
                   </b-card-text>
                 </b-card>
              </li>
                <li>
                 <b-card :img-src="imoveis[5].images[3]" img-alt="Card image" img-left class="mb-3">
                   <b-card-header>
                     <b-card-title>
                   <b>{{imoveis[5].address.formattedAddress }} </b>   
                     </b-card-title>
                   </b-card-header>
                   <b-card-sub-title>
                        <b>R$   {{  imoveis[5].price  }}</b> Á venda
                   </b-card-sub-title>
                   <b-card-text>
                   <ul>
                       <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt="">
                         {{imoveis[0].bathrooms}}
                       </li>
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt="">
                          {{imoveis[0].bedrooms}}
                       </li>
                        <li>
                         <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt="">
                        {{imoveis[0].parkingSpaces}}
                       </li>     
                        <li>
                         <img src="https://cdn-icons-png.flaticon.com/512/78/78594.png" alt="">
                        {{imoveis[0].usableArea}}
                       </li>            
                     </ul>
                    <b-button class="button-detalhes">Mais detalhes <b-icon-check></b-icon-check></b-button>
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
        imoveis: []
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
  background: linear-gradient(72deg,#ff0094,1%,#fff,99% );
}


.carrosel{
  width: 1024px;
  height: 600px;
  border-radius: 10px;
  overflow: hidden;
  margin: 4px auto;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.7);
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
  height: 70px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.7);
  margin-top: 40px;
  display: flex;
}
.card-center h2{
  align-content: flex-start;
  font-size: 40px;
  
}
.button-card-center{
  width: 25px;
  align-content: flex-end;
  float: right;
  top: -60%;
  right: 16%;
}

.card-left{
  float: left;
  width: 330px;
  height: 300px;
  margin-top: 1.5rem;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.7);
}
.card-left-body{
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
}


.mb-3 {
  width: 750px;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.7);
  margin-bottom: 3rem;
  float: right;
}

.mb-3 img{
  max-width: 280px;
}

.mb-3 ul{
  list-style: none;
}
.card-subtitle{
  margin: 10px;
}
.mb-3  li img{
  width: 20px;
}

.button-detalhes{
  float: right;
  margin-bottom: 10px;
}
</style>