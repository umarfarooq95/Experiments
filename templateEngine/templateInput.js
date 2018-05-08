var templateContext = {
    "name": "Provility Staffs",
    "staffs": [
        {
            name: "Safi"
        },
        {
            name: "Rizwan"
        },
        {
            name: "Umar"
        },
        {
            name: "Fayaz"
        },
        {
            name: "Eliyas"
        },
        {
            name: "Mani"
        },
        {
            name: "Gopi"
        }
    ],
    age:10
};


var templateInputStr = "<p>Hello {{name}}</p> " +
    "##repeat staff in staffs <ul> <li>Name {{name}}</li> </ul>" +
    " ## <p>Thank you {{name}}</p> ##if age == 10 <p>hello</p> ##";
