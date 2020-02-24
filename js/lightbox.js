const klein = document.querySelectorAll('.klein');
const groot = document.querySelectorAll('.groot');

const alleinfo = [];

for(let i = 0; i<groot.length; i++){
    alleinfo.push(groot[i]);

    groot[i].remove();
}
let maakSluitKnop = document.createElement("i")
maakSluitKnop.className = "fas fa-times-circle sk";
maakSluitKnop.addEventListener("click", deleteClick)

function clicked(num){
    console.log("geklikt op "+num);
    console.log(alleinfo[num].innerHTML);
    // let test = document.createElement('h1');
    // test.innerHTML = 'Een oefening met MD1A ' + num;
    // document.body.append(test);
    let clickk = document.createElement('div');
    clickk.id = 'clickk';
    clickk.addEventListener("click", deleteClick);
    let clickkInhoud = document.createElement('div');
    clickkInhoud.className = 'clickk-inhoud';
    clickkInhoud.innerHTML = alleinfo[num].innerHTML;
    clickkInhoud.addEventListener("click", function(e){
        e.stopPropagation();
    })
    clickkInhoud.prepend(maakSluitKnop);
    clickk.append(clickkInhoud);
    document.body.append(clickk);
}

for(let i = 0; i<klein.length; i++){
    klein[i].addEventListener('click', function(){
        clicked(i)
    });
}
function deleteClick(){
    document.getElementById("clickk").remove();
}
