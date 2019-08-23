<template>
    <div id='app'  >
 
        <div :style="bgstyle">Hello World!</div>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            bgstyle:{
                position:'relative',
                width:'100%',
                height:'100%',
                background:`url("${process.env.baseURL}/img/HomeBg.jpg") no-repeat`,
                backgroundSize:'cover'
            }
            
        }
    }
}
</script>
<style scope>
 #app{
     position:absolute;
     width:19.2rem;
     height:10.8rem;
     margin:0 auto;
     left:0;
     right:0;
     background:gray;
     top:50%;
     transform: translate(0,-50%);
     -webkit-tap-highlight-color: transparent;
     user-select: none;
     
 
 }
</style>

