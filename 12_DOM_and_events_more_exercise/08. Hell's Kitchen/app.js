function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const info = JSON.parse(document.querySelector('#inputs > textarea').value);
      let kitchensInfo = {};
      for (currentInfo of info) {
         const [currentKitchen, ...employees] = currentInfo.split(' - ');
         if (!(currentKitchen in kitchensInfo)) {
            kitchensInfo[currentKitchen] = {
               workers: [],
               salaries: [],
               
            };
         }
         for (workerInfo of employees) {
            const worker = workerInfo.split(', ');
            for (currentWorker of worker) {
               const [name, salary] = currentWorker.split(' ');
               kitchensInfo[currentKitchen].workers.push({ name: name, salary: Number(salary) });
               kitchensInfo[currentKitchen].salaries.push(Number(salary));
            }
         }
      }
      let sorted = Object.keys(kitchensInfo).sort((a, b) => {
         let aAverageSalary = (kitchensInfo[a].salaries.reduce((a, b) => a + b, 0)) / (kitchensInfo[a].salaries.length);
         let bAverageSalary = (kitchensInfo[b].salaries.reduce((a, b) => a + b, 0)) / (kitchensInfo[b].salaries.length);
         return bAverageSalary - aAverageSalary;
      });
      const maxSalary = Math.max(...kitchensInfo[sorted[0]].salaries);
      const sumSalaries = (kitchensInfo[sorted[0]].salaries.reduce((a, b) => a + b, 0));
      const averageSalary = sumSalaries / kitchensInfo[sorted[0]].salaries.length;
      
      const bestRestaurant = document.querySelector('#bestRestaurant > p');
      bestRestaurant.textContent = `Name: ${sorted[0]} Average Salary: ${averageSalary.toFixed(2)} Best Salary: ${maxSalary.toFixed(2)}`;
      
      let sortedEmployees = Object.values(kitchensInfo[sorted[0]].workers).sort((a, b) => b.salary - a.salary);

      let allWorkers = [];
      for (employee of sortedEmployees) {
         allWorkers.push(`Name: ${employee.name} With Salary: ${employee.salary}`);
      }

      const bestRestaurantWorkers = document.querySelector('#workers > p');
      bestRestaurantWorkers.textContent = allWorkers.join(' ');
   }
}