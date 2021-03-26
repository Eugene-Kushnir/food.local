function timer (id, deadline) {


    function getTimeRemainining(endTime){
        const t = Date.parse(endTime) - Date.parse(new Date()),
              days = Math.floor(t / (1000*60*60*24)),
              hours = Math.floor((t / (1000*60*60) % 24)),
              minutes = Math.floor((t / (1000*60) % 60)),
              second = Math.floor((t / 1000 % 60));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'second': second
        };   
    }

        function getZero (num){
            if(num >= 0 && num < 10){
                return `0${num}`;
            } else {
                return num;
            }
        }
    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            second = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

            updateClock();

        function updateClock(){
            const t = getTimeRemainining(endTime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours) ;
            minutes.innerHTML = getZero(t.minutes);
            second.innerHTML = getZero(t.second);


            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.innerHTML = '-';
                hours.innerHTML = '-';
                minutes.innerHTML = '-';
                second.innerHTML = '-';
            }
        }    
    }

    setClock(id, deadline);
}

export default timer;