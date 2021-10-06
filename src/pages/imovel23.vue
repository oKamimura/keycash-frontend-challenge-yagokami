<template>
    <main>
        <b-container>
               <div class="carrosel">
          <ul >
              <li>
                <img :src="imoveis[22].images[1]" alt="">
              </li>
                <li>
                <img :src="imoveis[3].images[4]" alt="">
              </li>
                <li>
                <img :src="imoveis[13].images[3]" alt="">
              </li>
                <li>
                <img :src="imoveis[6].images[2]" alt="">
              </li>
          </ul>
        </div>
        <div class="button-voltar">
            <a href="/">
            <b-button> <b-icon icon="arrow-left" font-scale="0.8"></b-icon> Voltar</b-button>
            </a>
        </div>
         <div>
            <b-card class="card-center">
            <b-card-text> <h2><b>{{  imoveis[24].address.formattedAddress    }}</b></h2>  <span>{{  imoveis[24].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })  }} Venda</span> </b-card-text>
         
            </b-card>
          </div>
          <div>
            <b-card class="card-center-images">
                <b-card-header>
                <b-card-title> <h2>Fotos do imóvel</h2></b-card-title>
                </b-card-header>
                <b-card-body>
                    <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width=""
                    img-height=""
                    >
                    <b-carousel-slide
                        caption="sala de estar"
                        :img-src="imoveis[24].images[0]"
                        >
                    </b-carousel-slide>
                     <b-carousel-slide
                      caption="cozinha"
                        :img-src="imoveis[24].images[1]"
                        >
                    </b-carousel-slide>
                     <b-carousel-slide
                      caption="sala de estar"
                        :img-src="imoveis[24].images[2]"
                        >
                    </b-carousel-slide>
                     <b-carousel-slide
                      caption="lavanderia"
                        :img-src="imoveis[24].images[3]"
                        >
                    </b-carousel-slide>
                     <b-carousel-slide
                      caption="banheiro"
                        :img-src="imoveis[24].images[4]"
                        >
                    </b-carousel-slide>
                     <b-carousel-slide
                      caption="quarto"
                        :img-src="imoveis[24].images[5]"
                        >
                    </b-carousel-slide>
                    </b-carousel>
                </b-card-body>
            </b-card>
            </div>
            <div>
            <b-card class="card-center-info">
                <b-card-header class="card-center-info-header">
                    <b-card-title>
                        <h2><b>Informações do imóvel</b></h2>
                    </b-card-title>
                </b-card-header>
                <b-card-body>
                    <div class="icons-card-info">
                    <b-card-sub-title>
                         <img src="https://cdn-icons-png.flaticon.com/512/1925/1925755.png" alt=""> {{imoveis[24].bathrooms}} Banh.
                          <img src="https://cdn-icons-png.flaticon.com/512/78/78257.png" alt=""> {{imoveis[24].bedrooms}} Dorms.
                           <img src="https://image.flaticon.com/icons/png/512/52/52120.png" alt=""> {{imoveis[24].parkingSpaces}} Vagas
                    </b-card-sub-title>
                    </div>
                    <b-card-text>
                        <h3>  {{  imoveis[24].address.formattedAddress    }}  </h3>
                      <p>  Descrição do imóvel:
(Proprietário estuda alugar com os móveis)
- Condomínio muito bem localizado na Granja Viana.
- A 500m da Rod. Raposo Tavares, no retorno do Km 23 e fácil acesso ao Rodoanel Mario Covas.
- Ótimo sobrado, com 5 dorms (3 suítes), em final de rua (Cul-de-sac)
- Jardim na frente da casa.
- Living para 3 ambientes e sala de lareira.
- Cozinha com armários planejados.
- 2 suítes no piso térreo, umas delas com closet.
- Piso superior totalmente avarandado, atendendo a sala íntima e os dormitórios superiores.
- Escritório.
- Ampla sala íntima / home theater.
- Suíte máster no piso superior, com closet.
- Banheiro da suíte master com 2 cubas e banheira de hidromassagem casal.
- Aquecimento central de água: boiler elétrico.
- Dormitórios 4 e 5 no piso superior.
- Ótima área gourmet nos fundos, com churrasqueira, forno de pizza, pia com armários.
- Sauna úmida para 5 pessoas (só falta instalar a máquina).
- Grande depósito ao lado da garagem.
- Corredor lateral.
- Quintal nos fundos, ao lado da área gourmet, com chuveiro e espaço para piscina de sobrepor.
- Garagem coberta para 3 carros mais 1 vaga descoberta.
</p>
                    </b-card-text>
                </b-card-body>
            </b-card>
            </div>
        </b-container>
    </main>
</template>

<script>

import api from '../services/api.js'

export default{
    name:'imovel23',
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
  background-color: #d8d8d8;
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

.button-voltar{
    margin: 11px;
    padding: 0;
    position: static;
    float: right;
}
.card-center{
    width: 100%;
    height: 85px;
    box-shadow: 10px 10px 15px rgb(0 0 0 / 70%);
    display: flex;
    align-content: center;
    justify-content: center;  
    justify-items: center;
}
.card-center h2{
  font-size: 28px;
  float: left;
}
.card-center span{
  font-size: 20px;
    margin: 20px 0px 10px 290px;
  text-align: center;
}
.card-center-images{
    width: 100%;
    height: auto;
    box-shadow: 10px 10px 15px rgb(0 0 0 / 70%);
    margin-top: 1.5rem;
}
.card-center-info{
     width: 100%;
    height: auto;
    box-shadow: 10px 10px 15px rgb(0 0 0 / 70%);
    margin-top: 1.5rem;
       margin-bottom: 1.5rem;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
}
.card-center-info h2{
    text-transform: uppercase;
    font-size: 20px;
}
.card-center-info img{
    width: 25px;
}
.icons-card-info{
   margin: 5px;
}
.card-center-info h3{
    margin: 6px;
}
.card-center-info p {
    margin-bottom: 6px;
    text-align: justify;
}

</style>