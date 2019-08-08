
//always remember body-parser ---------------important--------------------

$(document).ready(()=>{
    document.querySelector('#signupForm').addEventListener('submit',(e)=>{
      e.preventDefault()
      $.ajax({
          type: 'POST',
          url: $("#signupForm").attr("action"),
          data: $("#signupForm").serialize(),
          success : function(data,status,xhr){
            if(xhr.status==200){
              // window.location.href = "/loggedIn"
              $.ajax({
                type: 'POST',
                url: '/loggedIn',
                data : {data},
                success : function(data,status,xhr){
                  document.write(data)
                }
              });
            }
          }
        });
  })

})