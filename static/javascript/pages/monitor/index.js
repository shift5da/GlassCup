var map;
var map_div_id = 'my_map';
var placeSearch;
// var array_community = {   community: [] }
var array_point = ['/images/icon/point-primary-12.png', '/images/icon/point-warning-12.png', '/images/icon/point-danger-12.png'];
var select_search = '';

var polygon;
var district_communities_array = [];
var district_occs_array = [];
var district_stations_array = [];
var nav, pathSimplifierIns;


$(document).ready(function() {
  // $('#my_map').css('height', document.body.scrollHeight);

  map = new AMap.Map(map_div_id, {
    resizeEnable: true,
    zoom: 12,
    mapStyle: 'amap://styles/grey',
    features: ['bg', 'building', 'road'],
    center: [121.420122, 31.230193]
  });
  add_alert_point_to_map();
});


function update_map(obj){
  if (obj.value == 1){
    add_alert_point_to_map();
  }else if (obj.value == 2){
    add_community_to_map();
  }
}

function add_community_to_map(){
  map.clearMap();
  map.setZoom(12);
  map.setCenter([121.420122, 31.230193]);
  create_districts();
}

function create_districts(){

  $.get("/data/district-changning.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-hongkou.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-huangpu.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-jingan.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-putuo.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-xuhui.json", function (data) {
    create_district(data);
  });
  $.get("/data/district-yangpu.json", function (data) {
    create_district(data);
  });

  create_district_tooltip("静安区", 'jingan', 121.435486,31.289329, 2);
  create_district_tooltip("虹口区", 'hongkou', 121.482178,31.274952, 1);
  create_district_tooltip("长宁区", 'changning', 121.374718,31.206557, 1);
  create_district_tooltip("普陀区", 'putuo', 121.39875,31.253235, 1);
  create_district_tooltip("徐汇区", 'xuhui', 121.427118,31.166944, 1);
  create_district_tooltip("杨浦区", 'yangpu', 121.516853,31.298717, 3);
  create_district_tooltip("黄浦区", 'huangpu', 121.474968,31.217128, 1);

}

function create_district(data){
  var bounds = data.districtList[0].boundaries[0];
  var polygons = [];
  if (bounds) {
    for (var i = 0, l = bounds.length; i < l; i++) {
      //生成行政划polygon
      polygons.push([bounds[i].lng, bounds[i].lat]);
    }
    polygon = new AMap.Polygon({
      map: map,
      strokeWeight: 1,
      path: polygons,
      fillOpacity: 0.7,
      fillColor: '#333333',
      strokeColor: '#CC66CC'
    });

    polygon.on('mouseover', function(e) {
      if (map.getZoom() <= 13){
        e.target.setOptions({fillColor: '#CCF3FF'});
      }

    });
    polygon.on('mouseout', function(e) {
      e.target.setOptions({fillColor: '#333333'});
    });

    polygon.on('click', function(e) {
      map.clearMap( );
      polygon = new AMap.Polygon({
        map: map,
        strokeWeight: 1,
        path: polygons,
        fillOpacity: 0.7,
        fillColor: '#333333',
        strokeColor: '#CC66CC'
      });
      map.setFitView();
      map.setZoom(13);
      show_district_communities(polygon);
    });

  }

}

function show_all_districts_communities(){

  $.getJSON("/data/community.json", function (data) {
    $.each(data.community, function (key, val) {

      if (true){

        var marker = new AMap.Marker({
          position: [
            val.position.lng, val.position.lat
          ],
          title: val.name,
          icon: array_point[val.bu],
          offset: new AMap.Pixel(-6, -6),
          map: map
        });

        var infoWindow_html = "";
        infoWindow_html = infoWindow_html + "<div class='panel panel-primary  b-primary' style='width: 300px;'>";
        infoWindow_html = infoWindow_html + "<div class='panel-heading bg-primary'>";
        infoWindow_html = infoWindow_html + "<div class='row'>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-9'>" + val.name + "</div>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-3 text-right'>";
        infoWindow_html = infoWindow_html + "<a href='javascript:closeInfoWindow();' class='action-panel-close'>";
        infoWindow_html = infoWindow_html + "<i class='fa fa-fw fa-close text-white'></i>";
        infoWindow_html = infoWindow_html + "</a>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "<table class='table table-condensed m-t-1 m-b-1'>";
        infoWindow_html = infoWindow_html + "<tbody>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>小用户数</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>896户</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>当前在线用户数</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>436户</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>光纤资源使用率</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>65%</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>当前带宽使用率</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        if (val.bu == 0) {
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-primary m-r-1'></i> 正常</span>";
        } else if (val.bu == 1){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-warning m-r-1'></i> 较高</span>";
        } else if (val.bu == 2){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-danger m-r-1'></i> 高</span>";
        }
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>小地址</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'></td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span><a href='/monitor/community-detail'>详细情况</a></span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "</div>";


        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: infoWindow_html,
            autoMove: true,
            offset: new AMap.Pixel(100, -10)
        });

        AMap.event.addListener(marker, 'click', function () {
           infoWindow.open(map, marker.getPosition());
        });

      }
    });
  });
}

function show_community_topology(community_name) {

  if (nav == null){
    $('#my_link').text('关闭光缆路由');
  }else{
    $('#my_link').text('显示光缆路由');
    nav.destroy();
    pathSimplifierIns.clearPathNavigators();
    pathSimplifierIns.setData([]);
    nav = null;
    pathSimplifierIns = null;
    map.setZoom(14);
    return;
  }


  if (district_occs_array.length == 0) {
    show_district_occs(polygon);
  }
  if (district_stations_array.length == 0) {
    show_district_stations(polygon);
  }

  AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {
    if (!PathSimplifier.supportCanvas) {
      alert('当前环境不支持 Canvas！');
      return;
    }

    pathSimplifierIns = new PathSimplifier({
      zIndex: 100,
      map: map, //所属的地图实例
      getPath: function(pathData, pathIndex) {
        return pathData.path;
      }
    });

    var my_path = [];
    if (community_name == '上海滨江名人苑(豪华江景公寓)'){
      my_path = [
        [121.498592, 31.223381],
        [121.49428, 31.222064],
        [121.486964, 31.222521],
        [121.477754, 31.216076]
      ];
    }else if (community_name == '俞家弄') {
      my_path = [
        [121.49604, 31.21663],
        [121.49428, 31.222064],
        [121.486964, 31.222521],
        [121.477754, 31.216076]
      ];
    }else if (community_name == '黄浦滩名苑') {
      my_path = [
        [121.493182, 31.201037],
        [121.489902, 31.202905],
        [121.489169, 31.210203],
        [121.477754, 31.216076]
      ];
    }else if (community_name == '人民大厦') {
      my_path = [
        [121.473609, 31.230449],
        [121.478487, 31.228523],
        [121.479171, 31.224544],
        [121.477754, 31.216076]
      ];
    }else if (community_name == '张江国际酒店公寓') {
      my_path = [
        [121.48003, 31.23282],
        [121.478487, 31.228523],
        [121.479171, 31.224544],
        [121.477754, 31.216076]
      ];
    }


    //设置数据
    pathSimplifierIns.setData([{
      name: '路线0',
      path: my_path
    }]);

    //对第一条线路（即索引 0）创建一个巡航器
    nav = pathSimplifierIns.createPathNavigator(0, {
      loop: true, //循环播放
      speed: 1000 //巡航速度，单位千米/小时
    });
    nav.start();
  });
}

function show_district_communities(polygon){

  $.getJSON("/data/community.json", function (data) {
    $.each(data.community, function (key, val) {

      if (polygon.contains([val.position.lng, val.position.lat])){

        var marker = new AMap.Marker({
          position: [
            val.position.lng, val.position.lat
          ],
          title: val.name,
          icon: array_point[val.bu],
          offset: new AMap.Pixel(-6, -6),
          map: map
        });

        var infoWindow_html = "";
        infoWindow_html = infoWindow_html + "<div class='panel panel-primary  b-primary' style='width: 300px;'>";
        infoWindow_html = infoWindow_html + "<div class='panel-heading bg-primary'>";
        infoWindow_html = infoWindow_html + "<div class='row'>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-9'>" + val.name + "</div>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-3 text-right'>";
        infoWindow_html = infoWindow_html + "<a href='javascript:closeInfoWindow();' class='action-panel-close'>";
        infoWindow_html = infoWindow_html + "<i class='fa fa-fw fa-close text-white'></i>";
        infoWindow_html = infoWindow_html + "</a>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "<table class='table table-condensed m-t-1 m-b-1'>";
        infoWindow_html = infoWindow_html + "<tbody>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>小用户数</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>896户</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>当前在线用户数</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>436户</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>光纤资源使用率</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>65%</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>当前带宽使用率</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        if (val.bu == 0) {
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-primary m-r-1'></i> 正常</span>";
        } else if (val.bu == 1){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-warning m-r-1'></i> 较高</span>";
        } else if (val.bu == 2){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-danger m-r-1'></i> 高</span>";
        }
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>小地址</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'></td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span><a href='/monitor/community-detail'>详细情况</a></span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "</div>";


        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: infoWindow_html,
            autoMove: true,
            offset: new AMap.Pixel(100, -10)
        });

        AMap.event.addListener(marker, 'click', function () {
           infoWindow.open(map, marker.getPosition());
        });

      }
    });
  });
}

function create_district_tooltip(district_name_cn, district_name, lng, lat, state) {
  var content = []
  if (state == 1){
    content.push("<div class='label-primary' ")
  }else if (state == 2) {
    content.push("<div class='label-warning' ")
  }else if (state == 3) {
    content.push("<div class='label-danger' ")
  }
  content.push("style='border-radius: 10px 0 0 0; font-size: 13px; color: #fff; padding-left: 4px; width: 50px;'>");
  content.push(district_name_cn);
  content.push("</div>");

  var marker = new AMap.Marker({
    position: [lng, lat],
    content: content.join(''),
    offset: new AMap.Pixel(-6, -6),
    map: map
  });

  // AMap.event.addListener(marker, "click", function(e) {
  //   window.location.href = "/welcome/district/huangpu";
  // });
}

function show_district_occs(polygon){

  $.getJSON("/data/occ.json", function (data) {
    $.each(data.occ, function (key, val) {

      if (polygon.contains([val.position.lng, val.position.lat])){

        var marker = new AMap.Marker({
          position: [
            val.position.lng, val.position.lat
          ],
          title: val.name,
          icon: '/images/icon/occ-default-24.png',
          offset: new AMap.Pixel(-6, -6),
          map: map
        });

        var infoWindow_html = "";
        infoWindow_html = infoWindow_html + "<div class='panel panel-info  b-info' style='width: 300px;'>";
        infoWindow_html = infoWindow_html + "<div class='panel-heading bg-info-i'>";
        infoWindow_html = infoWindow_html + "<div class='row'>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-9  text-white'>" + val.name + "</div>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-3 text-right'>";
        infoWindow_html = infoWindow_html + "<a href='javascript:closeInfoWindow();' class='action-panel-close'>";
        infoWindow_html = infoWindow_html + "<i class='fa fa-fw fa-close text-white'></i>";
        infoWindow_html = infoWindow_html + "</a>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "<table class='table table-condensed m-t-1 m-b-1'>";
        infoWindow_html = infoWindow_html + "<tbody>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>类型</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>一级光交</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>所属区域</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>黄浦区</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>容量</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>288芯</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>当前使用率</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        if (val.bu == 0) {
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-primary m-r-1'></i> 正常</span>";
        } else if (val.bu == 1){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-warning m-r-1'></i> 较高</span>";
        } else if (val.bu == 2){
          infoWindow_html = infoWindow_html + "<span><i class='fa fa-fw fa-circle text-danger m-r-1'></i> 高</span>";
        }
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>地址</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'></td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span><a href='javascript:show_occ_detail()'>详细情况</a></span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "</div>";


        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: infoWindow_html,
            autoMove: true,
            offset: new AMap.Pixel(100, -10)
        });

        AMap.event.addListener(marker, 'click', function () {
           infoWindow.open(map, marker.getPosition());
        });

        district_occs_array.push(marker);
      }
    });
  });
}

function show_occ_detail(){
  $('#myModal').modal('show');
}

function clear_district_occs(){
  map.remove(district_occs_array);
  district_occs_array =[];
}

function show_district_stations(polygon){

  $.getJSON("/data/station.json", function (data) {
    $.each(data.station, function (key, val) {
      if (polygon.contains([val.position.lng, val.position.lat])){
          var marker = new AMap.Marker({
          position: [
            val.position.lng, val.position.lat
          ],
          title: val.name,
          icon: '/images/icon/station-24.png',
          offset: new AMap.Pixel(-6, -6),
          map: map
        });

        var infoWindow_html = "";
        infoWindow_html = infoWindow_html + "<div class='panel panel-success  b-success' style='width: 300px;'>";
        infoWindow_html = infoWindow_html + "<div class='panel-heading bg-success-i'>";
        infoWindow_html = infoWindow_html + "<div class='row'>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-9 text-white'>" + val.name + "</div>";
        infoWindow_html = infoWindow_html + "<div class='col-lg-3 text-right'>";
        infoWindow_html = infoWindow_html + "<a href='javascript:closeInfoWindow();' class='action-panel-close'>";
        infoWindow_html = infoWindow_html + "<i class='fa fa-fw fa-close text-white'></i>";
        infoWindow_html = infoWindow_html + "</a>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "</div>";
        infoWindow_html = infoWindow_html + "<table class='table table-condensed m-t-1 m-b-1'>";
        infoWindow_html = infoWindow_html + "<tbody>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>维护人员</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>王泽淘，15800771276</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>小区地址</td>";
        infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
        infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
        infoWindow_html = infoWindow_html + "</td></tr>";
        infoWindow_html = infoWindow_html + "</tbody></table>";
        infoWindow_html = infoWindow_html + "</div>";


        var infoWindow = new AMap.InfoWindow({
            isCustom: true,  //使用自定义窗体
            content: infoWindow_html,
            autoMove: true,
            offset: new AMap.Pixel(100, -10)
        });

        AMap.event.addListener(marker, 'click', function () {
           infoWindow.open(map, marker.getPosition());
        });

        district_stations_array.push(marker);
      }
    });
  });
}

function closeInfoWindow() {
  map.clearInfoWindow();
}

function add_alert_point_to_map(){
  map.clearMap();
  map.setZoom(12);
  map.setCenter([121.420122, 31.230193]);


  marker1 = new AMap.Marker({
    position: [
      121.509535,31.239532
    ],
    title: '',
    icon: '/images/icon/pipe-broken-24.png',
    map: map
  });

  marker2 = new AMap.Marker({
    position: [
      121.441788,31.206199
    ],
    title: '徐汇光交GJ101',
    icon: '/images/icon/occ-warning-24.png',
    map: map
  });

  marker3 = new AMap.Marker({
    position: [
      121.437668,31.200436
    ],
    title: '徐汇光交GJ103',
    icon: '/images/icon/occ-warning-24.png',
    map: map
  });
}

function focus_marker_1() {
  map.setCenter([121.509535,31.239532]);
  map.setZoom(18);
}

function focus_marker_2() {
  map.setCenter([121.441788,31.206199]);
  map.setZoom(18);
}


function focus_marker_3() {
  map.setCenter([121.437668,31.200436]);
  map.setZoom(18);
}


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
