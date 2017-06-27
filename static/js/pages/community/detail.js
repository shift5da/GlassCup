var marker;
var map;

var myChart_community_stat_income;
var myChart_community_stat_user_count;


$(document).ready(function () {

  update_map();

  $('#table_consumer_ftth').DataTable({responsive: true});
  $('#table_consumer_telephone').DataTable({responsive: true});
});

$('#tab_stat').on('shown.bs.tab', function (e) {
  if (!myChart_community_stat_income) {
    myChart_community_stat_income = echarts.init(document.getElementById('community_stat_income'));
    myChart_community_stat_user_count = echarts.init(document.getElementById('community_stat_user_count'));
    myChart_community_stat_income.setOption(option_community_stat_income);
    myChart_community_stat_user_count.setOption(option_community_stat_user_count);
  }
});

function update_map() {
  map = new AMap.Map('community_map', {
    resizeEnable: true,
    zoom: 16,
    //mapStyle: 'amap://styles/whitesmoke',
    center: [102.25548, 27.890265]
  });

  AMapUI.loadUI(['overlay/AwesomeMarker'], function (AwesomeMarker) {
    marker = new AwesomeMarker({
      //设置awesomeIcon
      awesomeIcon: 'building-o',
      iconLabel: {
        style: {
          color: '#333',
          fontSize: '14px'
        }
      },
      iconStyle: 'blue',
      map: map,
      position: [
        102.25548, 27.890265
      ],
      title: '攀西花园'
    });
  });
}


// 指定图表的配置项和数据
var option_community_stat_income = {
  title: {
    text: '小区收入统计'
  },
  tooltip: {},
  legend: {
    data: ['总收入', '家宽业务收入', '电话业务收入']
  },
  xAxis: {
    data: [
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年"
    ]
  },
  yAxis: {},
  series: [
    {
      name: '总收入',
      type: 'line',
      data: [
        34,
        35,
        28,
        37,
        45,
        34,
        28,
        38,
        32,
        41
      ]
    }, {
      name: '家宽业务收入',
      type: 'line',
      data: [
        19,
        14,
        18,
        23,
        33,
        24,
        18,
        18,
        22,
        31
      ]
    }, {
      name: '电话业务收入',
      type: 'line',
      data: [
        21,
        23,
        12,
        21,
        15,
        14,
        12,
        15,
        12,
        11
      ]
    }
  ]
};

var option_community_stat_user_count = {
  title: {
    text: '小区用户接入数'
  },
  tooltip: {},
  legend: {
    data: ['小区用户接入数', '电话接入数', '宽带接入数']
  },
  xAxis: {
    data: [
      "2007年",
      "2008年",
      "2009年",
      "2010年",
      "2011年",
      "2012年",
      "2013年",
      "2014年",
      "2015年",
      "2016年"
    ]
  },
  yAxis: {},
  series: [
    {
      name: '小区用户接入数',
      type: 'bar',
      data: [
        34,
        35,
        28,
        37,
        45,
        34,
        28,
        38,
        32,
        41
      ]
    }, {
      name: '电话接入数',
      type: 'bar',
      data: [
        19,
        14,
        18,
        23,
        33,
        24,
        18,
        18,
        22,
        31
      ]
    }, {
      name: '宽带接入数',
      type: 'bar',
      data: [
        21,
        23,
        12,
        21,
        15,
        14,
        18,
        18,
        12,
        11
      ]
    }
  ]
};
