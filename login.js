$(document).ready(function () {
  $('form').bootstrapValidator({
  　feedbackIcons: {
　　　　　valid: 'glyphicon glyphicon-ok',
　　　　　invalid: 'glyphicon glyphicon-remove',
　　　　　validating: 'glyphicon glyphicon-refresh'
  　　},
      fields: {
        usr: {
          message: 'invalid username',
          validators: {
            notEmpty: {
              message: 'please enter the username'
            }
          }
        },
        pwd: {
          validators: {
            notEmpty: {
              message: 'please enter the password'
              }
            }
          }
        }
  });
  $('#jumpregister').click(function(){
    window.open('./register.html')
  })
});