<template>
    <header>

        <nav class="container">

            <a href="/">    <h1 id="logo">KeyImóveis</h1>   </a>
            <img v-on:click="openMenu" alt="abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
">

            <div v-on:click="closeMenu"  id="menu-overlay" v-if="menuActive"></div>

            <div id="menu-items" :class="{active:menuActive}">

              
                
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>

            </div>
            
            
       
        </nav>
        

    </header>
</template>

<script>
export default{
    name:'Header',
    data(){
        return{
            menuActive: false
        }
    },
    methods:{
        openMenu: function(){
            this.menuActive = true;
        },
        closeMenu: function(){
            this.menuActive = false;
        }
    }
}
</script>

<style scoped>

    header{
        background-color: var(--color-background-nav);
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
    }
    #logo{
        width: 40px;
        height: 56px;  
        padding: 21% 7%;
        color: rgb(0, 0, 0);
      
    }
    
    #menu-button{
        width: 30px;
        cursor: pointer;
    }

    #menu-items{
        position: fixed;
        top: 0;
        right: 0;
        background-color: var(--color-background-nav);
        width: 60%;
        height: 9vh;
        display: none;
        float: right;
    }
     #menu-items.active{
         display: flex;
     }

    ul{
        list-style: none;
        text-align: center; 
    }

    ul li{
        margin: 5px 0px;
    }

    ul li a{
        color: black;
    }

    @media (min-width: 700px){
        #menu-button,
        #menu-logo,
        #menu-overlay{
            display: none;
        }

        #menu-items{
            display: flex;
            position: static;
            height: 60px;
            width: auto;
        }

        ul{
            display: flex;
            height: 60px;
            align-items: center;
        }

        ul li {
            margin: 0;
            margin-left: 20px;
        }

    }



</style>
