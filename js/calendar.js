var theDate;
var myTitle;
var myBody;
var myDay = "";
    var savedDays = [];
    var savedMonth = [];
    var savedYear = [];

findAllSavedDates();
    var thisMonth = new Date().getMonth();
    var thisYear = new Date().getFullYear();
    var thisDay = new Date().getDate();
    var theDate = "";

function setDate() {
    var myMonth =  document.getElementById("month").options[thisMonth].value;
    document.getElementById("month").value = myMonth;
    var newDropdown =document.createElement('select');
    var newSelectHTML = "";
    for (var i=0;i<4; i++ ){
        newSelectHTML+= "<option>"+thisYear+"</option>";
        thisYear +=1;
    }
    newDropdown.setAttribute('id','year');
    newDropdown.innerHTML = newSelectHTML;
    document.getElementById('myYear').innerHTML = "";
    document.getElementById('myYear').appendChild(newDropdown);
    document.getElementById('year').addEventListener("change",getYear);
    
    var firstRow = "";
    var secondRow = "";
    var thirdRow = "";
    var fourthRow = "";
    var fifthRow = "";
    var colour = "white";
    var row1 = ["1","2","3","4","5","6","7"];
    var row2 = ["8","9","10","11","12","13","14"];
    var row3 = ["15","16","17","18","19","20","21"];
    var row4 = ["22","23","24","25","26","27","28"];
    var row5 = ["29","30","31"];
    var curYear = thisYear-4;
    var dayEid = "";

    var yr = document.getElementById("year");
    var theYear = yr.options[yr.selectedIndex].value;
     
    for(day of row1) {
        if(day<thisDay && myMonth===(thisMonth+1).toString()) {
            colour = "yellow";
        firstRow+="<td class="+colour+"><div>"+day+"</div></td>";
        } else if(savedDays.indexOf(day+".0")>=0 && savedMonth.indexOf(myMonth)>=0
                 && parseInt(savedYear[savedDays.indexOf(day+".0")])===curYear) {
            colour = "blue";
           firstRow+="<td class="+colour+"><div onclick='updateAppointment("+day+");'>"+day+"</div></td>";
        }
        else {
        firstRow+="<td class='white'><div onclick='bookAppointment("+day+");'>"+day+"</div></td>";
        }
    }
        for(dayB of row2) {
         if(dayB<thisDay) {
            colour = "yellow";
        secondRow+="<td class="+colour+"><div>"+dayB+"</div></td>";
        } else if(savedDays.indexOf(dayB+".0")>=0 && savedMonth.indexOf(myMonth)>=0
                 && parseInt(savedYear[savedDays.indexOf(dayB+".0")])===curYear) {
            colour = "blue";
           secondRow+="<td class="+colour+" onclick='updateAppointment("+dayB+");'><div>"+dayB+"</div></td>";
        } else {
        secondRow+="<td class='white' onclick='bookAppointment("+dayB+");'><div>"+dayB+"</div></td>";
        }
    }
        for(dayC of row3) {
        if(dayC<thisDay) {
            colour = "yellow";
        thirdRow+="<td class="+colour+"><div>"+dayC+"</div></td>";
        } else if(savedDays.indexOf(dayC+".0")>=0 && savedMonth.indexOf(myMonth)>=0
                 && parseInt(savedYear[savedDays.indexOf(dayC+".0")])===curYear) {
            colour = "blue";
           thirdRow+="<td class="+colour+" onclick='updateAppointment("+dayC+");'><div>"+dayC+"</div></td>";
        }
        else {
        thirdRow+="<td class='white' onclick='bookAppointment("+dayC+");'><div>"+dayC+"</div></td>";
        }
    }
        for(dayD of row4) {
        if(dayD<thisDay) {
            colour = "yellow";
        fourthRow+="<td class="+colour+"><div>"+dayD+"</div></td>";
        } else if(savedDays.indexOf(dayD+".0")>=0 && savedMonth.indexOf(myMonth)>=0
                 && parseInt(savedYear[savedDays.indexOf(dayD+".0")])===curYear) {
            colour = "blue";
           fourthRow+="<td class="+colour+" onclick='updateAppointment("+dayD+");'><div>"+dayD+"</div></td>";
        }
        else {
        fourthRow+="<td class='white' onclick='bookAppointment("+dayD+");'><div>"+dayD+"</div></td>";
        }
    }
        for(dayE of row5) {
            dayEid = "day"+dayE;
        if(dayE<thisDay) {
            colour = "yellow";
        fifthRow+="<td class="+colour+"><div>"+dayE+"</div></td>";
        } else if(savedDays.indexOf(dayE+".0")>=0 && savedMonth.indexOf(myMonth)>=0
                 && parseInt(savedYear[savedDays.indexOf(dayE+".0")])===curYear) {
            colour = "blue";
 fifthRow+="<td class="+colour+" onclick='updateAppointment("+dayE+");'><div>"+dayE+"</div></td>";
        }
        else {
        fifthRow+="<td class='white' onclick='bookAppointment("+dayE+");'><div id="+dayEid+">"+dayE+"</div></td>";
        }
    }
    document.getElementById('calRow1').innerHTML = firstRow;
    document.getElementById('calRow2').innerHTML = secondRow;
    document.getElementById('calRow3').innerHTML = thirdRow;
    document.getElementById('calRow4').innerHTML = fourthRow;
    document.getElementById('calRow5').innerHTML = fifthRow;
  }


function show31Days() {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "block";
}

function show30Days() {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "block";
    document.getElementById("day31").style.display = "none";
}

function leapYear() {
    document.getElementById("day29").style.display = "block";
    document.getElementById("day30").style.display = "none";
    document.getElementById("day31").style.display = "none";
}

function normalYear() {
    document.getElementById("day29").style.display = "none";
    document.getElementById("day30").style.display = "none";
    document.getElementById("day31").style.display = "none";
}

function checkYear() {
    var mth = document.getElementById("month");
    var yr = document.getElementById("year");
    var theMonth = mth.options[mth.selectedIndex].value;
    var theYear = yr.options[yr.selectedIndex].value;

    if(theYear=="2020"){
        leapYear();
    } else {
        normalYear();
    }
}

function yellowLegends() {
    var thisMonth = new Date().getMonth();
    var thisYear = new Date().getFullYear();
    var thisDay = new Date().getDate();
    var theDate = "";
    var myMonth =  document.getElementById("month").options[thisMonth].value;
   
    var firstRow = "";
    var secondRow = "";
    var thirdRow = "";
    var fourthRow = "";
    var fifthRow = "";
    var colour = "white";
    var row1 = ["1","2","3","4","5","6","7"];
    var row2 = ["8","9","10","11","12","13","14"];
    var row3 = ["15","16","17","18","19","20","21"];
    var row4 = ["22","23","24","25","26","27","28"];
    var row5 = ["29","30","31"];
    var dayEid = "";

    var yr = document.getElementById("year");
    var theYear = yr.options[yr.selectedIndex].value;

    for(day of row1) {
        if(myMonth===(thisMonth+1).toString() && thisYear==theYear.toString()) {
            colour = "yellow";
        firstRow+="<td class="+colour+"><div>"+day+"</div></td>";
        }
    }
    for(dayB of row2) {
         if(myMonth===(thisMonth+1).toString() && thisYear==theYear.toString()) {
            colour = "yellow";
        secondRow+="<td class="+colour+"><div>"+dayB+"</div></td>";
        }
    }
    for(dayC of row3) {
        if(myMonth===(thisMonth+1).toString() && thisYear==theYear.toString()) {
            colour = "yellow";
        thirdRow+="<td class="+colour+"><div>"+dayC+"</div></td>";
        }
    }
    for(dayD of row4) {
        if(myMonth===(thisMonth+1).toString() && thisYear==theYear.toString()) {
            colour = "yellow";
        fourthRow+="<td class="+colour+"><div>"+dayD+"</div></td>";
        }
    }
    for(dayE of row5) {
        dayEid = "day"+dayE;
        if(myMonth===(thisMonth+1).toString() && thisYear==theYear.toString()) {
            colour = "yellow";
        fifthRow+="<td class="+colour+" onclick='bookAppointment("+dayE+");'><div id="+dayEid+">"+dayE+"</div></td>";
        }
    }
    document.getElementById('calRow1').innerHTML = firstRow;
    document.getElementById('calRow2').innerHTML = secondRow;
    document.getElementById('calRow3').innerHTML = thirdRow;
    document.getElementById('calRow4').innerHTML = fourthRow;
    document.getElementById('calRow5').innerHTML = fifthRow;
}

function showAllLegends() {
 
    var firstRow = "";
    var secondRow = "";
    var thirdRow = "";
    var fourthRow = "";
    var fifthRow = "";
    var colour = "white";
    var row1 = ["1","2","3","4","5","6","7"];
    var row2 = ["8","9","10","11","12","13","14"];
    var row3 = ["15","16","17","18","19","20","21"];
    var row4 = ["22","23","24","25","26","27","28"];
    var row5 = ["29","30","31"];
    var curYear = new Date().getFullYear();
    var dayEid = "";

    var yr = document.getElementById("year");
    var theYear = yr.options[yr.selectedIndex].value;
    var modifiedMth = thisMonth+1;

    var mnt = document.getElementById("month");
    var selMth = mnt.options[mnt.selectedIndex].value;
    for(day of row1) {
     if(parseInt(day)<thisDay && parseInt(selMth)===modifiedMth &&
           theYear===curYear.toString()) {
        colour = "yellow";
        firstRow+="<td class="+colour+"><div>"+day+"</div></td>";
        } else if(savedDays.indexOf(day+".0")>=0 && savedYear.indexOf(curYear.toString())>=0 && savedMonth.indexOf(selMth.toString())>=0 && curYear.toString()===theYear) {
            colour = "blue";
         firstRow+="<td class="+colour+"><div onclick='updateAppointment("+day+");'>"+day+"</div></td>";
        } else {
            colour = "white";
         firstRow+="<td class="+colour+"><div onclick='bookAppointment("+day+");'>"+day+"</div></td>";
        }
    }

        for(dayB of row2) {
        if(parseInt(dayB)<thisDay && parseInt(selMth)===modifiedMth &&
           theYear===curYear.toString()) {
        colour = "yellow";
        secondRow+="<td class="+colour+"><div>"+dayB+"</div></td>";
        } else if(savedDays.indexOf(dayB+".0")>=0 && savedYear.indexOf(curYear.toString())>=0 && savedMonth.indexOf(selMth.toString())>=0 && curYear.toString()===theYear) {
            colour = "blue";
         secondRow+="<td class="+colour+"><div onclick='updateAppointment("+dayB+");'>"+dayB+"</div></td>";
        } else {
            colour = "white";
         secondRow+="<td class="+colour+"><div onclick='bookAppointment("+dayB+");'>"+dayB+"</div></td>";
        }   
    }
        for(dayC of row3) {
        if(parseInt(dayC)<thisDay && parseInt(selMth)===modifiedMth &&
           theYear===curYear.toString()) {
        colour = "yellow";
        thirdRow+="<td class="+colour+"><div>"+dayC+"</div></td>";
        } else if(savedDays.indexOf(dayC+".0")>=0 && savedYear.indexOf(curYear.toString())>=0 && savedMonth.indexOf(selMth.toString())>=0 && curYear.toString()===theYear) {
            colour = "blue";
         thirdRow+="<td class="+colour+"><div onclick='updateAppointment("+dayC+");'>"+dayC+"</div></td>";
        } else {
            colour = "white";
         thirdRow+="<td class="+colour+"><div onclick='bookAppointment("+dayC+");'>"+dayC+"</div></td>";
        }        
    }
        for(dayD of row4) {
    if(parseInt(dayD)<thisDay && parseInt(selMth)===modifiedMth &&
           theYear===curYear.toString()) {
        colour = "yellow";
        fourthRow+="<td class="+colour+"><div>"+dayD+"</div></td>";
        } else if(savedDays.indexOf(dayD+".0")>=0 && savedYear.indexOf(curYear.toString())>=0 && savedMonth.indexOf(selMth.toString())>=0 && curYear.toString()===theYear) {
            colour = "blue";
         fourthRow+="<td class="+colour+"><div onclick='updateAppointment("+dayD+");'>"+dayD+"</div></td>";
        } else {
            colour = "white";
         fourthRow+="<td class="+colour+"><div onclick='bookAppointment("+dayD+");'>"+dayD+"</div></td>";
        }
    }
        for(dayE of row5) {
            dayEid = "day"+dayE;
        if(parseInt(dayE)<thisDay && parseInt(selMth)===modifiedMth &&
           theYear===curYear.toString()) {
        colour = "yellow";
        fifthRow+="<td class="+colour+"><div>"+dayE+"</div></td>";
        } else if(savedDays.indexOf(dayE+".0")>=0 && savedYear.indexOf(curYear.toString())>=0 && savedMonth.indexOf(selMth.toString())>=0 && curYear.toString()===theYear) {
            colour = "blue";
         fifthRow+="<td class="+colour+"><div onclick='updateAppointment("+dayE+");' id="+dayEid+">"+dayE+"</div></td>";
        } else {
            colour = "white";
         fifthRow+="<td class="+colour+"><div onclick='bookAppointment("+dayE+");' id="+dayEid+">"+dayE+"</div></td>";
        }
    }
    document.getElementById('calRow1').innerHTML = firstRow;
    document.getElementById('calRow2').innerHTML = secondRow;
    document.getElementById('calRow3').innerHTML = thirdRow;
    document.getElementById('calRow4').innerHTML = fourthRow;
    document.getElementById('calRow5').innerHTML = fifthRow;
}

function getMonth() {
    var mth = document.getElementById("month");
    var yr = document.getElementById("year");
    var theMonth = mth.options[mth.selectedIndex].text;
    var theYear = yr.options[yr.selectedIndex].value;
    var calMth = mth.options[mth.selectedIndex].value;
    const modMonth = thisMonth+1;
    const modYear = thisYear-4;

    if(parseInt(calMth) <modMonth && (modYear).toString()===theYear){ 
        yellowLegends();
    } else if(parseInt(calMth) >=modMonth && parseInt(theYear)>= modYear){
        showAllLegends();
    } else {showAllLegends();}
    switch(theMonth) {
           case 'Jan': show31Days();
           break;
            
           case 'Feb':
            if(theYear=='2020') {
             leapYear();
           } else {
             normalYear();
           }
           break;
            
           case 'Mar': show31Days();
           break;
            
           case 'Apr': show30Days();
           break;
            
           case 'May': show31Days();
           break;
            
           case 'Jun': show30Days();
           break;
            
           case 'Jul': show31Days();
           break;
            
           case 'Aug': show31Days();
           break;
            
           case 'Sep': show30Days();
           break;
            
           case 'Oct': show31Days();
           break;
            
           case 'Nov': show30Days();
           break;
            
           case 'Dec': show31Days();
           break;
           }
}

function getYear() {
   
    var mth = document.getElementById("month");
    var yr = document.getElementById("year");
    var theMonth = mth.options[mth.selectedIndex].text;
    var theYear = yr.options[yr.selectedIndex].value;
    var calMth = mth.options[mth.selectedIndex].value;
    const modMonth = thisMonth+1;
    const modYear = thisYear-4;

    if(parseInt(theYear)>=modYear && parseInt(calMth)>=modMonth){showAllLegends();}
    if(modYear<parseInt(theYear) && parseInt(calMth)<modMonth){yellowLegends();}
}

  function bookAppointment(day) {
      document.getElementById("noteTitle").value = "";
      document.getElementById("noteBody").value = "";
    db.transaction(function (tx) {
              tx.executeSql(createTable,[],onCreateSuccess,onCreateError);
    });
    theDate = day;
    document.getElementById("calendarWidget").style.display = "none";
    document.getElementById("calendarNote").style.display = "block";
  }

function onCreateSuccess() {
}

function onCreateError(tx,error) {
    alert(error.message);
}

  function addNewDate() {
    var mth = document.getElementById("month");
    var yr = document.getElementById("year");
    var theMonth = mth.options[mth.selectedIndex].value;
    var theYear = yr.options[yr.selectedIndex].value;
      var head = document.getElementById("noteTitle").value;
      var body = document.getElementById("noteBody").value;
      if(head && body) {
      db.transaction(function(tx){
          tx.executeSql(checkDate,[theDate,theMonth,theYear],function(tx,result){
              if(result.rows.length===0) {
                  db.transaction(function(tx) {
                      tx.executeSql(addMyDate,[theDate,theMonth,theYear,head,body],onSave,onSaveError);
                  });
              } else {
                  alert("You have already saved this date");
              }
          });
      });
      } else {
          document.getElementById("message").innerHTML = "Please enter the title and content";
          document.getElementById("message").style.display = "block";
      }
  }

function onSave() {
    showAllLegends();
    document.getElementById("calendarWidget").style.display = "block";
    document.getElementById("calendarNote").style.display = "none";
    alert("Date was saved");
}

function onSaveError(tx,error) {
    console.log('no save ',error.message);
}

function onDelete() {
    document.getElementById("calendarWidget").style.display = "block";
    document.getElementById("calendarNote").style.display = "none";
    document.getElementById("myYear").innerHTML = "";
    showAllLegends();
    alert("Appointment was deleted");
}

function onDeleteError(tx,error) {
   alert(error.message);
}

function deleteRecord() {console.log('myDay is',myDay);
    var question = confirm("Do you want to delete the appointment?");
    if(question === true) {
    var mth = document.getElementById("month");
    var yr = document.getElementById("year");
    var theMonth = mth.options[mth.selectedIndex].value;
    var theYear = yr.options[yr.selectedIndex].value;

    savedDays.pop(myDay+".0");
    savedMonth.pop(theMonth);
    savedYear.pop(parseInt(theYear));
    
      db.transaction(function(tx){
          tx.executeSql(deleteEntry,[myDay+".0",theMonth,theYear],onDelete,onDeleteError);
      });
        return true;
    } else {
        return false;
    }
}

function updateAppointment(day) {
    myDay = day;
    document.getElementById("calendarWidget").style.display = "none";
    document.getElementById("calendarNote").style.display = "block";
    var myMth = document.getElementById("month");
    var myYr = document.getElementById("year");
    var theMonth = myMth.options[myMth.selectedIndex].value;
    var theYear = myYr.options[myYr.selectedIndex].value;
    
        db.transaction(function(tx){
          tx.executeSql(findAppointment,[myDay+".0",theMonth,theYear],function(tx,result){
              document.getElementById("noteTitle").value = result.rows[0].title;
              document.getElementById("noteBody").value = result.rows[0].body;
          });
        });
}


function editEntry() {
    var title = document.getElementById("noteTitle").value;
    var body = document.getElementById("noteBody").value;
    if(title && body) {
    var myMth = document.getElementById("month");
    var myYr = document.getElementById("year");
    var theMonth = myMth.options[myMth.selectedIndex].value;
    var theYear = myYr.options[myYr.selectedIndex].value;
        
        db.transaction(function(tx) {
            tx.executeSql(updateTable,[title,body,(myDay+".0").toString(),theMonth.toString(),theYear.toString()],onEdit,onEditError);
        });
    } else {
        alert("Please enter a title and content");
    }
}

function onEdit() {
    document.getElementById("calendarWidget").style.display = "block";
    document.getElementById("calendarNote").style.display = "none";
    alert("Appointment was edited");
    showAllLegends();
}

function onEditError(tx,error) {
   alert(error.message);
}

function hideMessage() {
    document.getElementById("message").style.display = "none";
}

function Cancel() {
    document.getElementById("calendarWidget").style.display = "block";
    document.getElementById("calendarNote").style.display = "none";
}

function findAllSavedDates() {
   db.transaction(function (tx) {
        tx.executeSql(createTable,[],onCreateSuccess,onCreateError);
   });
    db.transaction(function(tx){
          tx.executeSql(findAllDates,[],function(tx,result){
              for (const cal of result.rows) {
                  savedDays.push(cal.day);
                  savedMonth.push(cal.month);
                  savedYear.push(cal.year);
              }
              setDate();
          });
    });
}