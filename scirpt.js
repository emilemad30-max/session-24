fetch('https://dummyjson.com/products').then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data);

for(let i=0;i<data.products.length;i++){
    let parent=document.createElement("div")
    let img=document.createElement("img")
    img.setAttribute("src",data.products[i].images[0])
    let head=document.createElement("h2")
    head.textContent=data.products[i].title
    let des=document.createElement("p")
    des.textContent=data.products[i].description
    let text=document.createElement("p")
    text.textContent=data.products[i].price + " $"
    parent.appendChild(img)
    parent.appendChild(head)
    parent.appendChild(des)
    parent.appendChild(text)
    document.body.appendChild(parent)
    document.body.style.display="flex"
    document.body.style.flexWrap="wrap"
    document.body.style.justifyContent="space-evenly"
    parent.style.border="2px solid black"
    parent.style.width="370px"
    parent.style.marginBottom="30px"
    parent.style.borderRadius="30px"
    // _______________________________
    img.style.width="100%"
    img.style.height="250px"
    img.style.borderRadius="30px"
    // _______________________________
    head.style.padding="0px"
    head.style.textAlign="center"
    // _______________________________
    des.style.textAlign="center"
    des.style.padding="15px"
    // _______________________________
    text.style.paddingBottom="10px"
    text.style.paddingLeft="10px"
    text.style.fontSize="18px"
}
})