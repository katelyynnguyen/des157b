document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
});

const buttons = document.querySelectorAll('button'); 
const selectedTextParagraph = document.getElementById('selectedText');

buttons.forEach(function(button){
    button.addEventListener('mousedown', function(event){
        event.preventDefault();
        buttons.forEach(function(btn){
            btn.classList.remove('selected');
        });
        button.classList.add("selected");
        selectedTextParagraph.textContent = `many others also think that ${button.textContent} will change the industry`;
    });
});


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['AI/ML', 'AR/VR', 'collaborative design software', 'online behavior tracking/modeling', 'telepresence/virtual modeling'],
    datasets: [{
      label: 'emerging trends that may impact the design industry',
      data: [49, 38, 32, 28, 25],
      backgroundColor: [
        'rgba(254, 127, 92, 1.0)',
        'rgba(255, 211, 146, 1.0)',
        'rgba(35, 150, 127, 1.0)',
        'rgba(118, 146, 255, 1.0)',
        'rgba(252, 243, 228, 1.0)',
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    plugins: {
        legend: {
            display: false,
        },
    },   
    scales: {
        y: {
            ticks: {
                color: '#FCF3E4',
                font: {
                    family: 'Cousine',
                },
                callback: function (val, index) {
                    return '                       ' + this.getLabelForValue(val);
                }
            },
            grid: {
                display: false,
                color: '#313453',
            },
            title: {
                color: '#FCF3E4',
                font: {
                    family: "'Cousine', sans-serif",
                }                
            }
        },
        x: {
            display: false,
        }
    },
    layout: {
        padding: {
            left: 100,
        }
    }
  }
});

AOS.init();

