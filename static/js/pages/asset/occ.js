$(document).ready(function(){
  $("img[id|='point']").each(function functionName() {
    $(this).mouseover(function () {
      $(this).attr('src', '/images/occ_point_hightlight.png');
      //将配对的跳纤口也高亮显示出来
      var no = parseInt(this.id.slice(6));
      var target_no = 12 + no;
      if (target_no > 24){
        target_no = target_no - 24;
      }
      $('#point-' + target_no.toString()).attr('src', '/images/occ_point_hightlight.png');
    });

    $(this).mouseout(function () {
      $(this).attr('src', '/images/occ_point_used.png');
      //将配对的跳纤口还原到原来的颜色
      var no = parseInt(this.id.slice(6));
      var target_no = 12 + no;
      if (target_no > 24){
        target_no = target_no - 24;
      }
      $('#point-' + target_no.toString()).attr('src', '/images/occ_point_used.png');
    });
  });
});
