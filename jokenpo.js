
const mensagemVitoria = 'Você Ganhou!'
const mensagemDerrota = 'Você perdeu!'
const mensagemEmpate = "Empatou!"
const types = ["pedra", "papel", "tesoura"]

let pontuacaoPlayer = 0
let pontuacaoComputador = 0

function addTableResult(playerHand, playerHandTwo, playerWin){
    const tabela = document.getElementById('tableBody')
    addPontuacao(playerWin)
    tabela.innerHTML += `<tr>
        <td>${playerHand}</td>
        <td>${playerHandTwo}</td>
        <td>${playerHand === playerHandTwo ? 'Empatou!' : playerWin ? 'jogador 1 venceu!' : 'jogador 2 venceu!'}</td>
    </tr>`

}

function addPontuacao(playerWin){
    const pontuacaoPlayerElement = document.getElementById('pontuacaoPlayer')
    const pontuacaoComputadorElement = document.getElementById('pontuacaoComputador')
    if(playerWin){
        pontuacaoPlayerElement.innerHTML = pontuacaoPlayer
    }else{
        pontuacaoComputadorElement.innerHTML = pontuacaoComputador
    }
}

function playJokenpo() {
    const playerHand = document.getElementById('playerHand').value;

    const playerHandTwo = types[Math.floor(Math.random() * 3)];

    if(playerHand === playerHandTwo){
        alert(mensagemEmpate)
        addTableResult(playerHand,playerHandTwo,false)
        return
    }

    //pedra
    if(playerHand === 'pedra'){
        if(playerHandTwo === 'papel'){
            alert(mensagemDerrota)
            pontuacaoComputador++
            addTableResult(playerHand,playerHandTwo,false)
            return
        }else{
            alert(mensagemVitoria)
            pontuacaoPlayer++
            addTableResult(playerHand,playerHandTwo, true)
            return 
        }
    }
    //papel
    if(playerHand === 'papel'){
        if(playerHandTwo === 'tesoura'){
            alert(mensagemDerrota)
            pontuacaoComputador++
            addTableResult(playerHand,playerHandTwo,false)
            return
        }else{
            alert(mensagemVitoria)
            pontuacaoPlayer++
            addTableResult(playerHand,playerHandTwo,true)
            return
        }
    }

    //tesoura
    if(playerHand === 'tesoura'){
        if(playerHandTwo === 'pedra'){
            alert(mensagemDerrota)
            pontuacaoComputador++
            addTableResult(playerHand,playerHandTwo,false)
            return
        }else{
            alert(mensagemVitoria)
            pontuacaoPlayer++
            addTableResult(playerHand,playerHandTwo,true)
            return 
        }
    }

}

