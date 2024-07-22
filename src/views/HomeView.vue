<script setup>

</script>

<template>
  <div class="container">
    
    <h1>Buy Subscription</h1>
        <div class="btn-container">
          <RouterLink  :to="{ path: '/plans', query: { val: 'a' } }">
          <button class="btn" >Plan $99/month</button>
          </RouterLink>
          <RouterLink :to="{path:'/plans',query:{val:'b'}}">
            <button class="btn">Plan $199/month</button>
          </RouterLink>
          <RouterLink :to="{path:'/plans',query:{val :'c'}}">
          <button class="btn">Plan $299/month</button>
          </RouterLink>
      </div>  
  </div>
  
</template>
<style scoped>
.container{
  height:100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: antiquewhite;
  row-gap: 4rem;
}

.btn-container{
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
}

.btn{
  padding:1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0.5rem 0.5rem;

}
.btn:hover{
  background-color: rgb(231, 231, 231);
  cursor: pointer;
}

@media only screen and (min-width: 780px){
  .btn-container{
    flex-direction: row;
    column-gap: 4rem;
  }

 
}
</style>