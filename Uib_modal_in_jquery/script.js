/**
 * Created by Umar on 12/21/2017.
 */
$(document).ready(function () {
 var containerHeight$ = $(".container").height()/2;
 var modalContainerHeight$ = $(".modal-container").outerHeight(true);
 $(".ui-modal").hide();
 $(".uib-open").click(function () {

 $(".ui-modal").addClass('show').show();

 });
 });
