 const obj = [
    {
    comandone: "teste 01",
    },
]


const jsonData = JSON.stringify(obj)


const objDt = JSON.parse(jsonData)


console.log(objDt)







function init (){
    objDt
}

init()

 export default{
    init
 }