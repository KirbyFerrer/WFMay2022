function hide(element) {
    element.remove()
}
//removal of the join button
function Logout(element) {
    element.innerText = "Logout";
}
//switch from login to logout

function tlikes() {
    var element = document.querySelector('.number-1');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-1').innerHTML = value;
}


function mlikes() {
    var element = document.querySelector('.number-2');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-2').innerHTML = value;
}


function clikes() {
    var element = document.querySelector('.number-3');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-3').innerHTML = value;
}