
  var map;
  var map_div_id = 'my_map';
  var placeSearch;
  // var array_community = {   community: [] }
  var array_point = ['/images/icon/point-primary-12.png', '/images/icon/point-warning-12.png', '/images/icon/point-danger-12.png'];
  var select_search = '';


  $(document).ready(function () {
    $('#my_map').css('height', document.body.scrollHeight);

    map = new AMap.Map(map_div_id, {
      resizeEnable: true,
      zoom: 12,
      mapStyle: 'amap://styles/grey',
      features: ['bg', 'building', 'road'],
      center: [121.420122,31.230193]
    });

    create_districts();

    // map.on('zoomchange', function() {
    //   if ( map.getZoom() <= 12){
    //     map.clearMap( );
    //     create_districts();
    //   }
    //
    //   if (map.getZoom() > 14 && map.getZoom() < 18){
    //     map.clearMap( );
    //     create_districts();
    //     show_all_districts_communities();
    //
    //   }
    // });

    $.getJSON("/data/community.json", function (data) {
      $.each(data.community, function (key, val) {
        select_search = select_search + '<option value="' + key + '">' + val.name + '</option>';
      });
      $('#multi-append').append(select_search);
    });



    // AMap.service('AMap.DistrictSearch', function () {
    //   var opts = {
    //     subdistrict: 1, //返回下一级行政区
    //     extensions: 'all', //返回行政区边界坐标组等具体信息
    //     level: 'city' //查询行政级别为 市
    //   };
    //   //实例化DistrictSearch
    //   district = new AMap.DistrictSearch(opts);
    //   district.setLevel('district');
    //   //行政区查询
    //   district.search('浦东新区', function (status, result) {
    //     alert(JSON.stringify(result));
    //     var bounds = result.districtList[0].boundaries;
    //     var polygons = [];
    //
    //     if (bounds) {
    //       for (var i = 0, l = bounds.length; i < l; i++) {
    //         //生成行政区划polygon
    //         var polygon = new AMap.Polygon({
    //           map: map,
    //           strokeWeight: 1,
    //           path: bounds[i],
    //           fillOpacity: 0.7,
    //           fillColor: '#CCF3FF',
    //           strokeColor: '#CC66CC'
    //         });
    //         polygons.push(polygon);
    //       }
    //       map.setFitView(); //地图自适应
    //     }
    //   });
    // });

  });

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

    AMap.event.addListener(marker, "click", function(e) {
      window.location.href = "/welcome/district/huangpu";
		});
  }

  function create_district(data){
    var bounds = data.districtList[0].boundaries[0];
    var polygons = [];
    if (bounds) {
      for (var i = 0, l = bounds.length; i < l; i++) {
        //生成行政区划polygon
        polygons.push([bounds[i].lng, bounds[i].lat]);
      }
      var polygon = new AMap.Polygon({
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
        // map.clearMap( );
        // polygon = new AMap.Polygon({
        //   map: map,
        //   strokeWeight: 1,
        //   path: polygons,
        //   fillOpacity: 0.7,
        //   fillColor: '#333333',
        //   strokeColor: '#CC66CC'
        // });
        // map.setFitView();
        // map.setZoom(13);
        // show_district_communities(polygon);
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
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>小区用户数</td>";
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
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>小区地址</td>";
          infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
          infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
          infoWindow_html = infoWindow_html + "</td></tr>";
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'></td>";
          infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
          infoWindow_html = infoWindow_html + "<span><a href='/broadband-family/community-detail' target='_blank'>详细情况</a></span>";
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
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'>小区用户数</td>";
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
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0' width='35%'>小区地址</td>";
          infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
          infoWindow_html = infoWindow_html + "<span>" + val.address + "</span>";
          infoWindow_html = infoWindow_html + "</td></tr>";
          infoWindow_html = infoWindow_html + "<tr><td class='v-a-m b-t-0'></td>";
          infoWindow_html = infoWindow_html + "<td class='v-a-m b-t-0 text-right text-white'>";
          infoWindow_html = infoWindow_html + "<span><a href='/broadband-family/community-detail' target='_blank'>详细情况</a></span>";
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

  function closeInfoWindow() {
    map.clearInfoWindow();
  }

  $( "#multi-append" ).change(function() {
    var current_selected = $('#multi-append').val();
    $.getJSON("/data/community.json", function (data) {
      $.each(data.community, function (key, val) {
        if (key == current_selected){
          map.setCenter([val.position.lng, val.position.lat]);
          map.setZoom(18);

          var circle = new AMap.Circle({
              center: new AMap.LngLat(val.position.lng, val.position.lat),// 圆心位置
              radius: 20, //半径
              strokeColor: "#F33", //线颜色
              strokeOpacity: 1, //线透明度
              strokeWeight: 3, //线粗细度
              fillColor: "#ee2200", //填充颜色
              fillOpacity: 0.35//填充透明度
          });
          circle.setMap(map);
          return;
        }
      });
    });
  });
