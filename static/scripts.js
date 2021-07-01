$(document).ready(function() {
    $(".TokenSrc").bind({
        dragstart: function() {
            var token =
                "<span class='token' contenteditable='false'><span id='del' class='delete'><i class='fa fa-trash-o'></i></span>" +
                $(this).text() +
                "</span>";
            $(this).css("color", "red");
            event.dataTransfer.setData("text/html", token);
        },
        dragend: function() {
            $(this).css("color", "inherit");
            $(".delete").bind("click", deleteToken);
        },
    });

    $(".dropzone").bind({
        drop: function() {
            var data = event.dataTransfer.getData("text/html");
            event.target.insertAdjacentHTML("beforeend", data);
            event.preventDefault();
            //my_alert($(data).text().trim());
        },
    });

    $(".delete").bind("click", deleteToken);
    $("#ref_button").bind("click", refresh);
    $("#exec_button").bind("click", function() {
        exec_Logic.call(this, "exec_rule");
    });
    $("#save_button").bind("click", function() {
        exec_Logic.call(this, "save_rule");
    });


});

function deleteToken() {
    event.preventDefault();
    $(this).parent().remove();
    $(".my_result").empty();
    //if ($('.form-control.dropzone').is(':empty')) drop_zone = [];
}

function refresh() {
    $(".token").remove();
    $(".my_result").empty();
    $("#flash_msg").empty();
    $("#mod_idx").val("");
}