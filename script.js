function game() {
    let words = ["рыба", "обезьяна", "ручка", "солнце", "туча", "облако", "собака", "кот", "носорог", "банан", "яблоко", "овца"]
    let word = words[Math.floor(Math.random() * words.length)]
    let answerArray = [];
    for (i = 0; i < word.length; i++) 
        answerArray [i] = "_";
    let remainingLetters = word.length; //оставшиеся буквы - количество
    let count = 10;

    while (remainingLetters > 0 && count != 0) {
        alert (answerArray.join(' '));
        let letter = prompt('Как думаешь, какая буква есть в этом слове?\n(Для выхода из игры нажми "отмена" ')
        if (letter === null) {
            alert('Было загадано слово: '+word+'\nПока!');
            break; }
        
        if (letter.length != 1) {
            alert("Нужно ввести одну букву!");
        } else {

            let ifLetter = false;
            for (i = 0; i < word.length; i++) {
                if (letter === word[i]) {
                    answerArray[i] = letter;
                    ifLetter = true;
                } 
            }

            if (ifLetter === false) { 
                alert("Такой буквы нет :(")
                count--
            } else{
                remainingLetters--
                alert('Да! Такая буква есть!')
            }
        }
        if(remainingLetters === 0) {
            alert('Ура! Слово угадано!\n' + answerArray.join(' '))
        } else if(count == 0){
            alert('Попытки кончились (((\nБыло загадано слово: ' + word)
        }
    }
}

let btn = document.querySelector('#btn')
btn.addEventListener('click', game)