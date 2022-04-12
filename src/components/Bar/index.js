import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";

// 1.封装Bar图表组件
// 2.定制title，横向数据xData，纵向数据yData，样式style可定制

export default function Bar({title,xData,yData,style}) {
// 基于准备好的dom，初始化echarts实例
const domRef = useRef();

// 指定图表的配置项和数据
const option = {
  title: {
    text: title,
  },
  tooltip: {},
  // legend: {
  //   data: ["销量"],
  // },
  xAxis: {
    data: xData,
  },
  yAxis: {},
  series: [
    {
      name: "销量",
      type: "bar",
      data: yData,
    },
  ],
};

const chartInit = () => {
  const myChart = echarts.init(domRef.current);
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};

// 执行初始化函数
useEffect(() => {
  chartInit();
}, []);

return (
  <div ref={domRef} style={style}>
    Home
  </div>
);
}
