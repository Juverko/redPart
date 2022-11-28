function addSelect(selectClass,selectMass,dataName){
  let select = document.createElement('select');
  select.classList.add('prodInput');
  select.name =selectClass;
  select.innerHTML+=`<option value='none'>${selectMass.name}</option>`;
  if(dataName){
    selectMass.data.forEach(op => {
      select.innerHTML+=`<option data-name='${op[0]}'>${op[1]}</option>`;
    });
  }else{
    selectMass.data.forEach(op => {
      select.innerHTML+=`<option>${op}</option>`;
    });
  }
  

  let div = document.createElement('div');
  div.classList.add('block-finder__form-control');
  div.classList.add('block-finder__form-control--select');
  div.appendChild(select)
  document.querySelector('.block-finder__form').appendChild(div);

}
function createInput(className,inpType,plholder){
  let elem = document.createElement('input');
  elem.setAttribute('type',inpType);
  elem.setAttribute('placeholder',plholder); 
  elem.setAttribute('name',className); 
  elem.classList.add('form-control');
  elem.classList.add('prodInput');
  let div = document.createElement('div');
  div.classList.add('block-finder__form-control');
  div.classList.add('block-finder__form-control--input');
  div.appendChild(elem)
  document.querySelector('.block-finder__form').appendChild(div); 
  return elem;
} 

async function start(){
let year = [];
let year1 = [];
for(i=1980;i<=new Date().getFullYear();i++){
  year.push(i);
}

for(i=1980;i<=new Date().getFullYear();i++){
  year1.push(['s'+i,i]);
}
 
 

createInput('pMarket','text','название магазина');
createInput('pPerson','text','имя правца');
createInput('pAddres','text','адрес');
createInput('pPhone','text','тел');
createInput('pName','text','название продукта');
createInput('pBrand','text','производитель');
createInput('pCoast','number','цена (в сомони)');
createInput('pQuantity','number','в наличии');
createInput('pComment','text','комментарии продукту');
createInput('image','file','').setAttribute("multiple","true"); 



addSelect('pMarkaYear',{name:"год выпуск машины (от)",data:year});
addSelect('pMarkaYear',{name:"год выпуск машины (до)",data:year});
addSelect('pCountry',{name:"страна производитель",data:Contryes});

 

addSelect('pSystem',{name:"Система",data:CategoryList.map(el=>{return [el.dataName,el.name]})},dataName=true);

selectEvent(`pSystem`,`Элементы`,`pElement`,CategoryList,"data")

let addButton = document.querySelector('.add_product');
// document.querySelector('.add_product').remove();
// console.log(addButton.innerHTML);

function selectEvent(parentElem,resName,elName,mass,secondElemMassName){
  document.querySelector(`select[name=${parentElem}]`).addEventListener("change",function(){
    // console.dir(this.selectedOptions[0].getAttribute("data-name"));
    
    
    let res = { 
      name:`${resName}`,
      data:[],
    }
    if(elName==`pElement`){
      mass.forEach(el=>{
        if(el.dataName==this.selectedOptions[0].getAttribute("data-name")){
          el[secondElemMassName].forEach(ell=>{res[secondElemMassName].push([ell.dataName,ell.name])})
        }
      });
      addSelect(elName,res,dataName=true);
    }else if(elName==`pModel`){
      mass.forEach(el=>{ 
        if(el.dataName==this.selectedOptions[0].getAttribute("data-name")){ 
          console.log(el.dataName);
          console.log();
          el[secondElemMassName].forEach(ell=>{
            res.data.push([ell.dataName,ell[secondElemMassName]])
          }) 
        }
      });
      addSelect(elName,res,dataName=true);
    }else if(elName==`pGeneration`|| elName==`pGenerationCode`){
      let setMass = new Set();
      mass.forEach(el=>{ 
        if(el.dataName==this.selectedOptions[0].getAttribute("data-name")){   
          el.model.forEach(ell=>{
            ell[secondElemMassName].forEach(elem=>{
              // res.data.push([elem,elem])
              setMass.add(elem);
            })
          }) 
        }
      });
      res.data =Array.from(setMass).sort((a,b)=>{return a-b}).map(ell=>{return [ell,ell]});
      addSelect(elName,res,dataName=true);
    }else{
      mass.forEach(el=>{ 
        if(el.dataName==this.selectedOptions[0].getAttribute("data-name").slice(0,3)){ 
          el[secondElemMassName].forEach(ell=>{
            console.log(ell.dataName);
            console.log(this.selectedOptions[0].getAttribute("data-name"));
            if(ell.dataName==this.selectedOptions[0].getAttribute("data-name")){
              ell[secondElemMassName].forEach(elem=>{
                res.data.push([elem.dataName,elem.name])
              })
            }
          })
        }
      });
      addSelect(elName,res,dataName=true);
    }
    
  
    
  
  
    if(document.querySelectorAll(`select[name=${elName}]`).length>1){
      document.querySelectorAll(`select[name=${elName}]`)[0].parentElement.remove();
      if(document.querySelector(`select[name=prod`)){
        document.querySelector(`select[name=prod`).parentElement.remove();
      }
    }

    // let done = document.
    // <button class="block-finder__form-control block-finder__form-control--button add_product" type="submit">Додавить</button>

    

    if(elName==`pElement`){
      selectEvent(`pElement`,`детали`,`prod`,mass,secondElemMassName);
    }else if(elName==`prod`){
      addSelect('pMarkaModel',{name:"марка машины",data:Cars.map(car=>{return [car.dataName,car.name]})},dataName=true);
      selectEvent(`pMarkaModel`,`модель машины`,`pModel`,Cars,"model");
      selectEvent(`pMarkaModel`,`код машины`,`pGenerationCode`,Cars,"generationCode");
      selectEvent(`pMarkaModel`,`покаление машины`,`pGeneration`,Cars,"generation");
    }
    // document.querySelector('.block-finder__form').appendChild(addButton);

  })
}
addButton.addEventListener("click",(e)=>{
  
  // sendData(e);
})
}


start()




async function sendData(e){
  e.preventDefault();
  let productInfo = document.querySelectorAll('.block-finder__form .prodInput'); 
  let product ={}
  product.status = true;
  
  
  productInfo.forEach(el=>{ 
    if(el.value=="none" || el.value.trim()==""){
      el.style.borderRight = "20px solid red";
      product.status = false;
    }else{
      el.style.border = "none";
      // e.preventAction = false;
      // console.log(el.name);
      if(el.name=='pSystem' || el.name=='pElement' || el.name=='prod' || el.name=='pMarkaModel' || el.name=='pModel'){
        product[el.name] =el.selectedOptions[0].innerHTML; 
      }else{
        product[el.name]= el.value;  
      }
    }
  })
  if(product.status){
    let url = 'http://localhost:5000/api/post';
    
    // data.append('file', input.files[0]);
 
    console.log(product);
    await fetch("http://localhost:5000/api/post",{
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      // headers: {
      //   'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      //   'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
      // },
      method: "POST",
      body: JSON.stringify(product)
    }).then(()=>{
      alert("товар добавлен");
      // window.location = './index.html';
    })
  }
}





// Sendddd!
 












/* 

    {
      pAddres
      : 
      "212"
      pBrand
      : 
      "23123"
      pCoast
      : 
      "12"
      pCountry
      : 
      "Аруба"
      pElement
      : 
      "00101"
      pGeneration
      : 
      "5"
      pGenerationCode
      : 
      "E170, E180"
      pMarkaModel
      : 
      "104"
      pMarkaYear
      : 
      "2018"
      pMarket
      : 
      "1111"
      pModel
      : 
      "10401"
      pName
      : 
      "31231233"
      pPerson
      : 
      "уйцуй"
      pPhone
      : 
      "цйуйц"
      pQuantity
      : 
      "22"
      pSystem
      : 
      "001"
      prod
      : 
      "0010104"
          }

*/







// document.querySelector('select[name=pSystem]').addEventListener("change",function(){
//   console.log(this.value);
  
  
//   let res = { 
//     name:'Элементы',
//     data:[],
//   }
//   CategoryList.forEach(el=>{
//     if(el.dataName==this.value){
//       el.data.forEach(ell=>{res.data.push([ell.dataName,ell.name])})
//     }
//   });

//   addSelect('pElement',res,dataName=true);


//   if(document.querySelectorAll('select[name=pElement]').length>1){
//     document.querySelectorAll('select[name=pElement]')[0].parentElement.remove();
//   }
// })




