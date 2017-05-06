import * as $ from 'jquery';

function addTodo() {
    let todo = $("#todo").val();

    $("ul#todos").append(`<li>${todo}</li>`);

    $("#todo").val("");
};

$("#add").click(evt => {
    addTodo();
});

$("#todo").keydown(evt => {
    if (evt.keyCode === 13) {
        addTodo();
    } else if (evt.keyCode === 27) {
        $("#todo").val("");
    }
});