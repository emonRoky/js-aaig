
function monthlySavings(incomes, expense) {
    let count = 0;
    for(const income of incomes){
        if (income >= 3000) {
            count = income * 0.8;
        }
        else{
            count += income; 
        } 
    }

    const saving = count - expense;
   if(saving >= 0){
        return `Total Savings ${saving}`;
   }else{
        return "Earn More You Are Too Broke!";
   }
    
    
}
const TotalSavings = monthlySavings([ 1000 , 1000 , 3000 ] , 5400) ;
console.log(TotalSavings);
