let btn = document.getElementById('calculate');
btn.addEventListener('click',function(){
let billamount = document.getElementById('billamt').value;
let perctip = document.getElementById('serviceQual').value;
let people= document.getElementById('peopleamt').value;
if(billamount==="" || perctip ==0 || billamount === 0)
{
    alert("Please Enter Bill Amount");
    return;
}

// else if(billamount==="" )
// {
//     alert('Please Enter Bill Amount');
//     return;
// }
// else if(perctip ==0)
// {
//     alert('Please Enter Bill Amount');
//     return;
// }
else if(people =="" || people <= 1){
let total = ((billamount * (perctip / 100))/1) *100 ;
total = total.toFixed(2);
   document.getElementById('tipamount').innerHTML=`TIP AMOUNT$${total}`;
}
else{
    let total = ((billamount * (perctip / 100))/people) *100 ;
total = total.toFixed(2);
    document.getElementById('tipamount').innerHTML=`TIP AMOUNT $${total}each`;
}
}
)