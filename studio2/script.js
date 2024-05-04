(function(){
    'use strict';
    console.log("reading js");

    let intervalsData;

    async function getData(){
        try {
            const myIntervals = await fetch('data.json');
            intervalsData = await myIntervals.json();
            document.querySelector('#picker').innerHTML = createSelectList(intervalsData.intervals);
        } catch (error) {
            console.error('Error fetching or parsing data:', error);
        }

    };

    function createSelectList(intervals){
        let html = '<option>---</option>';
        intervals.forEach(function(interval, index){
            html += `<option value="${index}">${interval.interval_name}</option>`;            
        });
        return html;
    }

    document.querySelector('#picker').addEventListener('change', function(event){
        event.preventDefault();
        const selectedIndex = parseInt(this.value);
        if (selectedIndex >= 0){
            document.querySelector('#result').className = "showing";
            updateInterface(selectedIndex);
        } else {
            document.querySelector('#result').className = "hidden";
        }

    });

    function updateInterface(selectedIndex){
        const selectedInterval = intervalsData.intervals[selectedIndex];
        let html = '<p>';
        selectedInterval.text_data.forEach(function(data){
            html += `<div><span class="name">${data.name}</span><span class="time"> ${data.last_text_timestamp}</span></div><br>`;
        });
        html += '</p>';
        document.querySelector('#textData').innerHTML = '';
        document.querySelector('#textData').innerHTML += html;
    }

    getData();
})();