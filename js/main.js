var arrayOfQuotes = [
  {'author': 'Napoleon Hill', 
   'quote': '“If you cannot do great things, do small things in a great way.” '
  },
  {'author': 'Albert Einstein', 
   'quote': 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
  },
  {'author': 'Mae West', 
   'quote': 'You only live once, but if you do it right, once is enough.'
  },
  {'author': 'Albert Camus', 
   'quote': `Do not walk in front of me… I may not follow
   Do not walk behind me… I may not lead
   Walk beside me… just be my friend`
  },
  {'author': 'Oscar Wilde', 
   'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
  },
  {'author': 'Ralph Waldo Emerson', 
   'quote': 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'
  },
];



function randomSelector(){
  return Math.floor(Math.random() * arrayOfQuotes.length ) ;
}

function generateQuote(){
var randomNumber= randomSelector(arrayOfQuotes.length);
document.getElementById('quoteOutput').innerHTML=" ' " + arrayOfQuotes[randomNumber].author + " ' ";
document.getElementById('authorOutput').innerHTML ="-" + arrayOfQuotes[randomNumber].quote + "-";
}
