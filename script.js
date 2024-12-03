let btn=document.getElementById('btn')
let errors = document.querySelectorAll('.error')
let inp = document.querySelectorAll('input')

let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let r1 = document.getElementById('r1')
let r2 = document.getElementById('r2')

let radio = document.querySelector('input[name="r"]:checked')

let mess = document.getElementById('mess')
let check = document.getElementById('check')
let sentbox = document.querySelector('.sentBox')

let test =0;

redText = [
   'This field is required',
   'This field is required',
   'Please enter a valid email address',
   'Please select a query type',
   'This field is required',
   'To submit this form, please consent to being contacted'
]

btn.addEventListener('click',function(x){
   x.preventDefault();
   for(let i=0; i<3 ; i++ ){
      if(inp[i].value == ''){     
              call(i)
      }else{
         hide(i)
   
      }
   }
   if(r1.checked==false && r2.checked==false){
      call(3) 
   } else{
      hide(3)  
       
   }
   if(mess.value ==''){
     call(4)
   }else{
       hide(4)
   
   }
   if(check.checked==false){
     call(5)
   }else{
       hide(5)
   
   }


   if(inp[0].value != '' && inp[1].value != ''  && inp[2].value != '' 
      && (r1.checked==true || r2.checked==true )
      && mess.value !='' 
      && check.checked==true){
         sentbox.classList.remove('hide')
      }

      setTimeout(() => {
         sentbox.classList.add('hide')
      }, 2000);   

  
})

function call(x){
      errors[x].innerHTML=redText[x]
      errors[x].style.display='block' 
}
function hide(y){
   errors[y].style.display='none'
}

let select1 = document.getElementById('select1')
let select2 = document.getElementById('select2')


function color(id1,id2){
   id1.style.backgroundColor='hsl(148, 38%, 91%)';
   id1.style.outline = '1px solid hsl(169, 82%, 27%)';
   id2.style.backgroundColor='#fff';
   id2.style.outline = 'none';
}