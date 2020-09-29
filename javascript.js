function result() {
    var show = document.getElementById('hidden');
    var exam = document.getElementById('exam2').value;
    var year = document.getElementById('yearj').value;
    var board = document.getElementById('boardj').value;
    var Roll = document.getElementById('rollj').value;
    var Reg = document.getElementById('regj').value;
    var sumj = document.getElementById('sumj').value;


    var total = document.getElementById("total").innerText;
    var ques = eval(total);

    if (exam == "SSC/Dakhil/Equalivant") {
        alert("please input examination");
    } else if (year == 0000) {
        alert("please input year");
    } else if (board == "select one") {
        alert("please input board");
    } else if (Roll == "") {
        alert("please input Roll");
    } else if (Reg == "") {
        alert("please input Reg");
    } else if (ques == "") {
        alert("please input total");
    } else if (ques != sumj) {
        alert("invalid input")
    } else {
        show.style.display = "flex";
        document.getElementById('exam').innerHTML = exam;
        document.getElementById('year').innerHTML = year;
        document.getElementById('board').innerHTML = board;
        document.getElementById('Roll').innerHTML = Roll;
        document.getElementById('Reg').innerHTML = Reg;
        document.getElementById('ans').innerHTML = sumj;
    };
};

function rose() {
    document.getElementById('hidden').style.display = "none";
    document.getElementById('exam2').value = "SSC/Dakhil/Equalivant";
    document.getElementById('yearj').value = "0000";
    document.getElementById('boardj').value = "select one";
    document.getElementById('rollj').value = "";
    document.getElementById('regj').value = "";
    document.getElementById('sumj').value = "";
};