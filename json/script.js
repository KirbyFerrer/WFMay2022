console.log('loading my custom js')

function myalert(){
    console.log('this is a non popup alert')
}

console.log(document)

//what is an object
//how do i change things in it 

var myobj = {
    'name': 'chris'
    'age': 38,
    'color': 'red'
}

console.log(myobj)

myobj.name = 'bob'
myobj['age'] = 42

console.log(myobj)


//how do i add/removen things in it

myobj.home = 'cali'
myobj['car'] = ['bmmw', 'mini']
console.log(myobj)