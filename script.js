function writeValuesToSelect() {


    for (const klasse in students) {
        let option = document.createElement('option');
        option.innerText = klasse;
        document.getElementById('Klasse').appendChild(option);
    }

    updateStudents();

    for (const subject of subjects) {
        let option = document.createElement('option');
        option.innerText = subject;
        document.getElementById('fach').appendChild(option);
    }

}

function updateStudents() {
    document.getElementById('schueler').innerHTML = "";
    for (const student of students[document.getElementById('Klasse').value]) {
        let option = document.createElement('option');
        option.innerText = student;
        document.getElementById('schueler').appendChild(option);
    }
}

function assignMark() {
    let tr = document.createElement('tr');
    let klasse = document.createElement('td');
    let schueler = document.createElement('td');
    let fach = document.createElement('td');
    let note = document.createElement('td');

    klasse.innerText = document.getElementById('Klasse').value;
    schueler.innerText = document.getElementById('schueler').value;
    fach.innerText = document.getElementById('fach').value;
    note.innerText = document.getElementById('note').value;

    tr.appendChild(klasse);
    tr.appendChild(schueler);
    tr.appendChild(fach);
    tr.appendChild(note);

    document.getElementById('marks').appendChild(tr);
}