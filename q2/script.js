// function lotteryTicketGenerator() {
//   let ticket = Math.floor(Math.random() * 1000) + 1;
//   return ticket;
// }

function lotteryWinner() {
  //   let size = Math.floor(Math.random() * 50) + 1;
  let lotteryList = [111, 222, 333, 444, 555, 666, 777, 888, 999];

  //   for (let i = 0; i < size; i++) {
  //     lotteryList.push(lotteryTicketGenerator());
  //   }

  let winnerIndex = Math.floor(Math.random() * lotteryList.length);
  let winnerNumber = lotteryList[winnerIndex];

  console.log(`Winner: ${winnerNumber}`);

  let winnerElement = document.createElement("h1");
  winnerElement.innerHTML = `Winner: ${winnerNumber}`;
  winnerElement.style.color = "red";
  document.getElementById("winner").innerHTML = "";
  document.getElementById("winner").appendChild(winnerElement);

  document.getElementById(
    "winnerTicketNumber"
  ).textContent = `Winner: ${winnerNumber}`;
  $("#winnerModal").modal("show");
}
