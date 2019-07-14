$(function () {

  let currentDay = moment().format('D MMMM'),
      secondDay = moment().add('days', 1).format('D MMMM'),
      thirdDay = moment().add('days', 2).format('D MMMM'),
      fourthDay = moment().add('days', 3).format('D MMMM');

  let weather = [
    {
      date: currentDay,
      temperature: {
        day: 25,
        night: 18,
      },
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      date: secondDay,
      temperature: {
        day: 20,
        night: 15,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
    {
      date: thirdDay,
      temperature: {
        day: 30,
        night: 28,
      },
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      date: fourthDay,
      temperature: {
        day: 21,
        night: 15,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
  ];

  console.log(weather);
});