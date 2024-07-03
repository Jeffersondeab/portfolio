const obj = [
    {
    comandone: "teste 01",
    },
]

const testejson = document.querySelector('.testejson')




const jsonData = JSON.stringify(obj)


const objDt = JSON.parse(jsonData)


testejson.textContent = JSON.stringify(objDt) 


console.log(objDt)







function init (){
    objDt
}

init()

 export default{
    init
 }