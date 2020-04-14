import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, 'Javascript is a very wierd language', 'Lenny Dennis',new Date(2019,9,14),0,0),
    new Quote(2, 'Live as if you were to die tomorrow. Learn as if you were to live forever', ' Mahatma Gandhi',new Date(2019,9,14),0,0),
    new Quote(3, 'That which does not kill us makes us stronger', 'Friedrich Nietzsche',new Date(2019,9,14),0,0),
    new Quote(4, 'We must not allow other people’s limited perceptions to define us', 'Virginia Satir',new Date(2019,9,14),0,0),
    new Quote(5, 'Do what you can, with what you have, where you are', 'Theodore Roosevelt',new Date(2019,9,14),0,0),
    new Quote(6, 'This above all: to thine own self be true.', 'William Shakespeare',new Date(2019,9,14),0,0),
  ];
  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }



  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  clickCounter = 0;
  dislikeCounter = 0;
  highestCounter = 0;
  bestQuote:string;
  
  findHighestVotes(){
    this.highestCounter = 0;
    for(let i=0; i < this.quotes.length; i++){
      if(this.quotes[i].clickCounter>this.highestCounter){
        this.highestCounter = this.quotes[i].clickCounter;
        this.dislikeCounter = this.quotes[i].dislikeCounter;
        this.bestQuote = this.quotes[i].description;
      }
    }
  }
  countClick(quote) {
    quote.clickCounter = quote.clickCounter + 1;
  }
  countDislike(quote) {
    quote.dislikeCounter = quote.dislikeCounter + 1;
  }
  

  constructor() { }

  ngOnInit() {
  };

};

