$("#Submit").click(function () {
    $(".table2").show();
});
$("#Reset").click(function () {
    $(".table2").hide();
});

function result() {
    var exam = document.getElementById('exam2').value;
    var year = document.getElementById('yearj').value;
    var board = document.getElementById('boardj').value;
    var Roll = document.getElementById('rollj').value;
    var Reg = document.getElementById('regj').value;
    var sumj = document.getElementById('sumj').value;



    document.getElementById('exam').innerHTML = exam;
    document.getElementById('year').innerHTML = year;
    document.getElementById('board').innerHTML = board;
    document.getElementById('Roll').innerHTML = Roll;
    document.getElementById('Reg').innerHTML = Reg;
    document.getElementById('ans').innerHTML = sumj;
}