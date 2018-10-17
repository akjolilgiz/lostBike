import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
/* eslint-disable no-unused-vars */


$(document).ready(function() {
    $('#bikeForm').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    

  
  
    var Bikes;


    $.ajax({
        url: `https://bikeindex.org/api/v3/search?page=1&per_page=10&location=${location}&distance=10&stolenness=proximity`,
        type: 'GET',
        data: {
            format: 'json'
            },
        success: function(response) {
            Bikes = response.bikes;
            console.log(Bikes)
            for(let i = 0; i<=Bikes.length; i++){
                $("#results").append("<li>" + Bikes[i].title + " " + Bikes[i].year + "</li>");
            }
            },
            error: function() {
                console.log("There was an error processing your request. Please try again.");
            }
        });
    })
    });
