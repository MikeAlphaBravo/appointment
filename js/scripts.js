$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var userFirstNameInput = $("input#userFirstName").val();
    var userLastNameInput = $("input#userLastName").val();
    var appointmentDateInput = $("input#appointmentDate").val();
    var appointmentStartTimeInput = $("select#appointmentStartTime").val();
    var appointmentEndTimeInput = $("select#appointmentEndTime").val();




    $(".userFirstName").text(userFirstNameInput);
    $(".userLastName").text(userLastNameInput);
    $(".appointmentDate").text(appointmentDateInput);
    $(".appointmentStartTime").text(appointmentStartTimeInput);
    $(".appointmentEndTime").text(appointmentEndTimeInput);


    $("#confirmation").show();
    $("#emptyForm").hide();
    event.preventDefault();

  });
});
