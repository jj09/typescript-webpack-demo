"use strict";
exports.__esModule = true;
var $ = require("jquery");
function addTodo() {
    var todo = $("#todo").val();
    $("ul#todos").append("<li>" + todo + "</li>");
    $("#todo").val("");
}
;
$("#add").click(function (evt) {
    addTodo();
});
$("#todo").keydown(function (evt) {
    if (evt.keyCode === 13) {
        addTodo();
    }
    else if (evt.keyCode === 27) {
        $("#todo").val("");
    }
});
