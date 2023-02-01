var img1 = document.getElementById("pic1");
var img2 = document.getElementById("pic2");
var img3 = document.getElementById("pic3");
var img4 = document.getElementById("pic4");
var popup =document.getElementById("popup");
var smt = document.getElementById("sbmt");
var clicks=0;
var img1flag=false;
var img2flag=true;
var img3flag=true;
var img4flag=true;

//form
img1.addEventListener("click",()=> {
  if(img1flag==false){
    img2flag=false;
  }
       popup.style.display="block";
  });
  img1flag=true; 

  smt.addEventListener("click",()=>{
    var onsbmit = document.getElementById("sbmt")
    name= document.getElementById("nme").value;
     emali = document.getElementById("eml").value;
     username = document.getElementById("dusername").value;
     // popup.style.display="none";
     alert(" Done... move to next page")
  })
  
//display details
  var name,email, username;

    img2.addEventListener("click", ()=>{
      if(img2flag==false){
       
      }
      infos.style.display="block";
      document.getElementById("infos").innerHTML =name;
      document.getElementById("inf").innerHTML =username;
      popup.style.display="none";
      img3flag=false;
      img2flag=true;
    })
  
    //dice
    var dce = document.getElementById("dice");
    img3.addEventListener("click",()=>{
      if(img3flag==false){
        dce.style.display="block";
        img4flag=false;
      }
      popup.style.display="none";
      infos.style.display="none";
      
    });


    dce.addEventListener("click",()=>{
      
      dce= Math.floor(Math.random()*6)+1;
      
    })

    var count=0,sum=0;
    function dicegame(){
      if(clicks<=2){
      count++;
      if(count <= 3){
        const diceN = Math.floor(Math.random()*6)+1;
        sum +=diceN;
        document.getElementById("sumd").innerHTML=("your sum is - "+sum);
        if(sum>10){
          clicks++;
          // count++;
        }
      }else{
        if(clicks<=2){
        
        sum=0;
        count=0;
        document.getElementById("sumd").innerHTML=sum;
        clicks++;
        
        }
      }
    }
  }

    dce.addEventListener("click",dicegame)
    //random string
 
    var imgcong = document.getElementById("congrats");
    img4.addEventListener("click",()=>{
      if(img4flag==false){
        if(sum>10){
          document.getElementById("rndmdigit").innerHTML= ("your couppon = "+ generateString(12));
          congrats.style.display="block";
        }else{
          document.getElementById("rndmdigit").innerHTML="Badluck";
          dce.style.display="none";
        }
      }
     
    })
  

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function generateString(length) {
       let result = ' ';
       const charactersLength = characters.length;
       for ( let i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
       }
       return result;
   }

   name="";
   username="";