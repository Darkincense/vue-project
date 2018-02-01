<style lang="less" scoped>
@import "../assets/baidu.less";
</style>
<template>
  <div id="allmap"></div>
</template>
<script>
export default {
  name: "allmap",
  data() {
    return {
      pointArr: [
        { lng: 106.71, lat: 26.61 },
        { lng: 106.72, lat: 26.6 },
        { lng: 106.73, lat: 26.53 },
        { lng: 106.74, lat: 26.64 },
        { lng: 106.75, lat: 26.62 },
        { lng: 106.74, lat: 26.655 },
        { lng: 106.71, lat: 26.6199 }
      ]
    };
  },
  mounted: function() {
    var map = new BMap.Map("allmap");
    var point = new BMap.Point(116.404, 39.915);
    map.centerAndZoom(point, 15);
    map.enableScrollWheelZoom(); // 开启鼠标滚轮缩放
    map.addControl(new BMap.ScaleControl()); // 添加比例尺控件

    var pointArr = this.pointArr;

    // 生成坐标点
    var trackPoint = [];
    for (var i = 0, j = pointArr.length; i < j; i++) {
      trackPoint.push(new BMap.Point(pointArr[i].lng, pointArr[i].lat));
    }

    map.centerAndZoom(trackPoint[0], 15);

    // 画线
    var polyline = new BMap.Polyline(trackPoint, {
      strokeColor: "red", //边线颜色。
      fillColor: "blue", //填充颜色。当参数为空时，圆形将没有填充效果。
      strokeWeight: 3, //边线的宽度，以像素为单位。
      strokeOpacity: 0.6, //边线透明度，取值范围0 - 1。
      fillOpacity: 0.3, //填充的透明度，取值范围0 - 1。
      strokeStyle: "dashed" //边线的样式，solid或dashed。
    });
    map.addOverlay(polyline);

    // 配置图片
    var size = new BMap.Size(26, 26);
    var offset = new BMap.Size(0, -13);
    var imageSize = new BMap.Size(26, 26);

    // 画图标
    for (var i = 0, j = trackPoint.length; i < j; i++) {
      if (i == 0) {
        // 标记起点
        addMarker(new BMap.Point(trackPoint[i].lng, trackPoint[i].lat), "起点");
      } else if (i == trackPoint.length - 1) {
        // 标记终点
        addMarker(new BMap.Point(trackPoint[i].lng, trackPoint[i].lat), "终点");
      } else {
        // 表及其他点
        var marker = new BMap.Marker(trackPoint[i], {
          offset: offset
        });
        // 创建标注
        map.addOverlay(marker);
      }
    }
    //根据经纬极值计算绽放级别。 (从网上复制)
    function getZoom(maxLng, minLng, maxLat, minLat) {
      var zoom = [
        "50",
        "100",
        "200",
        "500",
        "1000",
        "2000",
        "5000",
        "10000",
        "20000",
        "25000",
        "50000",
        "100000",
        "200000",
        "500000",
        "1000000",
        "2000000"
      ]; // 级别18到3。
      var pointA = new BMap.Point(maxLng, maxLat); // 创建点坐标A
      var pointB = new BMap.Point(minLng, minLat); // 创建点坐标B
      var distance = map.getDistance(pointA, pointB).toFixed(1); //获取两点距离,保留小数点后两位
      for (var i = 0, zoomLen = zoom.length; i < zoomLen; i++) {
        if (zoom[i] - distance > 0) {
          return 18 - i + 3; //之所以会多3，是因为地图范围常常是比例尺距离的10倍以上。所以级别会增加3。
        }
      }
    }

    //  (从网上复制)
    function setZoom(points) {
      if (points.length > 0) {
        var maxLng = points[0].lng;
        var minLng = points[0].lng;
        var maxLat = points[0].lat;
        var minLat = points[0].lat;
        var res;
        for (var i = points.length - 1; i >= 0; i--) {
          res = points[i];
          if (res.lng > maxLng) maxLng = res.lng;
          if (res.lng < minLng) minLng = res.lng;
          if (res.lat > maxLat) maxLat = res.lat;
          if (res.lat < minLat) minLat = res.lat;
        }
        var cenLng = (parseFloat(maxLng) + parseFloat(minLng)) / 2;
        var cenLat = (parseFloat(maxLat) + parseFloat(minLat)) / 2;
        var zoom = getZoom(maxLng, minLng, maxLat, minLat);
        map.centerAndZoom(new BMap.Point(cenLng, cenLat), zoom);
      } else {
        //没有坐标，显示全中国
        map.centerAndZoom(new BMap.Point(103.388611, 35.563611), 5);
      }
    }

    /**
     * 标记
     * @param {Object} point
     */

    function addMarker(point, name) {
      var marker = new BMap.Marker(point);
      var label = new BMap.Label(name, {
        offset: new BMap.Size(20, -10)
      });
      marker.setLabel(label);
      map.addOverlay(marker);
    }
    setZoom(pointArr);
  },
  methods: {}
};
</script>


