$(function () {

    //get the pie chart canvas
    var ctx1 = $("#pieChart");

    //pie chart data
    var data1 = {
        labels: ["XP To Level Up", "XP Gained"],
        datasets: [
            {
                label: "TeamA Score",
                data: [200, 800],
                backgroundColor: [
                    "#e6e7ec",
                    "#FA7A50"

                ],
                borderColor: [
                    "#e6e7ec",
                    "#FA7A50"

                ],
                borderWidth: [1, 1]
            }
        ]
    };

    //options
    var options = {
        maintainAspectRatio: false,
        responsive: true,

        title: {
            display: false,

        },
        legend: {
            display: true,
            position: "bottom",
            labels: {
                fontColor: "#eee",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart1 = new Chart(ctx1, {
        type: "pie",
        data: data1,
        options: options
    });


});