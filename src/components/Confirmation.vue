<script setup>
import {ref,watch} from 'vue'
const props = defineProps({
  obj: {
    type: Object,
    required: true
  }
})
const otp= ref('')
watch(otp,(next,prev)=>{
    if(next.length>4){
        otp.value = next.substring(0,4);
    }
})

const success=ref(false);

const handleSubmit=()=>{
    success.value=true;
}

console.log("confirmation", props.obj)
</script>
<template>
    <div class="container">
        <div>
            <table>
                <tr>
                    <td>Name</td>
                    <td>{{ obj.firstName+" "+obj.lastName }}</td>
                </tr>
                <tr>
                    <td>Contact No</td>
                    <td>{{ obj.phoneno  }}</td>
                </tr>
                <tr>
                    <td>Email</td>
                    <td>{{ obj.email }}</td>
                </tr>
                <tr>
                    <td>Plan</td>
                    <td>{{ obj.plan==='a'?'$99/month':obj.plan==='b'?'$199/month':'$299/month' }}</td>
                </tr>
            </table>
            <tr>
                
            </tr>
        </div>
    <div v-if="success===false" class="complete">
    <p>Enter 4 digit OTP to confirm purchase sent on  card no{{ 'XX...XX-'+obj.cardNo.substring(obj.cardNo.length-4) }}</p>
    <input class='in'pattern="[0-9]{4}" type="text" v-model="otp"/>
    <button class="btn" @click="handleSubmit">Submit</button>
    </div>
    <div v-else class="complete">
        <span class="material-symbols-outlined">
sentiment_satisfied
</span>
        <p class="pay">Payment Successful !!!</p>
        <p>User id and password will be sent to your mail.</p>
    </div>
    </div>
</template>

<style scoped>
    .container{
   
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    flex-direction: column;
    font-size: 1.5rem
   }
   


   .btn{
    margin-top:2rem;
    padding:0.7rem 0.9rem;
    border-radius: 2rem;
    font-weight: bold;
    background-color: rgb(26, 125, 92);
    color:white;
    border-color: none;
    border-color: wheat;
    font-size: 1.5rem;
    
}

.in{
    padding:0.5rem;
}
.btn:hover{
    cursor: pointer;
}

table, th, td {
  border: 1px solid black;
  background-color: white;
  color:rgb(64, 42, 8)
  
}
td{
    padding:0.5rem;
}

.material-symbols-outlined{
    font-size: 5rem;
    color: rgb(26, 125, 92);
}
.complete{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.complete>span{
    margin-top: 3rem;
}

.pay{
    color: rgb(26, 125, 92);
    font-weight: bold;
}
</style>