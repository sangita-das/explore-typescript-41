const salary: number = 7500;
const freindsSalaries: number[] = [7500, 12300, 17200, 9400, 8300];
const friends: string[] = ['Sakib', 'Rakib', 'Nakib', 'Dakib'];

freindsSalaries[0] = 10500;
freindsSalaries.push(13100);


// we can only push number not string
// freindsSalaries[4] = '9800';
// freindsSalaries.push('7300');


friends.push('Bakib');
friends[2] = 'Qakib';

// we have to push string not number
// friends.push(45800);



let max = 0;
for (const salary of freindsSalaries) {
  if (salary > max) {
    max = salary;
  }
}