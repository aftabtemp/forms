<script scoped>
</script>
<template>
    <div class="container">
        <span class="material-symbols-outlined">
error
</span>
        <h1>Page Not Found</h1>
        <RouterLink to="/" class="btn">
            <h3>Go back</h3>
        </RouterLink>
        
        
    </div>
</template>

<style scoped>
.container{
    
    margin: 0;
    padding:0;
    min-height:100vh;
    background-color: antiquewhite;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48,
}
.material-symbols-outlined {
    font-size: 6rem
}

.btn{
    background-color: rgb(26, 125, 92);
    padding:0.5rem 2rem;   
    border-radius: 2rem;
    color:white;
    text-decoration: none;
    font-size: 1rem;
}
</style>