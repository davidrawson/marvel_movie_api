const GrossChart = function(name, data, categories){

  const container = document.querySelector('#gross-chart');
  const chart = new Highcharts.Chart({
  chart: {
    backgroundColor: "black",
    // color: "white",
    style: {
      fontFamily: "Avenir",
      color: "white"
    },
    legend: {
      style: {
        color: "white"
      }
    },
    type: 'column',
    renderTo: container
  },
  title: {
    text: name
  },
  series: [{
    name: "Earnings ($)",
    data: data,
    color: "#ff1111"
  }],
  xAxis: {
    categories: categories
  },
  yAxis: {
    title: "Earnings"
    // {text: "Earnings in $"}
  }
});
}
