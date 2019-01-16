$(document).ready(function() {
    // events
    $("#btnSearch").click(doSearch);
    $("#txtSearch").keypress( function (event) {
        if (event.key == "Enter") {
            doSearch();
        }
});
      
    $("#list").on('click', '.btn-done', taskDone);
    $("#list").on('click', '.btn-remove', removeLi);
        

    $("#txtSearch").keypress(function() {
        $("#txtSearch").removeClass('error'); // hide error
    })

    $(".btn-clear").click(function () {
        $("#doneList").empty(); // clear list
    })
});

function taskDone() {
    var li = $(this).parent();
    var text = li.children()[0].innerText; // jquery text() == js innerText

    // remove this from todo list
    $(this).parent().remove();

    // add the item to the done list
    $("#doneList").append("<li>" + text + "</li>");
}

function removeLi () {
    $(this).parent().remove(); // this = button , parent of the button = li will be removed
}

function doSearch() {
    
    var txt = $("#txtSearch"); // input
    var text = txt.val();   // read value from input
    txt.val(""); // clear the input text

    addItem(text);
}

function addItem(name) {
   if(name.length < 1) {
       $("#txtSearch").addClass('error');
       return;
   }

    $("#list").append('<li><span>' 
    + name + '</span><i class="btn-done fas fa-check"></i>' + '<i class="btn-remove fa fa-trash-alt"></i></li>');
    

} 

function search() {
    var txtSearch = $("#txtSearch"); // faster page load
    var text = txtSearch.val();
}