/**
 * Created by Umar on 12/26/2017.
 */


$(document).ready(function () {

    var dropDownStateList$ = $('.dropDownStateList');
    var state$ = $('#state');
    var stateList = [
        "Punjab",
        "Rajasthan",
        "Sikkim",
        "Tamil Nadu",
        "Telangana",
        "Tripura",
        "Uttar Pradesh",
        "Uttarakhand",
        "West Bengal"
    ];
    dropDownStateList$.hide();

    state$.on('focus', function () {
        dropDownStateList$.show()
    });


    $.each(stateList, function (index, state) {
        dropDownStateList$.append($('<li></li>').text(state).attr('class', 'state-List'))
    });

    state$.on('input', onStateValueChange);

    function onStateValueChange() {
        var inputVal = this.value;
        var filterEle = [];
        $.each(stateList, function (index, state) {
            var lowerCaseValue = state.toLowerCase();
            if (lowerCaseValue.match(inputVal)) {
                filterEle.push(state)
            }
        });

        if (filterEle.length) {
            dropDownStateList$.empty()
        }
        else {
            return;
        }
        $.each(filterEle, function (index, filteredState) {
            dropDownStateList$.append($('<li></li>').text(filteredState).attr('class', 'filteredStateList'))

            $('.filteredStateList').eq(index).on('click', function () {
                var selectedValue = $(this).text();
                state$.val(selectedValue)
                dropDownStateList$.hide()
            });

        });
    }

    $('.state-List').on('click', function () {
        var selectedValue = $(this).text();
        state$.val(selectedValue)
        dropDownStateList$.hide()
    });



});