const userFname = document.querySelector(".firstname")
const userLname = document.querySelector(".lastname")
const userAddress = document.querySelector(".address")
const userPincode = document.querySelector(".pincode")
const userGender = document.querySelector(".gender")
const userFood = document.querySelector(".food")
const userState = document.querySelector(".state")
const userCountry = document.querySelector(".country")
const form = document.querySelector("form");
const td = document.querySelector("td")
const userdata1 = document.querySelector(".data1");
const userdata2 = document.querySelector(".data2");
const userdata3 = document.querySelector(".data3");
const userdata4 = document.querySelector(".data4");
const userdata5 = document.querySelector(".data5");
const userdata6 = document.querySelector(".data6");
const userdata7 = document.querySelector(".data7");
const userdata8 = document.querySelector(".data8");



form.onsubmit = (event)=>{
    event.preventDefault();
   userdata1.textContent = userFname.value
   userdata2.textContent = userLname.value
   userdata3.textContent = userAddress.value
   userdata4.textContent = userPincode.value
   userdata5.textContent = userGender.value
   userdata6.textContent = userFood.value
   userdata7.textContent = userState.value
   userdata8.textContent = userCountry.value

   userFname.value = ""
   userLname.value = ""
   userAddress.value = ""
   userPincode.value = ""
   userFood.value = ""
   userState.value = ""
   userCountry.value = ""
}