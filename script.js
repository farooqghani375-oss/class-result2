let per;

let students = [
    { roll: 1, name: "Hassan Ahmad", semester: 1, marks: 4 },
    { roll: 2, name: "Haseen Ullah", semester: 1, marks: 37 },
    { roll: 3, name: "Muhammad Ramzan", semester: 1, marks: 36 },
    { roll: 4, name: "Muhammad ilyas", semester: 1, marks: 34 },
    { roll: 5, name: "Muhammad Kashif", semester: 1, marks: 20 },
    { roll: 6, name: "Hamza Shakeel", semester: 1, marks: 31 },
    { roll: 7, name: "Waqas Ahmad", semester: 1, marks: 35 },
    { roll: 8, name: "Ishtiaq Ahmad", semester: 1, marks: 36 },
    { roll: 9, name: "Taufeeq Ahmad", semester: 1, marks: 35 },
    { roll: 10, name: "Muhammad Shoaib", semester: 1, marks: 21 },
    { roll: 11, name: "Muhammad Uzair", semester: 1, marks: 33 },
    { roll: 12, name: "Bashir Ahmad", semester: 1, marks: 20 },
    { roll: 13, name: "Muhammad Jamal", semester: 1, marks: 27 },
    { roll: 14, name: "Huzaifa", semester: 1, marks: 40 },
    { roll: 15, name: "Salman Khan", semester: 1, marks: 17 },
    { roll: 16, name: "Muhammad Kashif", semester: 1, marks: 37 },
    { roll: 17, name: "Salman Khan", semester: 1, marks: 15 },
    { roll: 18, name: "Aizaz Ahmad", semester: 1, marks: 26 },
    { roll: 19, name: "Muhammad Huzaifa", semester: 1, marks: 13 },
    { roll: 20, name: "Muhammad Sadiq", semester: 1, marks: 36 },
    { roll: 21, name: "Abdur Rahim", semester: 1, marks: 30 },
    { roll: 22, name: "Kamran Rahim", semester: 1, marks: 31 },
    { roll: 23, name: "Aimal Ahmad Khan", semester: 1, marks: 23 },
    { roll: 24, name: "Noor Ullah Barki", semester: 1, marks: 28 },
    { roll: 25, name: "Mahad Qasim", semester: 1, marks: 29 },
    { roll: 26, name: "Muhammad Bilal Rehman", semester: 1, marks: 27 },
    { roll: 27, name: "Abdul Khaliq", semester: 1, marks: 29 },
    { roll: 28, name: "Muhammad Danish", semester: 1, marks: 26 },
    { roll: 29, name: "Siyal Khan", semester: 1, marks: 37 },
    { roll: 30, name: "Muhaimen Ahmad Khan", semester: 1, marks: 34 },
    { roll: 31, name: "Sudais Amin", semester: 1, marks: 4 },
    { roll: 32, name: "Muhammad Salman", semester: 1, marks: 39 },
    { roll: 33, name: "Muhammad Hussain", semester: 1, marks: 29 },
    { roll: 34, name: "Asif Khan", semester: 1, marks: 23 },
    { roll: 35, name: "Intikhab Alam", semester: 1, marks: 27 },
    { roll: 36, name: "Muhammad Imran", semester: 1, marks: 31 },
    { roll: 37, name: "Muhammad hamza", semester: 1, marks: 35 },
    { roll: 38, name: "Sahil", semester: 1, marks: 14 },
    { roll: 39, name: "Muhammad Hassan Ali", semester: 1, marks: 1 },
    { roll: 40, name: "Abu Bakar", semester: 1, marks: 35 },
    { roll: 41, name: "Zikriya Salman", semester: 1, marks: 31 },
    { roll: 42, name: "Riyan Gul", semester: 1, marks: 25 },
    { roll: 43, name: "Talha Azeem", semester: 1, marks: 30 },
    { roll: 44, name: "Abdus Samad Khan", semester: 1, marks: 0 },
    { roll: 45, name: "Awais Ashraf", semester: 1, marks: 0 },
    { roll: 46, name: "Anas Khan", semester: 1, marks: 25 },
    { roll: 47, name: "Muhammad Asim", semester: 1, marks: 27 },
    { roll: 48, name: "Yahya Sultan", semester: 1, marks: 38 },
    { roll: 49, name: "Muhammad Azan Zahir", semester: 1, marks: 0 },
    { roll: 50, name: "Muhammad Awais", semester: 1, marks: 0 },
    { roll: 51, name: "Ijaz Ali", semester: 1, marks: 32 }
];


function percentage(marks) {
    per =(marks * 100) / 40;
    return per;
}

function CGPA(per) {
    if(per >= 85 ){
        return 4.0;
    }
    else if(per >= 84 && per < 85){
        return 3.9;
    }
    else if(per >= 83 && per < 84){
        return 3.8;
    }
    else if(per >= 82 && per < 83 ){
        return 3.7;
    }
    else if(per >= 81 && per < 82 ){
        return 3.6;
    }
    else if(per >= 80 && per < 81 ){
        return 3.5;
    }
    else if(per >= 79 && per < 80 ){
        return 3.4;
    }
    else if(per >= 78 && per < 79 ){
        return 3.3;
    }
    else if(per >= 77 && per < 78 ){
        return 3.2;
    }
    else if(per >= 76 && per < 77 ){
        return 3.1;
    }
    else if(per >= 75 && per < 76 ){
        return 3.0;
    }
    else{
        return "below than 3.0";
    }
}

function checkResult() {
    let roll = document.getElementById("rollInput").value;
    let resultDiv = document.getElementById("result");

    if(roll === "") {
        resultDiv.innerHTML = "Please enter a roll number";
        resultDiv.style.color = "red";
        return;
    }

    roll = Number(roll);
    let student = students.find(s => s.roll == roll);

    if (student) {
        resultDiv.style.color = "#00ffff";
        resultDiv.innerHTML = 
        `<strong>Name:</strong> ${student.name}<br>
        <strong>Marks:</strong> ${student.marks}<br> 
        <strong>Percentage:</strong> ${percentage(student.marks)}%<br>
        <strong>CGPA:</strong> ${CGPA(percentage(student.marks))}`;
        
    } else {
        resultDiv.innerHTML = "❌Student not found";
        resultDiv.style.color = "red";
    }
}

