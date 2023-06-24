localStorage.removeItem('userImage')
localStorage.removeItem('user')
localStorage.removeItem('qr')
localStorage.removeItem('ID')
// Handle the image selection event
upload.addEventListener("change", function(event) {
    var file = event.target.files[0]; // Get the selected file
  
    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      var reader = new FileReader();
  
      // Read the file as data URL
      reader.onload = function(event) {
      var imageDataUrl = event.target.result; // Get the data URL
  
        // Save the image to local storage with a specific path
        localStorage.setItem("userImage", imageDataUrl);
  
        console.log(`Image saved to local storage with path: images/${file.name}`);
        let profileImg=localStorage.getItem('userImage')
        let userImg = document.getElementById('userImg')
        userImg.style.visibility='visible'
        userImg.setAttribute('src',profileImg)
      };
  
      // Read the file as data URL
      reader.readAsDataURL(file);
    
    }
   
  });
  
  const handleRadio= (e)=>{
  
   
  } 

let genPDF = document.getElementById('genPDF')
genPDF.addEventListener('click',()=>{
  let loan = document.getElementById('loan')
  let LoanNo = document.getElementById('LoanNo')
  let loanYojan = document.getElementById('loanYojan').value
  
  let name1 = document.getElementById('name1').value
  let jati = document.getElementById('jati').value
  let currentAdd =document.getElementById('currentAdd').value
  let address = document.getElementById('address').value
  let shiksha = document.getElementById('shiksha').value
  let contact = document.getElementById('contact').value
  let wsContact = document.getElementById('wsContact').value
  let adharNo = document.getElementById('adharNo').value
  let samagrId = document.getElementById('samagrId').value
  let parivarSamgr= document.getElementById('parivarSamgr').value
  let ayushman = document.getElementById('ayushman').value
  let thela = document.getElementById('thela').value
  let vyapar = document.getElementById('vyapar').value
  
  let par1to17 = document.getElementById('par1-17').value
  let par17to60 = document.getElementById('par17-60').value
  let par60 = document.getElementById('par60').value
  let earningMember = document.getElementById('earning-member').value
  
  let labh = document.getElementById('labh')
  let labhNo= document.getElementById('labhNo')

  let place= document.getElementById('place')
  let placeNo = document.getElementById('placeNo')
  
  let vahan = document.getElementById('vahan')
  let vahanNo = document.getElementById('vahanNo')
  
  let House = document.getElementById('House')
  let HouseNo = document.getElementById('HouseNo')
  
  let resYear = document.getElementById('resYear').value
  let placeName = document.getElementById('place-name').value
  let thelaTimeAM = document.getElementById('thelaTimeAM').value
  let thelaTimePM = document.getElementById('thelaTimePM').value
  let regNO =  crypto.randomUUID();

  let registered = document.getElementById('registered')
  let registeredNO = document.getElementById('registeredNO')

  let regVal , loanVal , labhVal , placeVal , vahanVal , houseVal
  if(registered.checked==true){
      regVal=registered.value
  }
  if(registeredNO.checked==true){
    regVal=registeredNO.value
  }

  if(loan.checked==true){
       loanVal = loan.value
  }
  if(LoanNo.checked==true){
    loanVal = LoanNo.value
  }

  if(labh.checked==true){
  labhVal = labh.value
  }    
  if(labhNo.checked==true){
    labhVal = labhNo.value
  }
 
  if(place.checked==true){
    placeVal = place.value
  }
  if(placeNo.checked==true){
    placeVal = placeNo.value
  }

  if(vahan.checked==true){
    vahanVal = vahan.value
  }
  if(vahanNo.checked==true){
    vahanVal = vahanNo.value
  }

  if(House.checked==true){
    houseVal = House.value
  }
  if(HouseNo.checked==true){
    houseVal = HouseNo.value
  }
const userData = [{
        name : name1,
        jati : jati,
        currentAdd : currentAdd,
        address : address,
        shiksha :shiksha,
        contact : contact,
        wsContact : wsContact,
        adharNo : adharNo,
        samagrId : samagrId,
        parivarSamgr : parivarSamgr,
        ayushman : ayushman,
        thela : {
          thela : thela,
          thelaTimeAM : thelaTimeAM,
          thelaTimePM : thelaTimePM
        },
        vyapar : vyapar,
        registered : {
          registeredDone : regVal,
          resYear:resYear,
        },
        
        loan : {
          loanTaken :loanVal ,
          loanYojan : loanYojan,
        },
        
        par1to17 : par1to17,
        par17to60: par17to60,
        par60:par60,
        earningMember : earningMember,
        labh : labhVal,
        place: {
          place : placeVal,
          placeName : placeName
        },
        vahan : vahanVal,
        House : houseVal,
        regNO : regNO
    }]
    console.log(userData)
    const user = JSON.stringify(userData)
  localStorage.setItem('user',user)
  window.open('pdf.html',"_blank")
})




// const handleLoan=()=>{
//   const Loan = document.querySelector('.Loan')
//   const loanYojan = document.getElementById('loanYojan')
//     if(Loan.value=='हाँ'){
//      loanYojan.style.visibility='visible'
//     }
    
// }
// const handleNahi = ()=>{
//     const LoanNo = document.querySelector('.LoanNo')
//     const loanYojan = document.getElementById('loanYojan')
//     if(LoanNo.value=='नहीं'){
//         loanYojan.style.visibility='hidden'
//        }
    
// }

// const handleRegister= ()=>{
//     const Register = document.querySelector('.Register')
//     const resYear = document.getElementById('resYear')
//     if(Register.value=='हाँ')
//     {
//         resYear.style.visibility='visible'
//     }
// }

// const handleNoRegister = ()=>{
//     const RegisterNo = document.querySelector('.RegisterNo')
//     const resYear = document.getElementById('resYear')
//      if(RegisterNo.value=='नहीं'){
//         resYear.style.visibility='hidden'
//     }
// }




//generate ID 
const generateId = ()=>{
  let name1 = document.getElementById('name1').value
  let adharNo = document.getElementById('adharNo').value
  let regNO =  crypto.randomUUID();
  const idData = {
    name : name1,
    adharNo : adharNo,
    regNO : regNO
  }
  const ID = JSON.stringify(idData)
  localStorage.setItem('ID',ID)
  window.open('idCard.html','_blank')
}