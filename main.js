$(function(){
   
   var getPosition = new Promise(function (resolve, reject) {
       var options = {
               enableHighAccuracy: false,
               maximumAge:Infinity,
               timeout: 50000
           };
       navigator.geolocation.getCurrentPosition(success, error );
       function error(err) {
           reject(err);
       }
       function success(pos) {
           resolve({long: pos.coords.longitude, lat: pos.coords.latitude});
       }
   })
       
   function getData(long, lat) {
       return new Promise(function (resolve,reject) {
           $.ajax({
               url: "https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+long+"&APPID=07058267c1cec4b93fc211bfba813c79"
           }).done(function (data) {
               resolve(data)
           }).fail(function (err) {
               reject(err);
           })
       })
   };
   getPosition
       .then(
           function (result) {
               console.log(result);
               return getData(result.long, result.lat);
           }
       )
       .then(
           function (data) {
               renderData(data);
               console.log(data);
           }
       )
       .catch(function (error) {
           console.log(alert(error.message + ' ' + error.code));
       });
   });