$(document).ready(function () {
  $('form').bootstrapValidator({
  　feedbackIcons: {
　　　　　valid: 'glyphicon glyphicon-ok',
　　　　　invalid: 'glyphicon glyphicon-remove',
　　　　　validating: 'glyphicon glyphicon-refresh'
  　　},

      fields: {
        email: {
          validators: {
            notEmpty: {
              message: 'please enter email address'
            },
            emailAddress:{
              message: 'not a valid email address'
            }
          }
        },

        uname: {
          regexp:{
            regexp: /^[a-zA-Z0-9_\.]+$/,
            message: 'username can only consist of alphabetical, number, dot and underscore'
          }
        },

        pswd: {
          validators: {
            notEmpty: {
              message: 'please enter the password'
            }
          },
          stringLength:{
            min: 6,
            max: 18,
            massage: 'must be more than 6 and less than 18 characters'
          }
        },

        pswd2: {
          validators: {
            notEmpty: {
              message: 'please enter the password again'
            },
            identical:{
              field:'pswd',
              message:'password and its confirm are not the same'
            }
          }
        },

        consent:{
          validators:{
            notEmpty:{
              message:'please check the agreement'
            }
          }
        }
      }
    })
});