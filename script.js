function myFunction() {
    document.getElementById("animal_noise").innerHTML = "I'm in a seperate JavaScript File!";
}

function remove_item() {
    document.getElementById("animal_noise").style.display = 'none';
}

function return_item() {
    document.getElementById("animal_noise").style.display = 'block';
}

function ten_plus_ten() {
    document.getElementById("answer").innerHTML = `Answer: ${10 + 10}`;
}

function change_entire_html() {
    document.write(1 + 1);
}

function window_alert() {
    window.alert("This is a Window Alert!")
}