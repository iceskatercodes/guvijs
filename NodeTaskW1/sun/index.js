const express = require("express");
const app = express();
app.use(express.json())

var moment = require("moment");
app.use(express.json());
const port = 4000;
let Room = [
    {
        "No_of_seats_avail": 7,
        "Amenities": ["Tv", "Fridge", "AC"],
        "Price_for_1hour": 700,
    }
];
let Customer = [{
    "Customer_name": "person1",
    "Booking_Date": "2020-11-19 17:19:11",
    "Booked_Status": "Yes",
    "Start_time": "2020-11-18T07:56:00.123Z",
    "End_time": "2020-11-19T11:56:00.123Z",
    "Room_id": 4
},
{
    "Customer_name": "person2",
    "Booking_Date": "2020-11-19 17:19:11",
    "Booked_Status": "Yes",
    "Start_time": "2020-11-20T07:56:00.123Z",
    "End_time": "2020-11-21T11:56:00.123Z",
    "Room_id": 3
},
{
    "Customer_name": "person3",
    "Booking_Date": "2020-11-14 17:19:11",
    "Booked_Status": "Yes",
    "Start_time": "2020-11-19T07:56:00.123Z",
    "End_time": "2020-11-20T11:56:00.123Z",
    "Room_id": 2
},
{
    "Customer_name": "person4",
    "Booking_Date": "2020-11-11 17:19:11",
    "Booked_Status": "Pending",
    "Start_time": "2020-11-20T07:56:00.123Z",
    "End_time": "2020-11-21T11:56:00.123Z",
    "Room_id": 1
},];


app.listen(port, () => console.log("your app is running on port: ", 'http://localhost:' + port));

app.get('/get_available_rooms', (req, res) => {
    res.status(200).json({
        msg: "Room Availability",
        rooms: Room,
    });
});

app.post("/book_room", (req, res) => {
    let name = req.body;
    let count = 0;
    for (let i = 0; i < Customer.length; i++) {
        if (Customer[i].Customer_name == name) {
            count++;
        }

    }

    if (count != 0) {
        var start_date = moment(req.body.Booking_Date, 'YYYY-MM-DD HH:mm:ss');
        var end_date1 = moment().format('YYYY-MM-DD HH:mm:ss');
        var end_date = moment(end_date1, 'YYYY-MM-DD HH:mm:ss');
        var duration = moment.duration(end_date.diff(start_date));
        var hours = duration.asHours();
        if (hours < 1) {
            res.status(200).json({
                msg: "Already Booked.Try after 1 hour"
            });
        }
        else {
            Room[0].No_of_seats_avail = Room[0].No_of_seats_avail - 1;
            Customer.push(req.body);
            res.status(200).json({
                msg: "Room Booked",
                Customer,
                Room,
                hours,
            });
        }
    }
    else {
        Room[0].No_of_seats_avail = Room[0].No_of_seats_avail - 1;
        Customer.push(req.body);
        res.status(200).json({
            msg: "Room Booked",
            Customer,
            Room,
            hours,
        });
    }
});

app.get('/booked_rooms', (req, res) => {

    let Bookedrooms = []
    for (i = 0; i < Customer.length; i++) {
        if (Customer[i].Booked_Status === "Yes") {
            Bookedrooms.push(Customer[i]);
        }
    }
    console.log(Bookedrooms)
    res.status(200).json({
        msg: "List of all Rooms",
        Bookedrooms
    });
});

app.get('/customer_list', (req, res) => {
    let Customer_list = [{
        "Customer_name": "",
        "Room_id": "",
        "Booking_Date": "",
        "start_date": "",
        "end_date": "",

    }]
    for (let i = 0; i < Customer.length; i++) {

        Customer_list[i].Customer_name = Customer[i].Customer_name;
        Customer_list[i].Room_id = Customer[i].Room_id;
        Customer_list[i].Booking_Date = Customer[i].Booking_Date;
        Customer_list[i].start_date = Customer[i].Start_time;
        Customer_list[i].end_date = Customer[i].End_time

        Customer_list.push(Customer_list[i]);
    }

    res.status(200).json({
        msg: "List of all customers",
        consumer_list:Customer_list,
    });
});