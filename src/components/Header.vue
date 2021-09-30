<template>
    <header>

        <nav class="container">

    
            <a href="/"> <h1 id="logo"> AquÍmoveis</h1></a>
            
            <img alt="abrir menu" id="menu-button" src="https://raw.githubusercontent.com/william-costa/wdev-mock-site-resources/master/assets/images/menu.svg
">

        </nav>
        

    </header>
</template>

<script>
export default{
    name:'Header'
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
    }
    #logo{
        width: 56px;
        height: 56px;  
        padding: 21% 7%;
    }
    #menu-button{
        width: 30px;
    }


</style>
