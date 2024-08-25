// function saveLead(){
//     console.log("Button Clicked")
// }

let myLead = []
let oldLead = []
// myLead = JSON.parse(myLead)
// myLead.push("www.amazon.com")
// myLead = JSON.stringify(myLead)

// console.log(typeof myLead)


const inputBtn = document.getElementById("button-el")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")

let leadsfromlocalstorage = JSON.parse(localStorage.getItem("myLead"))
console.log(leadsfromlocalstorage)


// const tabs = [
//     {url : "www.linkdin.com"}
// ]

if(leadsfromlocalstorage){
    myLead = leadsfromlocalstorage
    render(myLead)
}

inputBtn.addEventListener("click" , function saveLead(){
    myLead.push(inputEl.value);
    // console.log(myLead)
    inputEl.value = ""
    localStorage.setItem("myLead" , JSON.stringify(myLead))
    render(myLead)
    
    // console.log(localStorage.getItem("myLead"))
})
deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear()
    myLead = []
    render(myLead)

})
tabBtn.addEventListener("click" , function(){
    chrome.tabs.query({active:true , currentWindow:true} , function(tabs){
        myLead.push(tabs[0].url)
        localStorage.setItem("myleads" , JSON.stringify(myLead))
        render(myLead)
    })
    console.log(tabs[0].url)  
})
function render(Lead){
    let listitem = ""
    for(let i=0 ; i<Lead.length ; i++){
        // console.log(myLead[i])
        
            // ulEl.innerHTML += "<li> " + myLead[i] + "</li> "  one liner but cost DOM

            // const li = document.createElement("li")
            // li.textContent = myLead[i]
            // ulEl.append(li)

            listitem += 
                `<li>
                <a target = '_blank' href = '${Lead}'>
                ${Lead[i]} 
                </a>
                </li>`
                // localStorage.getItem("myitem" , "mylead[i]")
            }

    ulEl.innerHTML = listitem
    // console.log(localStorage.getItem(myitem))
}