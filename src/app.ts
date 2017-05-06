import * as $ from 'jquery';

function addTodo() {
    let todo = $("#todo").val();

    $("ul#todos").append(`<li>${todo}</li>`);
};

$("#add").click(evt => {
    addTodo();
});