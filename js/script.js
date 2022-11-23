console.log('Hello World!');


//eseguo un ciclo per stampare in console i numeri da 1 a 100
for (let i = 1; i < 101; i++) {
    //aggiungo un condizionale per stampare cose differenti in casi divvefferenti
    //SE PRIMO CASO : se il numero in questione è divisibile sia per 3 che per 5 faccio stampare FizzBuzz invece del numero
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log('FizzBuzz')
    } 
    //ALTRIMENTI SECONDO CASO : se il numero in questione è divisibile solo per 3 faccio stampare solo Fizz invece del numero
    else if (i % 3 === 0) {
        console.log('Fizz')
    } 
    //ALTRIMENTI TERZO CASO : se il numero in questione è divisibile solo per 5 faccio stampare solo Buzz invece del numero
    else if (i % 5 === 0) {
        console.log('Buzz')
    } 
    //ALTRIMENTI RESIDUALE : in tutti gli altri casi faccio stampare solo il numero stesso
    else {
        console.log(i)
    }
}

const workingSpace = document.getElementById('workingSpace')



let addedElementsVariable

//eseguo un ciclo per stampare in console i numeri da 1 a 100
for (let i = 1; i < 101; i++) {

const fizz =`
    <div class="d-flex justify-content-center custom-align-center custom-bg-green">
        <div class="text-white text-center fs-3">
            Fizz
        </div>
    </div>`

const buzz =`
    <div class="d-flex justify-content-center custom-align-center custom-bg-green">
        <div class="custom-text-magenta text-center fs-3">
            Buzz
        </div>
    </div>`

const fizzBuzz =`
    <div class="d-flex justify-content-center custom-align-center custom-bg-orange">
        <div class="custom-text-magenta text-center fs-3">
            FizzBuzz
        </div>
    </div>`

const normalNumber =`
    <div class="d-flex justify-content-center custom-align-center custom-bg-cyan">
        <div class="custom-text-magenta text-center fs-3">
            ${i}
        </div>
    </div>`




    //aggiungo un condizionale per stampare cose differenti in casi divvefferenti
    //SE PRIMO CASO : se il numero in questione è divisibile sia per 3 che per 5 faccio stampare FizzBuzz invece del numero
    if ((i % 3 === 0) && (i % 5 === 0)) {
        addedElementsVariable += fizzBuzz
    } 
    //ALTRIMENTI SECONDO CASO : se il numero in questione è divisibile solo per 3 faccio stampare solo Fizz invece del numero
    else if (i % 3 === 0) {
        addedElementsVariable += fizz
    } 
    //ALTRIMENTI TERZO CASO : se il numero in questione è divisibile solo per 5 faccio stampare solo Buzz invece del numero
    else if (i % 5 === 0) {
        addedElementsVariable += buzz
    } 
    //ALTRIMENTI RESIDUALE : in tutti gli altri casi faccio stampare solo il numero stesso
    else {
        addedElementsVariable += normalNumber
    }
}

workingSpace.innerHTML = `${addedElementsVariable}`

console.log(addedElementsVariable)