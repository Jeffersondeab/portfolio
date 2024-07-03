const obj = [
    {
    comando: "teste 01",
    },
    {
    comando:"teste 02"
    }
]

const testejson = document.querySelector('.testejson')




const jsonData = JSON.stringify(obj)


const objDt = JSON.parse(jsonData)




testejson.textContent = JSON.stringify(objDt) 


testejson.textContent = objDt.comando

console.log(objDt)





function init (){
    objDt
}

init()

 export default{
    init
 }