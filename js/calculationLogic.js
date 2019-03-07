class Payment {
  constructor(A, R, N) {
    this.A = A;
    this.R = R / 100 / 12;
    this.N = N;
    this.response = {};
    console.log(this.R);
  }

  calculateSchedule() {
    // (Rn * A) * Math.pow((1 + Rn), N) / (Math.pow((1 + Rn), N)-1);
    let monthlyPayment =
      (this.R * this.A * Math.pow(1 + this.R, this.N)) /
      (Math.pow(1 + this.R, this.N) - 1);

    // P_amount = PP/(Math.pow((1 + Rn), (1 + N - i)));
    // interest = PP - P_amount;
    // bal = (interest/Rn) - P_amount

    let paid, int;
    let bal;
    for (var i = 1; i < this.N + 1; i++) {
      // if (bal < monthlyPayment) {
      paid = monthlyPayment / Math.pow(1 + this.R, 1 + this.N - i);
      // } else {
      //   paid = bal;
      // }
      int = monthlyPayment - paid;
      bal = int / this.R - paid;

      this.response[i] = {
        monthlyPayment: monthlyPayment.toFixed(2),
        P_Amount_Paid: paid.toFixed(2),
        Intrest_Amount_Paid: int.toFixed(2),
        Balance: bal.toFixed(2)
      };
    }
  }

  getSchedule() {
    return this.response;
  }
}
