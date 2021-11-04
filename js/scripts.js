function hideFields() {
    $("#veryTall").hide();
    $("#normalTall").hide();
    $("#notTall").hide();
    $("#notReal").hide();
}

$(document).ready(function() {
  $("form#height").submit(function(event) {
    event.preventDefault();
    const height = parseInt($("#inches").val());
    if ( 96 >= height && height >= 75 ){
      hideFields();
      $('#veryTall').show();
    } else if ( height >= 51 && height <=64)  {
      hideFields();
      $('#notTall').show();
    } else if ( 65 >= height && height >= 51) {
      hideFields();
      $('#notTall').show();
      $('#normalTall').show();
    } else if ( 96 >= height && height >= 65 ) {
      hideFields();
      $('#veryTall').show();
      $('#normalTall').show();
    } else if ( 74 >= height && height >= 66) {
      hideFields();
      $('#normalTall').show();
    } else {
      hideFields();
      $('#notReal').show();
    }
  })
})