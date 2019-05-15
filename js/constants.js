const db = openDatabase('calendar-DB','1.0','Calendar DB',2*1024*1024);
const createTable = "CREATE TABLE IF NOT EXISTS MyCalendar (id integer primary key autoincrement, day TEXT,month TEXT, year TEXT,title TEXT,body TEXT)";
const checkDate = 'SELECT * FROM MyCalendar WHERE day =? and month=? and year=?';
const findAllDates = 'SELECT * FROM MyCalendar';
const findAppointment = 'SELECT title,body FROM MyCalendar WHERE day =? AND month =? AND year=?'
const addMyDate = 'INSERT INTO MyCalendar (day,month,year,title,body) VALUES (?,?,?,?,?)';
const deleteEntry = 'DELETE FROM MyCalendar WHERE day=? AND month=? AND year=?';
const dropTable = 'DROP TABLE MyCalendar';
const updateTable = 'UPDATE MyCalendar SET title=?,body=? WHERE day=? AND month=? AND year=?';