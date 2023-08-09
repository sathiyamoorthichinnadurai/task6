const filteritem=document.querySelector(".items");
const filterimage=document.querySelectorAll(".image");
window.onload = ()=>{ 
    filteritem.onclick = (selecteditem)=> {
        if(selecteditem.target.classList.contains("item")){
            filteritem.querySelector(".active").classList.remove("active");
            selecteditem.target.classList.add("active");
            let filtername= selecteditem.target.getAttribute("data-name");
            filterimage.forEach((image)=>{
                let filterimages = image.getAttribute("data-name");
              if((filterimages == filtername) ||  filtername == "all"){
                image.classList.add("show")
                image.classList.remove("hide")

              }
              else{
                image.classList.add("hide");
                image.classList.remove("show");

              }
            });
            
        }
    }
    for(let index=0;index < filterimage.length;index++){
      filterimage[index].setAttribute("onclick","preview(this)")
    }
}
//selecting images
const previewbox=document.querySelector(".previewbox"),
previewimg = previewbox.querySelector("img"),
closeicon = previewbox.querySelector(".icon"),
titlename = previewbox.querySelector(".title p"),
shadow = document.querySelector(".shadow");


function preview (element){
  let selectedimage=element.querySelector("img").src;
  let selectedtitle= element.getAttribute("data-name");
  previewimg .src=selectedimage;
  titlename.textContent=selectedtitle;
   previewbox.classList.add("show");
   shadow.classList.add("show")

  closeicon.onclick = ()=>{
    previewbox.classList.remove("show");
    shadow.classList.remove("show");

  }
}
