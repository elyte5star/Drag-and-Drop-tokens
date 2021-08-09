$(document).ready(function() {
    $(".TokenSrc").on("dragstart", function(event) {
        var token =
            "<span class='token' contenteditable='false'><span id='del' class='delete'><i class='fa fa-trash-o'></i></span>" +
            $(this).text() +
            "</span>";
        $(this).css("color", "orange");
        event.originalEvent.dataTransfer.setData("text/html", token);
    });

    $(".TokenSrc").on("dragend", function() {
        $(this).css("color", "inherit");
    });

    $(".dropzone").on("drop", function(event) {
        var data = event.originalEvent.dataTransfer.getData("text/html");
        event.target.insertAdjacentHTML("beforeend", data);
        event.preventDefault();
    });

    $(".TokenSrc").on("dblclick", function() {
        double_click_to_drop_token.call(this, $(this).text());
    });

    $(".dropzone").on("click", ".delete", deleteToken);
    $("#ref_button").on("click", refresh);

});

function deleteToken() {
    event.preventDefault();
    $(this).parent().remove();
    $(".my_result").empty();

}
function refresh() {
    $(".token").remove();

}

function double_click_to_drop_token(text) {
    var token =
        "<span class='token' contenteditable='false'><span id='del' class='delete'><i class='fa fa-trash-o'></i></span>" +
        text +
        "</span>";
    $(".dropzone").append(token);
}
