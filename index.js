
function display(val){

    document.getElementById('result').value += val

    return val

}
 
 
 function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);

    document.getElementById('result').value = y

    return y

}

function clearScreen(){

    document.getElementById('result').value = ''

}

// end of calculator 

let fname = "abdulrahmon"
// document.getElementById('demo').value = abdulrahmon
document.getElementById("demo").innerHTML = fname;

let age = 50;
 document.getElementById("demo1").innerHTML = age;

let x = 7;
let y = 7;
let z = 6;

document.getElementById("demo2").innerHTML =(x == y) + "<br>" + (x == z);

const name = ["tola", "Sola" ,"bola"]
document.getElementById("demo3"). innerHTML = [name]

// geopolitical zone in nigeria
const southwest = ["osun", "ogun","oyo","ondo","lagos"]
const northcenter = ['benue', 'kogi','kwara', 'nasarawa','niger','plateau']
const northeast = ['adamawa', 'bauchi','borno','gomde','taraba','yobe']
const southsouth = ['niger delta']


const demo4 = document.getElementById('demo4').innerHTML = southwest;
const demo5 = document.getElementById('demo5').innerHTML = northcenter;
const demo6 = document.getElementById('demo6').innerHTML = northeast;
const  demo7 = document.getElementById('demo7').innerHTML = southsouth














