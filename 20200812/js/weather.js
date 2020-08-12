(function () {
    //api.openweathermap.org.data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}
    const KEY_WEATHER = "location";
    const API_KEY = "20d67a9c6f5bce56354b6ae7e2ea65cc";
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";

    //온도,위치 출력하기위해 객체불러오기
    const textElem = document.querySelector(".weather_text");

    function getWeather(obj) {
        fetch(
            `${BASE_URL}lat=${obj.lat}&lon=${obj.lon}&appid=${API_KEY}&units=metric`
        )
            .then(function (response){
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                // console.log(JSON.stringify(myJson));
                // console.log(myJson);
                const name = myJson.name;
                const temp = Math.floor(myJson.main.temp);// 소숫점 버리기

                //위치 온도 출력 
                textElem.innerText = `지역:${name} 온도:${temp}`;
            });
    }

    function handlerSuccess(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //console.log(lat,lon);
        //경도,위도 2개의 정보를 객체로 만들어주기
        const coordObj = {
            lat: lat,
            lon: lon,
        };
        //데이터를 스토리지에 추가
        localStorage.setItem(KEY_WEATHER, JSON.stringify(coordObj));
    }
    function handlerError() {
        console.log("Geolocation is not supported by this browser.");
    }
    function getLocation() {
        navigator.geolocation.getCurrentPosition(handlerSuccess, handlerError);
        textElem.className = "Location";
    }
    function loadWeather() {
        const currentCoords = localStorage.getItem(KEY_WEATHER);
        if (currentCoords == null) {
            //위도, 경도 정보를 가져오기
            getLocation();
        } else {
            //저장되어 있는 위도, 경도 정보로 날씨를 알아오기
            getWeather(JSON.parse(currentCoords));
        }
    }
    loadWeather();
})();
