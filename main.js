/**
 * Created by jamesf on 7/29/14.
 */
/*
$(function  () {


    var shoesData = [{"age":2,"gender":"male","lat":33.4734521,"lng":-112.0389571,"location":{"__type":"GeoPoint","latitude":33.4734521,"longitude":-112.0389571},"service":"DDD HAH RSP","times":"weekdays and saturdays","objectId":"BJG4KeGOcO","createdAt":"2014-07-01T22:11:26.809Z","updatedAt":"2014-07-01T22:12:20.624Z"}];
    //Get the HTML from the template   in the script tag
    var theTemplateScript = $("#shoe-template").html();

    //Compile the template
    var theTemplate = Handlebars.compile (theTemplateScript);
    $(".shoesNav").append (theTemplate(shoesData));

//We pass the shoesData object to the compiled handleBars function
// The function will insert all the values from the objects in their respective places in the HTML and returned HTML as a string. Then we use jQuery to append the resulting HTML string into the page
});
*/
Parse.initialize("LZ2tB5MBWI5vlyfSVGGWdBJUq8NJznafCU3jJwrV", "OolOrXs9MnHSZf86X4yQ0ZLEXfflpczQCRnANbIS");


getClients(showClients);

function getClients(callback) {
    var ClientInfo = Parse.Object.extend("ClientGeolocation");

    var query = new Parse.Query(ClientInfo);
    query.notEqualTo("objectId", '');

    query.find({
        success: function (results) {

            var Clients = JSON.parse(JSON.stringify(results));

            callback(Clients);
        }, error: function (error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
}

function showClients(Clients){

    var theTemplateScript = $("#listClients-template").html();

    //Compile the template
    var theTemplate = Handlebars.compile (theTemplateScript);
    $(".clientListing").append (theTemplate(Clients));

}