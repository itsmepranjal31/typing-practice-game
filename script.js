const quotes=[
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
]

let word=[];
let wordidx=0;

const quoteElement=document.getElementById("quote");
const msgElement=document.getElementById("msg");
const textElement=document.getElementById("text");

const start=document.getElementById("start");

start.addEventListener("click", ()=>{
  let quotesidx=Math.floor(Math.random() * quotes.length);
  let quote=quotes[quotesidx];
  word=quote.split(' ');

  wordidx=0;

  let spanwords=word.map((val)=>{
     return `<span>${val}</span>`
  });

  quoteElement.innerHTML=spanwords.join(' ');
  console.log(quoteElement);
  quoteElement.children[0].classList.add('highlight');
  msgElement.innerText='';
  textElement.focus();
  startTime=new Date().getTime();
  
});


textElement.addEventListener('input', ()=>{

  const currentWord =word[wordidx];
  const typedValue = textElement.value;

  if(typedValue === currentWord && wordidx === word.length -1){
    const elapsedTime= new Date().getTime() - startTime;
    const message=`CONGRATULATIONS! YOU HAVE FINISHED IN ${elapsedTime/1000} seconds`;
    let message2='';
    if(elapsedTime < 1000){
       message2=' YOU ARE A LEVEL-A CODER 🎉🎉';
    }
    else if(elapsedTime>1000 && elapsedTime<3000){
       message2='YOU ARE A LEVEL-B CODER🎉';
    }
    else{
       message2='YOU ARE A LEVEL-C CODER';
    }
    
    msgElement.innerText= message + message2;

    textElement.value='';
    textElement.disabled=true;

  }
  else if(typedValue.endsWith(' ') && typedValue.trim()===currentWord){
    textElement.value='';
    
    ++wordidx;
    

    for(let i=0; i<quoteElement.children.length ; i++){
      const wordElement = quoteElement.children[i];
      if(i===wordidx){
        wordElement.className='highlight ';
      }else{
        wordElement.className='';
      }
    }

  }else if(currentWord.startsWith(typedValue)){
    textElement.className= '';

  }else{
    textElement.className= 'error';
  }

});






// const lastChild=document.getElementById("lastChild");
// lastChild.innerText+=(" from apna college students");
// console.dir(lastChild.innerText);


// let div=document.querySelectorAll(".box");
// div[0].innerText="hello";
// div[1].innerText="i am";
// div[2].innerText="pranjal";
























