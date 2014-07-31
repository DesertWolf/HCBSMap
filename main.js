/**
 * Created by jamesf on 7/29/14.
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