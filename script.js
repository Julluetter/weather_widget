$(function () {
  let currentDay = moment().format('D MMMM'),
      secondDay = moment().add('days', 1).format('D MMMM'),
      thirdDay = moment().add('days', 2).format('D MMMM'),
      fourthDay = moment().add('days', 3).format('D MMMM'),
      currentSecondDayWeek = moment().add('days', 1).format('dddd'),
      currentThirdDayWeek = moment().add('days', 2).format('dddd'),
      currentFourthDayWeek = moment().add('days', 3).format('dddd');
  let weather = [
    {
      id: 'current',
      date: currentDay,
      week: 'cегодня',
      temperature: {
        day: `днем + ${25}`,
        night: `ночью + ${18}`,
      },
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      id: 'second',
      date: secondDay,
      week: currentSecondDayWeek,
      temperature: {
        day: `днем + ${20}`,
        night: `ночью + ${15}`,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
    {
      id: 'third',
      date: thirdDay,
      week: currentThirdDayWeek,
      temperature: {
        day: `днем + ${30}`,
        night: `ночью + ${28}`,
      },
      cloudiness: 'Ясно',
      snow: false,
      rain: false,
    },
    {
      id: 'fourth',
      date: fourthDay,
      week: currentFourthDayWeek,
      temperature: {
        day: `днем + ${21}`,
        night: `ночью + ${15}`,
      },
      cloudiness: 'Облачно',
      snow: false,
      rain: true,
    },
  ];
  $('.weather').each(function () {
    let atr = $(this).attr('data-id'),
        week = [],
        date = [],
        d_temp = [],
        n_temp = [],
        rain = [];
    $.each(weather,function(i,id) {
      if (atr == weather[i].id) {
        week.push(weather[i].week);
        date.push(weather[i].date);
        d_temp.push(weather[i].temperature.day);
        n_temp.push(weather[i].temperature.night);
        rain.push(weather[i].rain);
        rain.forEach(function(item, i) { if (item == true) {rain[i] = 'дождь';} else {rain[i] = 'солнечно';}});
      }
    });
    $(this).find('.dayWeek').text(week.join());
    $(this).find('.day').text(date.join());
    $(this).find('.dayTemperature').text(d_temp.join());
    $(this).find('.nightTemperature').text(n_temp.join());
    $(this).find('.cloudiness').text(rain.join());
  });

});