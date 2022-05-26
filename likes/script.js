function mlikes() {
    var element = document.querySelector('.number-1');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-1').innerHTML = value;
}


function klikes() {
    var element = document.querySelector('.number-2');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-2').innerHTML = value;
}

function rlikes() {
    var element = document.querySelector('.number-3');
    var value = element.innerHTML;

    ++value;
    console.log(value)
    document.querySelector('.number-3').innerHTML = value;
}