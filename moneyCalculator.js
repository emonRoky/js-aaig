const perTicket = 120;
const securityGuardSalary = 500;
const staff = 8;
const staffCost = 50;


function calculateMoney(ticket) {
    if (0 <= ticket) {
        const totalTicketSell = ticket * perTicket;
        const totalCost = securityGuardSalary + (staff * staffCost);
        const profit = totalTicketSell - totalCost;
        if (0 <= profit) {
            return `Your Daily Profit Is ${profit}`
        } else {
            return `Your Daily lose Is ${profit}`
        }
    }
    else{
        return "Invalid Number! please Input only Positive number."
    }
}

const totalProfit = calculateMoney(1);
console.log(totalProfit);
