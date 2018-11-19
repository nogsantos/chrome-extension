document.getElementById("dataGenerate").addEventListener("click", function() {
    chrome.tabs.executeScript({
        code:
            "var $=document.querySelector.bind(document),cripto=new Uint32Array(1),version=window.crypto.getRandomValues(cripto),prefix='dev-',testPassword='123';try{var a=$('input[name='name']');a.value=`${prefix.toUpperCase()}${version}`}catch(a){}try{var a=$('input[name='companyName']');a.value=`${prefix.toUpperCase()}${version}`}catch(a){}try{var a=$('radio[name='taxationScheme']);a.value=`SIMPLES`}catch(a){}try{var a=$('input[name='firstName']');a.value=`${prefix.toUpperCase()}${version}`}catch(a){}try{var a=$('input[name='lastName']');a.value=`${prefix.toUpperCase()}${version}`}catch(a){}try{var a=$('input[name='emailField']');a.value=`${prefix}${version}@mail.com`}catch(a){}try{var a=$('input[name='email']');a.value=`${prefix}${version}@mail.com`}catch(a){}try{var a=$('input[name='phone']');a.value='47 99999-9999'}catch(a){}try{var a=$('select[name='post']');a.value=1}catch(a){}try{var a=$('select[name='department']');a.value=1}catch(a){}try{var a=$('input[name='password']');a.value=`${testPassword}`}catch(a){}try{var a=$('input[name='confirmPassword']');a.value=`${testPassword}`}catch(a){}"
    });
});

function gen() {
    var $ = document.querySelector.bind(document);
    var cripto = new Uint32Array(1);
    var version = window.crypto.getRandomValues(cripto);
    var prefix = "dev-";
    var testPassword = "123";

    try {
        var name = $('input[name="name"]');
        name.value = prefix.toUpperCase() + " " + version;
    } catch (e) {}

    try {
        var companyName = $('input[name="companyName"]');
        name.value = prefix.toUpperCase() + " " + version;
    } catch (e) {}

    try {
        var taxationScheme = $('radio[name="taxationScheme"]');
        taxationScheme.value = "SIMPLES";
    } catch (e) {}

    try {
        var firstName = $('input[name="firstName"]');
        name.value = prefix.toUpperCase() + " " + version;
    } catch (e) {}

    try {
        var lastName = $('input[name="lastName"]');
        name.value = prefix.toUpperCase() + " " + version;
    } catch (e) {}

    try {
        var emailField = $('input[name="emailField"]');
        emailField.value = prefix + " " + version + "@mail.com";
    } catch (e) {}

    try {
        var email = $('input[name="email"]');
        email.value = prefix + " " + version + "@mail.com";
    } catch (e) {}

    try {
        var phone = $('input[name="phone"]');
        phone.value = "47 99999-9999";
    } catch (e) {}

    try {
        var post = $('select[name="post"]');
        post.value = 1;
    } catch (e) {}

    try {
        var department = $('select[name="department"]');
        department.value = 1;
    } catch (e) {}

    try {
        var password = $('input[name="password"]');
        password.value = testPassword;
    } catch (e) {}

    try {
        var confirmPassword = $('input[name="confirmPassword"]');
        confirmPassword.value = testPassword;
    } catch (e) {}
}

// (function(angular) {
//   document.addEventListener("DOMContentLoaded", function() {
//     var generate = document.getElementById("dataGenerate");
//     generate.addEventListener("click", function() {
//       console.log("in");
//       try {
//         console.log("testenado");
//         var $ = document.querySelector.bind(document);
//         var $scope = angular.element($("form")).scope();
//         var cripto = new Uint32Array(1);
//         var version = window.crypto.getRandomValues(cripto);
//         var prefix = "dev-";
//         var testPassword = "123";

//         try {
//           var name = $('input[name="name"]');
//           name.value = `${prefix.toUpperCase()}${version}`;
//         } catch (e) {}

//         try {
//           var companyName = $('input[name="companyName"]');
//           companyName.value = `${prefix.toUpperCase()}${version}`;
//         } catch (e) {}

//         try {
//           var taxationScheme = $('radio[name="taxationScheme"]');
//           taxationScheme.value = `SIMPLES`;
//         } catch (e) {}

//         try {
//           var firstName = $('input[name="firstName"]');
//           firstName.value = `${prefix.toUpperCase()}${version}`;
//         } catch (e) {}

//         try {
//           var lastName = $('input[name="lastName"]');
//           lastName.value = `${prefix.toUpperCase()}${version}`;
//         } catch (e) {}

//         try {
//           var emailField = $('input[name="emailField"]');
//           emailField.value = `${prefix}${version}@mail.com`;
//         } catch (e) {}

//         try {
//           var email = $('input[name="email"]');
//           email.value = `${prefix}${version}@mail.com`;
//         } catch (e) {}

//         try {
//           var phone = $('input[name="phone"]');
//           phone.value = "47 99999-9999";
//         } catch (e) {}

//         try {
//           var post = $('select[name="post"]');
//           post.value = 1;
//         } catch (e) {}

//         try {
//           var department = $('select[name="department"]');
//           department.value = 1;
//         } catch (e) {}

//         try {
//           var password = $('input[name="password"]');
//           password.value = `${testPassword}`;
//         } catch (e) {}

//         try {
//           var confirmPassword = $('input[name="confirmPassword"]');
//           confirmPassword.value = `${testPassword}`;
//         } catch (e) {}

//         console.log("scope", $scope);

//         try {
//           angular.forEach($scope.FormController, field => {
//             field.$pristine = false;
//             field.$dirty = true;
//             field.$invalid = false;
//             field.$valid = true;
//           });
//         } catch (e) {
//           console.error("Not in welcome");
//         }

//         try {
//           angular.forEach($scope.trialForm, field => {
//             field.$pristine = false;
//             field.$dirty = true;
//             field.$invalid = false;
//             field.$valid = true;
//           });
//         } catch (e) {
//           console.error("Not in trial");
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     });

//     console.log("out");
//     // document.querySelector("#dataGenerate").addEventListener("click", () => {
//     //   console.log("in");
//     //   try {
//     //     console.log("testenado");
//     //     var $ = document.querySelector.bind(document);
//     //     var $scope = angular.element($("form")).scope();
//     //     var cripto = new Uint32Array(1);
//     //     var version = window.crypto.getRandomValues(cripto);
//     //     var prefix = "dev-";
//     //     var testPassword = "123";

//     //     try {
//     //       var name = $('input[name="name"]');
//     //       name.value = `${prefix.toUpperCase()}${version}`;
//     //     } catch (e) {}

//     //     try {
//     //       var companyName = $('input[name="companyName"]');
//     //       companyName.value = `${prefix.toUpperCase()}${version}`;
//     //     } catch (e) {}

//     //     try {
//     //       var taxationScheme = $('radio[name="taxationScheme"]');
//     //       taxationScheme.value = `SIMPLES`;
//     //     } catch (e) {}

//     //     try {
//     //       var firstName = $('input[name="firstName"]');
//     //       firstName.value = `${prefix.toUpperCase()}${version}`;
//     //     } catch (e) {}

//     //     try {
//     //       var lastName = $('input[name="lastName"]');
//     //       lastName.value = `${prefix.toUpperCase()}${version}`;
//     //     } catch (e) {}

//     //     try {
//     //       var emailField = $('input[name="emailField"]');
//     //       emailField.value = `${prefix}${version}@mail.com`;
//     //     } catch (e) {}

//     //     try {
//     //       var email = $('input[name="email"]');
//     //       email.value = `${prefix}${version}@mail.com`;
//     //     } catch (e) {}

//     //     try {
//     //       var phone = $('input[name="phone"]');
//     //       phone.value = "47 99999-9999";
//     //     } catch (e) {}

//     //     try {
//     //       var post = $('select[name="post"]');
//     //       post.value = 1;
//     //     } catch (e) {}

//     //     try {
//     //       var department = $('select[name="department"]');
//     //       department.value = 1;
//     //     } catch (e) {}

//     //     try {
//     //       var password = $('input[name="password"]');
//     //       password.value = `${testPassword}`;
//     //     } catch (e) {}

//     //     try {
//     //       var confirmPassword = $('input[name="confirmPassword"]');
//     //       confirmPassword.value = `${testPassword}`;
//     //     } catch (e) {}

//     //     console.log("scope", $scope);

//     //     try {
//     //       angular.forEach($scope.FormController, field => {
//     //         field.$pristine = false;
//     //         field.$dirty = true;
//     //         field.$invalid = false;
//     //         field.$valid = true;
//     //       });
//     //     } catch (e) {
//     //       console.error("Not in welcome");
//     //     }

//     //     try {
//     //       angular.forEach($scope.trialForm, field => {
//     //         field.$pristine = false;
//     //         field.$dirty = true;
//     //         field.$invalid = false;
//     //         field.$valid = true;
//     //       });
//     //     } catch (e) {
//     //       console.error("Not in trial");
//     //     }
//     //   } catch (error) {
//     //     console.log(error);
//     //   }
//     // });
//   });
// })();
