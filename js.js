let div = document.createElement('div');
document.body.append(div);
function multi() {
    let div1 = document.createElement('div');
    let textNode = document.createTextNode(0);
    document.body.append(div);
    div.append(textNode)
    let inp1 = document.getElementById('inp_1').value,
    inp2 = document.getElementById('inp_2').value;

    let num = inp1 * inp2;
    num = document.createTextNode(num);
    div.append(num);
    console.log(div)
    div.classList.add('res');
    let res = document.querySelector('.res')
    res.style.fontSize = '50px'
    res.style.margin = '50px'
    res.style.border = '1px solid red'
    res.style.padding = '40px'
    res.style.minWidth = '28px'
} 
