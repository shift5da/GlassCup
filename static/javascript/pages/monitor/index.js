var map;
var map_div_id = 'my_map';
var placeSearch;
// var array_community = {   community: [] }
var array_point = ['/images/icon/point-primary-12.png', '/images/icon/point-warning-12.png', '/images/icon/point-danger-12.png'];
var select_search = '';


$(document).ready(function() {
  // $('#my_map').css('height', document.body.scrollHeight);

  map = new AMap.Map(map_div_id, {
    resizeEnable: true,
    zoom: 12,
    mapStyle: 'amap://styles/grey',
    features: ['bg', 'building', 'road'],
    center: [121.420122, 31.230193]
  });

});


var option_highcharts_2 = {

};


var option_highcharts_3 = {
  chart: {
    renderTo: 'container',
    backgroundColor: 'transparent',
    type: 'line'
  },
  title: {
    text: '',
    x: -20 //center
  },
  subtitle: {
    text: '',
    x: -20
  },
  xAxis: {
    gridLineWidth: 1,
    categories: ['周一', '周二', '周三', '周四', '周五', '周六',
      '周日'
    ]
  },
  credits: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  yAxis: {
    gridLineWidth: 1,
    title: {
      text: ''
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: '#808080'
    }]
  },
  tooltip: {
    valueSuffix: '户'
  },
  legend: {
    layout: 'horizontal',
    align: 'right',
    verticalAlign: 'top',
    borderWidth: 0
  },
  series: [{
    type: 'area',
    name: '拆机量',
    data: [14, 15, 18, 29, 12, 28, 9],
    lineWidth: '1',
    marker: {
      symbol: 'circle',
    },
    color: 'white',
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [
        [0, 'rgba(255, 255, 255, .1)'],
        [1, 'rgba(255, 255, 255, 0)']
      ]
    }
  }, {
    name: '装机量',
    type: 'area',
    data: [124, 321, 762, 123, 456, 128, 185],
    lineWidth: '1',
    marker: {
      symbol: 'square',
    },
    color: '#2D99DC',
    fillColor: {
      linearGradient: {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1
      },
      stops: [
        [0, 'rgba(45, 153, 220, .1)'],
        [1, 'rgba(45, 153, 220, 0)']
      ]
    }
  }]
};
