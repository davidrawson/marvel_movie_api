const GrossChart = function(name, data, categories){

  const container = document.querySelector('#gross-chart');
  const chart = new Highcharts.Chart({
  chart: {
    type: 'column',
    renderTo: container
  },
  title: {
    text: name
  },
  series: [{
    // name: "Not Sure of the name yet",
    data: data,
    // color: "lime"
  }],
  xAxis: {
    categories: categories
  },
  yAxis: {
    title: {text: "Earnings in $"}
  }
});
}
