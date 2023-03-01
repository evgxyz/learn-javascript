
'use strict';

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

let meetupJson =  JSON.stringify(meetup, 
  (key, value) => ((key != '' && value == meetup) ? null : value)
);

console.log(meetupJson);