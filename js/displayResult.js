console.log("This is greate");

let submit = e => {
  e.preventDefault();

  //LA, InR, period
  const myP = new Payment(100000, 5, 12);
  myP.calculateSchedule();
  const schedule = myP.getSchedule();
  const tbody = document.querySelector("tbody");

  for (let key in schedule) {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td scope="row">${key}</td>
                  <td>${schedule[key]["monthlyPayment"]}</td>
                  <td>${schedule[key]["P_Amount_Paid"]}</td>
                  <td>${schedule[key]["Intrest_Amount_Paid"]}</td>
                  <td>${schedule[key]["Balance"]}</td>
                `;
    tbody.appendChild(tr);
  }
  return false;
};
