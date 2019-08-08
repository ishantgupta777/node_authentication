
//always remember body-parser ---------------important--------------------

$(document).ready(()=>{

  document.querySelector('#signinForm').addEventListener('submit',(e)=>{
    e.preventDefault()
    $.ajax({
        type: 'POST',
        url: $("#signinForm").attr("action"),
        data: $("#signinForm").serialize(),
        error : function(xhr){
           if(xhr.status==500){
            $('.ptext').html('password is wrong')
          }else if(xhr.status==401){
            $('.ptext').html('email is wrong or you are not signed up')
          }
        },
        success : function(data,status,xhr){
          if(xhr.status==200){
            // window.location.href = "/loggedIn"
            $.ajax({
              type: 'POST',
              url: '/loggedIn',
              data : {data},
              success : function(data,status,xhr){
                document.write(data)
                console.log('problem is not in signin.js post jquery')
              }
            });
          }
        }
      });
})

})