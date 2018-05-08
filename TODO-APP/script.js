(function () {
    var todoList = [];
    var todoHeader = ["S.No", "Name", "Actions"];
    var container = $('.container');
    var h1 = $("<h1>TODO</h1>").addClass('text-center');
    var input = $("<input type='text'/>").addClass('form-control col-md-offset-4').css({
        'width': '30%',
        'display': 'inline-block'
    });
    var addButton = $("<button></button>").text('Add').addClass('btn btn-default margin-left-20');
    var todoContainer = $('<div></div>').addClass('todoContainer').hide();
    var todoContainerRow = $('<div></div>').addClass('row');
    var editIcon = $('<i></i>').addClass('glyphicon glyphicon-edit');
    var todoContainerCol = $('<div></div>').addClass('col-md-12');
    for (var i = 0; i < todoHeader.length; i++) {
        todoContainerCol.append($('<div></div>').addClass('col-md-4'));
        todoContainerCol.children().eq(i).text(todoHeader[i]);
    }
    todoContainer.append(todoContainerRow);
    todoContainerRow.append(todoContainerCol);
    container.append(h1)
        .append(input)
        .append(addButton)
        .append(todoContainer);
    addButton.on('click', function () {
        todoList.push(
            {id: todoList.length + 1, todoNames: input.val(), actions: editIcon}
        );
        if (todoList.length > 0) {
            var todoRowKeys = ["id", "todoNames", "Actions"];
            renderTodo(todoList, todoRowKeys)
            todoContainer.show()
        }
    });

    function renderTodo(todoList, todoRowKeys) {
        for (var k = 0; k < todoList.length; k++) {
            var todoDate = todoList[k];
            var todoCol = $('<div></div>').addClass('col-md-12');
            var todoRow = $('<div></div>').addClass('row');
            todoContainer.append(todoRow);
            todoRow.append(todoCol);
        }
        for (var j = 0; j < todoRowKeys.length; j++) {
            todoCol.append($('<div></div>').addClass('col-md-4'));
            todoCol.append($('<div></div>').addClass('col-md-4'));
            todoCol.append($('<div></div>').addClass('col-md-4'))
            if (j == 0 || j == 1) {
                todoCol.children().eq(j).text(todoDate[todoRowKeys[j]]);
            }

            if (j == 2) {
                todoCol.children().eq(j).append(editIcon);
            }
        }

    }
})();