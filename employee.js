let Employee = {salary: 100000};

export let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

export const getCadre= function() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

export const calculateTax= function() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

export const getBenefits= function(){
  return payGrades[getCadre()].benefits.join(', ');
}

export const calculateBonus= function(){
  return .02 * Employee.salary;
}

export const reimbursementEligibility= function(){
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0; 
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

export {Employee, getCadre as cadre, calculateTax as tax, getBenefits as benefits,calculateBonus as bonus, reimbursementEligibility as reimbursement};
export default Employee;
