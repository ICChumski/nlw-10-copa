function createGame(player1, hour, player2){
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="${player2}">
</li>
`
}
function createCard(date, day, games){
    return `
    <div class="card">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                   ${games}
                    </ul>
            </div>
    `
}
document.querySelector("#cards").innerHTML = 
       
createCard('24/11', 'quinta', createGame("brazil", "16:00", "serbia")
+ 
createGame("hungary", "18:00", "colombia"))
+
createCard('28/11','segunda', createGame("brazil", "13:00", "germany")
+
createGame("japan", "16:00", "ceuta"))
+
createCard('02/12','sexta', createGame("brazil", "16:00", "argentina")
+
createGame("cameroon", "18:00", "hungary"))
+
createCard('04/12','domingo', createGame("france", "16:00", "argentina")
+
createGame("cameroon", "18:00", "isleofman"))
        