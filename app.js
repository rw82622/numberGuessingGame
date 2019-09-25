console.log("HELLO CODE PLATOON!")


random_number = 0

let pickRandomNumber = () => {
  random_number = Math.floor(Math.random() * 101)
  console.log(random_number)
  return random_number
}

document.getElementById("submit-number").onclick = () => {
  let number = document.getElementById('input-number').value;
  let reset = document.getElementById('input-number').value = ''
  let new_elem = document.createElement("LI")
  let new_num = document.createTextNode(number)
  new_elem.appendChild(new_num)
  document.getElementById('number-list').appendChild(new_elem)
  if (number == random_number) {
    document.getElementById('game-action').innerHTML = "YOU WON!"
    return reset
  }
  else if (number < random_number) {
    document.getElementById('game-action').innerHTML = "Pick a Higher Number!"
    return reset
  } else {
    document.getElementById('game-action').innerHTML = "Pick a Lower Number!"
    return reset
  }
}


pickRandomNumber()

