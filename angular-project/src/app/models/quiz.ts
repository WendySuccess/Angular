export class Quiz {
    id: number ;
    Question: string ; 
    OptionA: string ;
    OptionB: string ;
    OptionC: string ;
    OptionD: string ;
    answer: string ;
    useranswer: string ; 

    constructor(){
        this.id = 0;
        this.Question = "";
        this.OptionA = "";
        this.OptionB = "";
        this.OptionC = "";
        this.OptionD = "";
        this.answer = "";
        this.useranswer = "";
    }
}
