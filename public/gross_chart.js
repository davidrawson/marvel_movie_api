const GrossChart = function(name, data, categories){

  const container = document.querySelector('#gross-chart');
  const chart = new Highcharts.Chart({
  chart: {
    backgroundColor: "rgba(28,28,28, 0.8)",
    borderRadius: 15,
    style: {
      fontFamily: "Avenir",
    },
    labels: {
      style: {
        color: "#FFFFFF"
      }
    },
    type: 'column',
    renderTo: container
  },
  title: {
    text: name,
    style: {color: "#FFFFFF"}
  },
  series: [{
    name: "Earnings ($)",
    data: data,
    color: "#ff1111"
  }],
  xAxis: {
    categories: categories,
    style: {color: "#FFFFFF"}
  },
  yAxis: {
    title: "Earnings",
    style: {color: "#FFFFFF"}
  }
});
}
