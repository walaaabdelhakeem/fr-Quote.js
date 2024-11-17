var quote=[
    {
        name:"“Be yourself; everyone else is already taken.”",
        owner:"― Oscar Wilde"
    },
    {
        name:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        owner:"― Marilyn Monroe"
    }
    ,{
        name:"“So many books, so little time.”",
        owner:"― Frank Zappa"
    }
    ,{
        name:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        owner:"― Albert Einstein"
    }
    ,{
        name:"“A room without books is like a body without a soul.”",
        owner:"― Marcus Tullius Cicero"
    }
]
console.log(quote.length)
let x= [];
function disPlay() {
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * 4);
    } while (x[x.length - 1] === randomNumber);
    
    document.getElementById("asd1").innerHTML = `<h6>${quote[randomNumber].name}</h6>
    <h6>${quote[randomNumber].owner}</h6>`;
     
}