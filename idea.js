const cities = ['Wrocław', 'Warszawa', 'Gdańsk', 'Kraków', 'Poznań', 'Łódź', 'Opole', 'Katowice', 'Lublin']    
cities.map((city) => {
      const API = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=84aea1ab45e8d501835d9128346165db&units=metric`
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error('Nie udało się');
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleString()
        const weather = {
          id: Math.random(),
          err: false,
          date: time,
          city: data.name,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed
        }
        console.log(weather)
      })
      .catch(err => {
        console.log(err)
      
      })
    
    cities.map((city) => {
      console.log(city)
    })
      
    })
