async function start(url){
  let res = await fetch(url);
  return res.text();
}

start("http://localhost:5000/api/all").then(data=>{
  createBlock(JSON.parse(data)) 
  createSelectsFilter();
});

function createBlock(data){ 
  let parentBlock = document.querySelector('.products');  
  data.forEach(el=>{
    let element = document.createElement('div'); 
    let pelem = document.createElement('div')
    pelem.classList.add('owl-item');
    pelem.classList.add('active');
    element.classList.add("block-products-carousel__column");
    element.innerHTML = `<div data='${el._id}' data-info="${el.pGeneration}/${el.pGenerationCode}/${el.pModel}/${el.pMarkaModel}">
    <div class="block-products-carousel__cell">
      <div class="product-card product-card--layout--grid">
          <div class="product-card__actions-list">
              <button class="product-card__action product-card__action--quickview" type="button" aria-label="Quick view">
                  <svg width="16" height="16">
                      <path d="M14,15h-4v-2h3v-3h2v4C15,14.6,14.6,15,14,15z M13,3h-3V1h4c0.6,0,1,0.4,1,1v4h-2V3z M6,3H3v3H1V2c0-0.6,0.4-1,1-1h4V3z
    M3,13h3v2H2c-0.6,0-1-0.4-1-1v-4h2V13z"></path>
                  </svg>
              </button> 
          </div>
          <div class="product-card__image">
              <div class="image image--type--product">
                  <a href="product-full.html" class="image__body">
                      <img class="image__tag" src="images/products/product-1-245x245.jpg" alt="">
                  </a>
              </div>
              <div class="status-badge status-badge--style--success product-card__fit status-badge--has-icon status-badge--has-text">
                  <div class="status-badge__body">
                      <div class="status-badge__icon"><svg width="13" height="13">
                              <path d="M12,4.4L5.5,11L1,6.5l1.4-1.4l3.1,3.1L10.6,3L12,4.4z"></path>
                          </svg>
                      </div>
                      <div class="status-badge__text">Part Fit for 2011 Ford Focus S</div>
                      <div class="status-badge__tooltip" tabindex="0" data-toggle="tooltip" title="" data-original-title="${el.pName}"></div>
                  </div>
              </div>
          </div>
          <div class="product-card__info" >
              <div class="product-card__meta"><span class="product-card__meta-title">${el.pSystem}</div>
              <div class="product-card__name">
                  <div>
                      <div class="product-card__badges">
                          <!-- <div class="tag-badge tag-badge--sale">sale</div>
                          <div class="tag-badge tag-badge--new">new</div>
                          <div class="tag-badge tag-badge--hot">hot</div> -->
                      </div>
                      <a href="product-full.html">${el.pMarkaModel}</a>
                  </div>
              </div>
              <div class="product-card__rating">
                  <div class="rating product-card__rating-stars">
                      <div class="rating__body"> 
                      </div>
                  </div>
                  <div class="product-card__rating-label"></div>
              </div>
          </div>
          <div class="product-card__footer">
              <div class="product-card__prices">
                  <div class="product-card__price product-card__price--current">${el.pCoast} TJS</div>
              </div>
              <button class="product-card__addtocart-icon" type="button" aria-label="Add to cart">
                  <svg width="20" height="20">
                      <circle cx="7" cy="17" r="2"></circle>
                      <circle cx="15" cy="17" r="2"></circle>
                      <path d="M20,4.4V5l-1.8,6.3c-0.1,0.4-0.5,0.7-1,0.7H6.7c-0.4,0-0.8-0.3-1-0.7L3.3,3.9C3.1,3.3,2.6,3,2.1,3H0.4C0.2,3,0,2.8,0,2.6
    V1.4C0,1.2,0.2,1,0.4,1h2.5c1,0,1.8,0.6,2.1,1.6L5.1,3l2.3,6.8c0,0.1,0.2,0.2,0.3,0.2h8.6c0.1,0,0.3-0.1,0.3-0.2l1.3-4.4
    C17.9,5.2,17.7,5,17.5,5H9.4C9.2,5,9,4.8,9,4.6V3.4C9,3.2,9.2,3,9.4,3h9.2C19.4,3,20,3.6,20,4.4z"></path>
                  </svg>
              </button>
          </div>
      </div>
    </div>
    </div>`;
    element.addEventListener("click",function(e){
      e.preventDefault();
      console.log(e.target.parentElement.parentElement);
      let classTarget = 'product-card__action product-card__action--quickview';
      if(e.target.className== classTarget|| e.target.parentElement.className==classTarget || e.target.parentElement.parentElement.className==classTarget){
        data.forEach(el=>{
          if(el._id==this.children[0].getAttribute("data")){
              document.querySelector('.pImage').src = el.image1;
              document.querySelector('#img1').src = el.image2;
              document.querySelector('#img2').src = el.image3;
              document.querySelector('#img3').src = el.image4;
              document.querySelector('.all_info_product_block .pName').innerHTML = `${el.prod}`;
              document.querySelector('.all_info_product_block .pNameCode').innerHTML = `название: ${el.pName}`;
              document.querySelector('.all_info_product_block .pCoast').innerHTML = `${el.pCoast} сомони`;
              document.querySelector('.all_info_product_block .pQuantity').innerHTML = `в наличии есть ${el.pQuantity} штуки(а)`;
              document.querySelector('.all_info_product_block .pSystem').innerHTML = `${el.pSystem}`;
              document.querySelector('.all_info_product_block .pElement').innerHTML = `${el.pElement}`;
              document.querySelector('.all_info_product_block .pBrand').innerHTML = `Производитель: ${el.pBrand}`;
              document.querySelector('.all_info_product_block .pCountry').innerHTML = `страна роизводитель: ${el.pCountry}`;
              document.querySelector('.all_info_product_block .pMarkaModel').innerHTML = `для ${el.pMarkaModel} ${el.pModel} ${el.pGeneration} ${el.pGenerationCode}`;
              document.querySelector('.all_info_product_block .pMarkaYear').innerHTML = `Год выпуска машины: ${el.pMarkaYear}`;
              document.querySelector('.all_info_product_block .pMarket').innerHTML = `магазин: ${el.pMarket}`;
              document.querySelector('.all_info_product_block .pAddres').innerHTML = `алрес: ${el.pAddres}`;
              document.querySelector('.moreInfo>p').innerHTML = `${el.pComment}`;
            // console.log(el);
            document.querySelectorAll(".all_info_product .images>img").forEach(img=>{
              img.addEventListener('click',function(){
                let mainPhoto = document.querySelector(".all_info_product .prod_image").src;
                document.querySelector(".all_info_product .prod_image").src = this.src;
                this.src = mainPhoto;
                // 
              })
            })
            document.querySelector(".all_info_product").classList.add('all_info_product--show');
            document.querySelector(".all_info_product--show .closed").addEventListener("click",function(){
              document.querySelector(".all_info_product--show").classList.remove('all_info_product--show');
            })
          }
        })
      }
    })
    pelem.appendChild(element);
    parentBlock.appendChild(pelem); 
  });
  console.log(data.length);
    let ch = 0;
    document.querySelector(".arrow--prev .arrow__button").addEventListener("click",()=>{
      if(ch>0){
        ch-=222;
        document.querySelector(".products").style.transform = `translateX(-${ch}px)`;
        console.log(ch);
      }
    })
    document.querySelector(".arrow--next .arrow__button").addEventListener("click",()=>{
      if(window.screen.width>900){
        if(ch<(222*((document.querySelectorAll('.products>div.active').length-1)-5))){
          ch+=222;
          document.querySelector(".products").style.transform = `translateX(-${ch}px)`;
          console.log(ch);
        }
      }else{
        if(ch<(222*((document.querySelectorAll('.products>div.active').length)-1))){
          ch+=222;
          document.querySelector(".products").style.transform = `translateX(-${ch}px)`;
          console.log(ch);
        }
      }
      
    })
}

document.querySelectorAll('.section-header__groups-button').forEach(button=>{
  button.addEventListener("click",function(){
    document.querySelector('.section-header__groups-button--active').classList.remove('section-header__groups-button--active');
    this.classList.add("section-header__groups-button--active");
  })
})


console.log(document.querySelector('.block-finder__form-control--button'));

document.querySelector(".departments__button").addEventListener("click",(e)=>{
  e.preventDefault();
  document.querySelector('.category-blocks').style.display = "block"; 
})

class CategoryBlock{
  constructor(){

  }
  createContainerCateg(classMass,CategoryListElems){
    let categoryBlocksCategory = createElem(classMass,'div',document.querySelector('.category-blocks'),'') 

    let navigation = createElem(['nav'],'div',categoryBlocksCategory,'')
    let ch = 0;
    let slide = createElem(['slide'],'div',categoryBlocksCategory,"");
    let prev = createElem(['nav-prev','arrow__button'],'button',navigation,`<svg width="7" height="11">
    <path d="M6.7,0.3L6.7,0.3c-0.4-0.4-0.9-0.4-1.3,0L0,5.5l5.4,5.2c0.4,0.4,0.9,0.3,1.3,0l0,0c0.4-0.4,0.4-1,0-1.3l-4-3.9l4-3.9C7.1,1.2,7.1,0.6,6.7,0.3z" />
</svg>`);
    prev.addEventListener("click",()=>{
      
      if(window.screen.width>500){
        if(ch<454){
          ch =227;
        }
        ch-=227;  
      }else{
        ch-=169; 
        if(ch<169) {
          ch = 0;
        }
      }
      
      slide.style.transform = `translateX(-${ch}px)`;
      console.log(ch);
    })
    let next = createElem(['nav-next','arrow__button'],'button',navigation,`<svg width="7" height="11">
    <path d="M0.3,10.7L0.3,10.7c0.4,0.4,0.9,0.4,1.3,0L7,5.5L1.6,0.3C1.2-0.1,0.7,0,0.3,0.3l0,0c-0.4,0.4-0.4,1,0,1.3l4,3.9l-4,3.9
C-0.1,9.8-0.1,10.4,0.3,10.7z" />
</svg>`);
    next.addEventListener("click",()=>{
      if(window.screen.width>500){
        if(ch>((slide.children.length-7)*227)){
          ch=(slide.children.length-7)*227;
        }
        ch+=227;
        slide.style.transform = `translateX(-${ch}px)`;
        console.log(ch);
      }else{
        if(ch>((slide.children.length-4)*169)){
          ch=(slide.children.length-4)*169;
        }
        ch+=169;
        slide.style.transform = `translateX(-${ch}px)`;
        console.log(ch);
      }
      
    })
    let that = this;  
    CategoryListElems.forEach(el1=>{ 
      let block = createElem(['category-blocks-block'],'div',slide,el1.name,el1.image)
      block.setAttribute('data-id',el1.dataName);
      
      block.addEventListener("click",function(){ 
        
        if(Array.from(block.parentElement.parentElement.classList).includes('stage1')){  
          that.createContainerCateg(['container','category-blocks-category','stage2'],choseCategory(CategoryList,this.getAttribute('data-id')));
          
        }else if(Array.from(block.parentElement.parentElement.classList).includes('stage2')){ 
          that.createContainerCateg(['container','category-blocks-category','stage3'],choseCategory(CategoryList.map(el => {if(this.getAttribute('data-id').slice(0,3)==el.dataName){return el.data}}).filter(el=>{return el})[0],this.getAttribute('data-id')));
          
          

          removeStage('.stage3');
          
        }else if(Array.from(block.parentElement.parentElement.classList).includes('stage3')){ 
          console.log(this.children[0].innerHTML); 
          start(`http://localhost:5000/api/test?prod=${this.children[0].innerHTML}`).then(data=>{
            setTimeout(()=>{
              let parentBlock = document.querySelector('.products');
              parentBlock.innerHTML = "";
              createBlock(JSON.parse(data))
              window.location = "#site__body";
              createSelectsFilter();
            })
          });
        }
        removeStage('.stage2');
        
      })
    })
    
    function removeStage(arg){
      if(document.querySelectorAll(arg).length>1){
        document.querySelectorAll(arg)[0].remove();
      }
    }
  }
}

let obj = new CategoryBlock();
obj.createContainerCateg(['container','category-blocks-category','stage1'],CategoryList);
function choseCategory(mass,arg){
  return mass.map(el=>{
    if(el.dataName==arg){
      return el.data;
    }
  }).filter(el=>{return el})[0];
} 



function createElem(classNameMass,tagN,parentBlock,container,image){ 
  let element = document.createElement(tagN);
  classNameMass.forEach(el=>{
    element.classList.add(el);
  })
  element.innerHTML = `<div class='prod-type'>${container}</div>`;
  if(classNameMass.includes('category-blocks-block')){
    element.innerHTML+=`<img src='${image}'>`;
  }
  // 
  parentBlock.appendChild(element);
  return element;
} 
function addSelect(selectClass,selectMass,selectName){
  console.log(selectMass);
  let setMass = new Set();
  selectMass.forEach(el=>{
    setMass.add(el[selectClass])
  }) 
  let select = document.createElement('select');
  select.classList.add('prodInput');
  select.name =selectClass;
  select.innerHTML+=`<option value='none'>${selectName}</option>`;
  Array.from(setMass).forEach(op => {
      select.innerHTML+=`<option>${op}</option>`;
    });
  
  let div = document.createElement('div');
  div.classList.add('block-finder__form-control');
  div.classList.add('block-finder__form-control--select');
  div.appendChild(select)
  document.querySelector('.block-finder__form').appendChild(div);
    return select;
} 
function createSelectsFilter() {
  document.querySelector('.block-finder__form').innerHTML= "";
  let SearchMass = [];
  document.querySelectorAll('.block-products-carousel__column>div').forEach(el=>{ 
    if(typeof el.getAttribute('data-info')=="string"){
      let car = el.getAttribute('data-info').split('/');
      SearchMass.push({"pGeneration":car[0],"pGenerationCode":car[1],pModel:car[2],pMarkaModel:car[3]})
    } 
  }) 
  addSelect('pMarkaModel',SearchMass,'марка машины').addEventListener("change",function(){
    console.log(this.value); 
    let mass= [];
    Cars.forEach(el=>{if(el.name==this.value){
      el.model.forEach(model=>{
        SearchMass.forEach(data=>{
          if(data.pModel==model.model){
            console.log(data);
            mass.push(data)
          }
        })
      }) 
    }})
    addSelect('pModel',mass,'марка');
    addSelect('pGeneration',mass,'покаление');
    addSelect('pGenerationCode',mass,'код покаления');
    createElem(['block-finder__form-control','block-finder__form-control--button'],'button',document.querySelector('.block-finder__form'),'найти').addEventListener('click',(e)=>{ 
      let productInfo = document.querySelectorAll('.block-finder__form .prodInput'); 
      e.preventDefault();
      console.log(productInfo);
      let product ={}
      product.status = true;
      let UrlQuery = '';
      function cUrl(key,selectValue){
        if(selectValue==''){
          console.log(selectPModel);
          
        }else{
          UrlQuery+=`&${key}=${selectValue}`;
        }
      }
      productInfo.forEach(el=>{ 
        if(el.value=="none"){
          el.style.borderRight = "20px solid red";
          product.status = false;
        }else{
          el.style.border = "none";
          product[el.name]= el.value;  
          cUrl(el.name,el.value);
        }
      })      

      console.log(UrlQuery);
      start(`http://localhost:5000/api/test?${UrlQuery}`).then(data=>{
        
        setTimeout(()=>{
          let parentBlock = document.querySelector('.products');
          parentBlock.innerHTML = "";
          console.log(parentBlock);  
          createBlock(JSON.parse(data));
          window.location = "#site__body";
        })
      });
    })
  })
}

document.querySelector('.search__button--end').addEventListener("click",function(e){
  e.preventDefault();
  let qURL = '';
  if(document.querySelector(".block-finder__form select[name='pMarkaModel']").value!="none"){
    qURL =`&pMarkaModel=${document.querySelector(".block-finder__form select[name='pMarkaModel']").value}`;
  }
  qURL+=`&prod=${document.querySelector('.search__input').value}`;

  start(`http://localhost:5000/api/test?${qURL}`).then(data=>{
            setTimeout(()=>{
              let parentBlock = document.querySelector('.products');
              parentBlock.innerHTML = "";
              createBlock(JSON.parse(data))
              window.location = "#site__body";
              createSelectsFilter();
            })
          });
})


