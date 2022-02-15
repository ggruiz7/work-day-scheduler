var textArea = $('textarea');
var past = $('.past');
var present = $('.present');
var future =  $('.future');

// begin with these classes hidden
past.removecClass('past');
present.removeClass('present');
future.removeClass('future');

// set timer var to HH format to store
var Timer = moment().format('HH');

// current date function
function dateTime() {
    var weekDay = moment().format('dddd, MMMM Do YYYY, HH');
    $('#currentDay').text(weekDay);
}