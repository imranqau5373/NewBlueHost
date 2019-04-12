$( "#contactForm" ).submit(function( event ) {
    let emailSubject = $('#emailSubject').val();
    let emailAddress = $('#emailAddress').val();
    if(emailSubject == "" || emailSubject == undefined){
        alert('Email subject is required');
        event.preventDefault();
        return;
    }
    if(emailAddress == "" || emailAddress == undefined){
        alert('Email address is required');
        event.preventDefault();
        return;
    }
    location.reload();
  });


  function clearForm(){
     $('#emailSubject').val('');
    $('#emailAddress').val('');
    $('#emailName').val('');
    $('#emailMessage').val('');
  }
