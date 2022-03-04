
let count = 0;

const value = document.querySelector("#value")
const btns  = document.querySelectorAll(".btn")

btns.forEach(function (btn){
    // console.log(item)
    btn.addEventListener('click',function(e){
        const result = e.currentTarget.classList;
        if(result.contains("decrease")){
            count--;
        }else if(result.contains("increase")){
            count++;
        }else{
            count = 0;
        }
        if(count>0){
            value.style.color='green'
        }
        if(count<0){
            value.style.color='red'
        }
        if(count == 0){
            value.style.color = '#000'
        }
        value.textContent = count;
    })
})

// forEach() method used for the Iteration of the item
// let data = [1,2,3,45,34,56]
// let newData = []
// for (let i=0;i<data.length;i++){
//     console.log(data[i])
// }

// data.forEach(item =>{
//     newData.push(item)
// })
// console.log(newData)
