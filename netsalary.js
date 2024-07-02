function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax rates and deductions
    const taxBrackets = [
        { min: 0, max: 24800, rate: 0.1 },
        { min: 24801, max: 29000, rate: 0.15 },
        { min: 29001, max: 58000, rate: 0.2 },
        { min: 58001, max: 83000, rate: 0.25 },
        { min: 83001, max: Infinity, rate: 0.3 }
    ];

    const nhifRates = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 950 },
        { min: 40000, max: 44999, amount: 1000 },
        { min: 45000, max: 49999, amount: 1100 },
        { min: 50000, max: 59999, amount: 1200 },
        { min: 60000, max: 69999, amount: 1300 },
        { min: 70000, max: 79999, amount: 1400 },
        { min: 80000, max: 89999, amount: 1500 },
        { min: 90000, max: 99999, amount: 1600 },
        { min: 100000, max: 109999, amount: 1700 },
        { min: 110000, max: 119999, amount: 1800 },
        { min: 120000, max: 129999, amount: 1900 },
        { min: 130000, max: 134999, amount: 2000 },
        { min: 135000, max: 139999, amount: 2100 },
        { min: 140000, max: 144999, amount: 2200 },
        { min: 145000, max: 149999, amount: 2300 },
        { min: 150000, max: 154999, amount: 2400 },
        { min: 155000, max: 159999, amount: 2500 },
        { min: 160000, max: 164999, amount: 2600 },
        { min: 165000, max: 169999, amount: 2700 },
        { min: 170000, max: 174999, amount: 2800 },
        { min: 175000, max: 179999, amount: 2900 },
        { min: 180000, max: 184999, amount: 3000 },
        { min: 185000, max: 189999, amount: 3100 },
        { min: 190000, max: 194999, amount: 3200 },
        { min: 195000, max: 199999, amount: 3300 },
        { min: 200000, max: Infinity, amount: 3500 }
    ];

    const nssfRateEmployee = 0.06; // 6% of gross salary

    // Function to calculate PAYE tax
    function calculatePaye(grossSalary) {
        let taxPayable = 0;
        let remainingIncome = grossSalary;
        
        for (const bracket of taxBrackets) {
            if (remainingIncome <= 0) {
                break;
            }
            
            const taxableAmount = Math.min(remainingIncome, bracket.max - bracket.min + 1);
            taxPayable += taxableAmount * bracket.rate;
            remainingIncome -= taxableAmount;
        }
        
        return taxPayable;
    }

    // Function to calculate NHIF deduction
    function calculateNhif(grossSalary) {
        for (const rate of nhifRates) {
            if (grossSalary >= rate.min && grossSalary <= rate.max) {
                return rate.amount;
            }
        }
        return 3500; // default to highest rate if gross salary is above the highest bracket
    }

    // Function to calculate NSSF deduction
    function calculateNssf(grossSalary) {
        return grossSalary * nssfRateEmployee;
    }

    // Main function to calculate net salary
    function calculateNetSalary(basicSalary, benefits) {
        const grossSalary = basicSalary + benefits;
        const paye = calculatePaye(grossSalary);
        const nhif = calculateNhif(grossSalary);
        const nssf = calculateNssf(grossSalary);
        const netSalary = grossSalary - paye - nhif - nssf;
        
        return {
            grossSalary: grossSalary,
            paye: paye,
            nhif: nhif,
            nssf: nssf,
            netSalary: netSalary
        };
    }

    const salarySummary = calculateNetSalary(basicSalary, benefits);

    // results
    console.log(`Gross Salary: ${salarySummary.grossSalary.toFixed(2)}`);
    console.log(`PAYE: ${salarySummary.paye.toFixed(2)}`);
    console.log(`NHIF: ${salarySummary.nhif.toFixed(2)}`);
    console.log(`NSSF: ${salarySummary.nssf.toFixed(2)}`);
    console.log(`Net Salary: ${salarySummary.netSalary.toFixed(2)}`);
}

// Example usage:
calculateNetSalary(50000, 8000); // Output 
