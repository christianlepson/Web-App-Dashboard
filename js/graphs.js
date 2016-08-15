$( function() {
	//DOM Element Variables
	var totalTraffic = document.getElementById('total-traffic');
	var dailyTraffic = document.getElementById('daily-traffic');
	var mobileUsers = document.getElementById('mobile-users');
	var $hourlyBtn = $('#hourly-btn');
	var $dailyBtn = $('#daily-btn');
	var $weeklyBtn = $('#weekly-btn');
	var $monthlyBtn = $('#monthly-btn');

	// Graph Data Array Variables (must be 12 elements long)
	var hourlyData = [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000];
	var dailyData = [1000, 500, 2000, 1250, 1250, 1000, 1500, 500, 1250, 2000, 2500, 2000];
	var weeklyData = [1500, 1250, 1750, 1000, 1750, 1500, 1750, 1000, 1500, 2500, 1000, 1000];
	var monthlyData = [1200, 1500, 1500, 2000, 2500, 2000, 1000, 2000, 1000, 1500, 1250, 2500];

	//Chart Data Setting Objects (used for chart instantiation)
	var totalTrafficSettings = 
	{
		type: 'line',
		data: {
		    labels: ["16-22", "23-29", "30-5", "6-12", "13-9", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", "33-36"],
		    datasets: [
			        {
			            label: "Traffic",
			            fill: true,
			            lineTension: 0.1,
			            backgroundColor: "rgba(116, 119, 191, .25)",
			            borderColor: "#7477bf",
			            borderCapStyle: 'butt',
			            borderDash: [],
			            borderDashOffset: 0.0,
			            borderJoinStyle: 'miter',
			            pointBorderColor: "#7477bf",
			            pointBackgroundColor: "#fff",
			            pointBorderWidth: 2,
			            pointRadius: 5,
			            pointHitRadius: 10,
			            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
			            spanGaps: false,
			        }
			    ]
		},
		options : {
			legend : {display: false},
			scales : {
				 yAxes: [{
	                ticks: {
	                    max: 2500,
	                    min: 0,
	                    stepSize: 500
	                }
	            }],
	            xAxes: [{
                ticks: {
                    maxTicksLimit: 12
                	}
            	}]
			}
		}
	};

	
	var dailyTrafficSettings = 
	{
		type: 'bar',
		data: {
			labels: ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"],
		    datasets: [
			        {
			            data: [75, 50, 150, 125, 100, 225, 250],
			            backgroundColor: '#7477bf',

			        }
			    ]
		},
		options : {
			legend : {display: false},
			scales : {
				xAxes: [{
	                categoryPercentagez: 0.1428,
					barPercentage: 0.7
	            }],

				 yAxes: [{
	                ticks: {
	                    max: 250,
	                    min: 0,
	                    stepSize: 50
	                }
	            }]
	        }
		}
	};

	var mobileUsersSettings = 
	{
		type: 'doughnut',
		data: {
			labels: ["Phone", "Tablet", "Desktop"],
		    datasets: [
			        {
			            data: [20, 20, 60],
			            backgroundColor: ['#81c98f', '#74b1bf', '#7477bf'],
			            borderWidth: [0,0,0]
			        }
			    ]
		},
		options : {
			
		}
	};

	// Helper functions update selected button class and line graph data

	var selectButton = function(clickedBtn) {
		$('.graph-li').each(function() {
			if ($(this).hasClass('graph-li-selected')) {
				$(this).removeClass('graph-li-selected');
			}
		});
		clickedBtn.parent().addClass("graph-li-selected");
	};

	var updateData = function(dataArray) {
		var graphData = lineGraph.data.datasets[0].data;
		for (var i = 0; i < graphData.length; i++) {
			graphData[i] = dataArray[i];
		}
	};

	// Graph List Item Button Events
	// (update chart with new values and selected class when clicked)
	$hourlyBtn.on('click', function() {
		selectButton($hourlyBtn);
		updateData(hourlyData);
		lineGraph.update();
	});

	$dailyBtn.on('click', function() {
		selectButton($dailyBtn);
		updateData(dailyData);
		lineGraph.update();
	});

	$weeklyBtn.on('click', function() {
		selectButton($weeklyBtn);
		updateData(weeklyData);
		lineGraph.update();
	});

	$monthlyBtn.on('click', function() {
		selectButton($monthlyBtn);
		updateData(monthlyData);
		lineGraph.update();
	});


	// Chart Instantiations
	var lineGraph = new Chart(totalTraffic, totalTrafficSettings);
	var barGraph = new Chart(dailyTraffic, dailyTrafficSettings);
	var pieChart = new Chart(mobileUsers, mobileUsersSettings);

});