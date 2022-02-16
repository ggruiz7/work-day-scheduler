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

dateTime();

// change background color based on time
function checkTime() {
    $(textArea).each(function() {
        if (this.dataset.number < Timer) {
            $(this).addClass('past');
        } else if (this.dataset.number === Timer) {
            $(this).addClass('present');
        } else if (this.dataset.number > Timer) {
            $(this).addClass('future');
        }
    })

    // get input from local storage
    $('#09 .form-control').val(localStorage.getItem('09'));
    $('#10 .form-conrol').val(localStorage.getItem('10'));
    $('#11 .form-control').val(localStorage.getItem('11'));
    $('#12 .form-control').val(localStorage.getItem('12'));
    $('#13 .form-control').val(localStorage.getItem('13'));
    $("#14 .form-control").val(localStorage.getItem("14"));
    $("#15 .form-control").val(localStorage.getItem("15"));
    $("#16 .form-control").val(localStorage.getItem("16"));
    $("#17 .form-control").val(localStorage.getItem("17"));
}

checkTime();