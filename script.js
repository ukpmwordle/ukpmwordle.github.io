
const data = {'Arthur Balfour': {'party': 0, 'gender': 0, 'start': 1902, 'duration': 3, 'monarch': 0}, 'Henry Campbell Bannerman': {'party': 2, 'gender': 0, 'start': 1905, 'duration': 2, 'monarch': 0}, 'H H Asquith': {'party': 2, 'gender': 0, 'start': 1908, 'duration': 8, 'monarch': 0}, 'David Lloyd George': {'party': 2, 'gender': 0, 'start': 1916, 'duration': 5, 'monarch': 1}, 'Bonar Law': {'party': 0, 'gender': 0, 'start': 1922, 'duration': 0, 'monarch': 1}, 'Stanley Baldwin': {'party': 0, 'gender': 0, 'start': 1923, 'duration': 0, 'monarch': 1}, 'Ramsay MacDonald': {'party': 1, 'gender': 0, 'start': 1924, 'duration': 0, 'monarch': 1}, 'Neville Chamberlain': {'party': 0, 'gender': 0, 'start': 1937, 'duration': 2, 'monarch': 2}, 'Winston Churchill': {'party': 0, 'gender': 0, 'start': 1940, 'duration': 5, 'monarch': 2}, 'Clement Attlee': {'party': 1, 'gender': 0, 'start': 1945, 'duration': 6, 'monarch': 2}, 'Anthony Eden': {'party': 0, 'gender': 0, 'start': 1955, 'duration': 1, 'monarch': 3}, 'Harold Macmillan': {'party': 0, 'gender': 0, 'start': 1957, 'duration': 6, 'monarch': 3}, 'Alec Douglas Home': {'party': 0, 'gender': 0, 'start': 1963, 'duration': 0, 'monarch': 3}, 'Harold Wilson': {'party': 1, 'gender': 0, 'start': 1964, 'duration': 5, 'monarch': 3}, 'Edward Heath': {'party': 0, 'gender': 0, 'start': 1970, 'duration': 3, 'monarch': 3}, 'James Callaghan': {'party': 1, 'gender': 0, 'start': 1976, 'duration': 3, 'monarch': 3}, 'Margaret Thatcher': {'party': 0, 'gender': 1, 'start': 1979, 'duration': 11, 'monarch': 3}, 'John Major': {'party': 0, 'gender': 0, 'start': 1990, 'duration': 6, 'monarch': 3}, 'Tony Blair': {'party': 1, 'gender': 0, 'start': 1997, 'duration': 10, 'monarch': 3}, 'Gordon Brown': {'party': 1, 'gender': 0, 'start': 2007, 'duration': 2, 'monarch': 3}, 'David Cameron': {'party': 0, 'gender': 0, 'start': 2010, 'duration': 6, 'monarch': 3}, 'Theresa May': {'party': 0, 'gender': 1, 'start': 2016, 'duration': 3, 'monarch': 3}, 'Boris Johnson': {'party': 0, 'gender': 0, 'start': 2019, 'duration': 3, 'monarch': 3}, 'Liz Truss': {'party': 0, 'gender': 1, 'start': 2022, 'duration': 0, 'monarch': 3}, 'Rishi Sunak': {'party': 0, 'gender': 0, 'start': 2022, 'duration': -1, 'monarch': 4}};
const names = Object.keys(data);
const party_convert = ["Conservative","Labour","Liberal"];
const gender_convert = ["Male", "Female"];
const monarch_convert = ["Edward VII","George V","George VI","Elizabeth II","Charles III"];
names.sort();

var correct_name = names[getRandomInt(names.length)];
var correct_data = data[correct_name];
var done = false;

const select = document.getElementById("select");
const guesses_area = document.getElementById("guesses-area")

names.forEach(addOption);

function addOption(name) {
    let option = document.createElement("option");
    option.textContent = name;
    select.appendChild(option);
}

function addGuess(name) {
    if (done == true) {
        return
    }
    current_data = data[name];
    let guess = document.createElement("div");
    guess.classList.add("guess");
    guesses_area.appendChild(guess);

    //NAME
    let name_ = document.createElement("div");
    name_.classList.add("fifteen-percent");
    name_.classList.add("guess-attribute");
    name_.classList.add("bordered");
    guess.appendChild(name_);
    let name_text = document.createElement("p");
    name_text.textContent = name;
    name_.appendChild(name_text);
    if (correct_name == name) {
        name_.classList.add("green");
        done = true;
    } else {
        name_.classList.add("grey");
    }

    //IMAGE
    let image = document.createElement("div");
    image.classList.add("fifteen-percent");
    image.classList.add("guess-attribute");
    image.classList.add("bordered");
    guess.appendChild(image);
    let img = document.createElement("img");
    img.src = "images/"+name+".jpg";
    image.appendChild(img);

    //POLITICAL PARTY
    let party = document.createElement("div");
    party.classList.add("fifteen-percent");
    party.classList.add("guess-attribute");
    party.classList.add("bordered");
    guess.appendChild(party);
    let party_text = document.createElement("p");
    party_text.textContent = party_convert[current_data["party"]];
    party.appendChild(party_text)
    if (correct_data["party"] == current_data["party"]) {
        party.classList.add("green");
    } else {
        party.classList.add("grey");
    }

    //START DATE
    let start = document.createElement("div");
    start.classList.add("fifteen-percent");
    start.classList.add("guess-attribute");
    start.classList.add("bordered");
    guess.appendChild(start);
    let start_text = document.createElement("p");
    let start_text_content = (current_data["start"]).toString();
    if (current_data["start"] < correct_data["start"]){
        start_text_content += "↑";
    } else if (current_data["start"] > correct_data["start"]){
        start_text_content += "↓";
    }
    start_text.textContent = start_text_content;
    start.appendChild(start_text);
    if (correct_data["start"] == current_data["start"]) {
        start.classList.add("green");
    } else if (Math.abs(correct_data["start"]-current_data["start"]) <= 20) {
        start.classList.add("yellow");
    } else {
        start.classList.add("grey");
    }

    //DURATION OF OFFICE
    let duration = document.createElement("div");
    duration.classList.add("fifteen-percent");
    duration.classList.add("guess-attribute");
    duration.classList.add("bordered");
    guess.appendChild(duration);
    let duration_text = document.createElement("p");
    let duration_text_content = (current_data["duration"]).toString();
    //ADDING ARROW
    if ((correct_data["duration"] != -1) || (current_data["duration"] == -1)){
        if (current_data["duration"] < correct_data["duration"]){
            duration_text_content += "↑";
        } else if (current_data["duration"] > correct_data["duration"]){
            duration_text_content += "↓";
        }
    }
    //SANITISATION - IF RISHI
    if (current_data["duration"] == -1) {
        duration_text_content = "-";
    }
    duration_text.textContent = duration_text_content;
    duration.appendChild(duration_text);
    if (correct_data["duration"] == current_data["duration"]) {
        duration.classList.add("green");
    } else if ((Math.abs(correct_data["duration"]-current_data["duration"]) <= 2) && ((correct_data["duration"] != -1) || (current_data["duration"] == -1))) {
        duration.classList.add("yellow");
    } else {
        duration.classList.add("grey");
    }

    //GENDER
    let gender = document.createElement("div");
    gender.classList.add("ten-percent");
    gender.classList.add("guess-attribute");
    gender.classList.add("bordered");
    guess.appendChild(gender);
    let gender_text = document.createElement("p");
    gender_text.textContent = gender_convert[current_data["gender"]];
    gender.append(gender_text);
    if (correct_data["gender"] == current_data["gender"]) {
        gender.classList.add("green");
    } else {
        gender.classList.add("grey");
    }

    //MONARCH AT START
    let monarch = document.createElement("div");
    monarch.classList.add("fifteen-percent");
    monarch.classList.add("guess-attribute");
    monarch.classList.add("bordered");
    guess.appendChild(monarch);
    let monarch_text = document.createElement("p");
    monarch_text.textContent = monarch_convert[current_data["monarch"]];
    monarch.append(monarch_text);
    if (correct_data["monarch"] == current_data["monarch"]) {
        monarch.classList.add("green");
    } else if (Math.abs(correct_data["monarch"]-current_data["monarch"]) <= 1) {
        monarch.classList.add("yellow");
    } else {
        monarch.classList.add("grey");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function reset() {
    guesses_area.innerHTML = "";
    correct_name = names[getRandomInt(names.length)];
    correct_data = data[correct_name];
    done = false;
}

function makeGuess() {
    addGuess(select.value);
}

function giveUp() {
    addGuess(correct_name);
    guess = guesses_area.lastChild;
    children = guess.children;
    for (i = 0; i < children.length; i++) {
        makeRed(children[i])
    }
    done = true;
}

function info() {
    alert("Prime Ministers from 1900.\nFor Prime Ministers that had more than 1 term, data is for their first term.\n\nStart Date appears YELLOW when within 20 years of the answer.\nTerm Length is measured in full years, and appears YELLOW when within 2 years of the answer.\nMonarch appears YELLOW when answer is 1 before or after.");
}

function makeRed(item) {
    item.classList.add("red");
}

//names.forEach(addGuess);
