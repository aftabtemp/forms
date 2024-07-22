<script setup>
import {watch,ref,defineProps} from 'vue'
import {useToast} from 'vue-toastification'
import { useDataStore } from '@/stores/dataStore';
import {v4 as uuidv4} from 'uuid';
import {useRouter} from 'vue-router';

const router = useRouter();

const dataStore = useDataStore();
const props = defineProps({
  plan: {
    type: String,
    required: true
  }
})
console.log(props.plan)

const fname= ref('');
const lname=ref('');
const phoneno = ref('');
const cardNo = ref('');
const email = ref('');
const plan = ref(props.plan);
const toast = useToast();
let timerId = null;
watch(phoneno,(next,prev)=>{
    if(timerId ){
        clearTimeout(timerId);
    }
    if(next.length==0){
        clearTimeout(timerId);
        timerId=null;
    }
   
   timerId = setTimeout(()=>{
        if(next.length!=10){
        toast.error("Please enter 10 digit valid Contact No")      
    }
    },1000)

    console.log(typeof next)
})


watch(cardNo,(next,prev)=>{
    if(next.length==4 || next.length==9 ||next.length==14 ){
        cardNo.value+='-'
    }else if(next.length>=20){
console.log(cardNo.value)
        cardNo.value=cardNo.value.substring(0,cardNo.value.length-1)
        console.log(cardNo.value)
    }
})


const handleSubmit = ()=>{
    const newObj = {
        id:uuidv4(),
        firstName:fname.value,
        lastName:lname.value,
        email:email.value,
        phoneno:phoneno.value,
        plan:plan.value,
        cardNo:cardNo.value
    }
    dataStore.addInfo(newObj)

    console.log(dataStore.getInfo)
    router.push({ path: '/confirmation',  query: { obj: JSON.stringify(newObj) } })
}

</script>

<template>
    <div class="container">
        <h1>Form</h1>
        <form class='form' @submit.prevent="handleSubmit">
            <label for="fname"> First Name  </label>
            <input type="text" id ="fname"placeholder="Enter your First name" v-model="fname" required/>
           
            <label for="lname"> Last Name </label>
            <input type="text" id="lname" placeholder="Enter your Last name" v-model="lname" required/>
            
            <label for="email">Email</label>
            <input type="text" id="lname"  placeholder="Enter your Email" v-model="email" required/>
            <label for="phone">Contact No</label>
            <input type="tel" id="phone" pattern="[0-9]{10}"  placeholder="Enter your Contact" v-model="phoneno" required>
            
            <label for="phone">Plan</label>
            <select
                v-model="plan"
                id="plan"
                name="plan"
                class="border rounded w-full py-2 px-3"
                required
              >
                <option value="a">$99/month</option>
                <option value="b">$199/month</option>
                <option value="c">$299/month</option>
              </select>
            
            
            <label for="card">Debit Card No</label>
            <input type="text" id="card" placeholder="Enter your Card No"  v-model="cardNo"/>
            
            <button class="btn" type="Submit">Next</button>
            
        </form>
    </div>

</template>

<style scoped>
.container{
   
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    flex-direction: column;
}
.form{
    display: flex;
    flex-direction: column;
    
    padding:2rem;
    background-color: aliceblue;
    border-radius: 2rem;
    /* row-gap: 1rem; */ 
  
}
label{
    padding-top: 1rem;
    font-size: 1rem;
}
input,select{
 padding:0.6rem;
 font-size: 0.9rem;
 width: 300px;
}


label:first-child{
    padding-top: 0rem;
}

.btn{
    margin-top:2rem;
    padding:0.4rem 0.5rem;
    border-radius: 2rem;
    font-weight: bold;
    background-color: rgb(26, 125, 92);
    color:white;
    border-color: none;
    
}

.btn:hover{
    cursor: pointer;
}

</style>