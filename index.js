
let myleads=[]
let oldLeads=[]
let inputEL=document.getElementById("input-el")
const list=document.getElementById("list")
const tabBtn=document.getElementById("tabBTN")
//localStorage.setItem("myleads","www.google.com")
// function save (){
//     console.log("btn clicked ")

// }
const deleteBTN=document.getElementById("deleteBtn")
let leadsLocal=JSON.parse(localStorage.getItem("myleads"))
console.log(leadsLocal)
if(leadsLocal){
  myleads=leadsLocal
  render(myleads)
}

// const tabs=[
//   {url:"kkkkkkkkkk"}
// ]

tabBtn.addEventListener("click",function(){
// chrome.tabs.query({active:true,currentWindow:true},function(tabs){
//     myleads.push(tabs[0].url)
//     console.log(tabs[0].url)
//   localStorage.setItem("myleads",JSON.stringify(myleads))
//   render(myleads)


// })
//   console.log(tabs)
chrome.tabs.query({active: true, currentWindow: true}, function(tabs1){
  myleads.push(tabs1[0].url)
  localStorage.setItem("myleads", JSON.stringify(myleads) )
  render(myleads)
})

})
deleteBTN.addEventListener("dblclick",function(){
  console.log("delete clicked ")
  localStorage.clear()
  myleads=[]
  render(myleads)
})
let inputBtn=document.getElementById("inputBtn")
inputBtn.addEventListener("click",function(){
    myleads.push(inputEL.value)
      inputEL.value=""
    // console.log(myleads)
    // console.log("btn clicked from event listner ")
  localStorage.setItem("myleads",JSON.stringify(myleads))
render(myleads)
console.log(localStorage.getItem("myleads"))
})
function render(leads){
    let listItems=""
  for(let i=0;i<leads.length;i++)
{
//    const li= document.createElement("li")
//    li.textContent=myleads[i]
//    list.append(li)

    listItems+=`<li><a target='_blank' href='${leads[i]}'>${leads[i]}</li>`
} 
list.innerHTML=listItems
}
