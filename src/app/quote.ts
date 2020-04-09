export class Quote {
  public showDescription: boolean;
  constructor(
    public id: number,
    public description: string, 
    public name: string,
    public completeDate: Date,public clickCounter:number, public dislikeCounter:number,){
    this.showDescription=false;
    
  }
}