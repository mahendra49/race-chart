import React from "react";
import Bar from "./bar";
import visualizeAlgo from "./visualizealgo";
import Data from "./sampledata";
import animateSwap from "./animations";

class RaceBar extends React.Component {
  componentDidMount() {
    //console.log(this.state);
  }

  visualizeAlgo = () => {
    console.log("clickled");
    let animations = visualizeAlgo();
    //let baseYear = 2000;
    console.log(animations);
    for (let i = 0; i < animations.length; i++) {
      setTimeout(() => {
        if (animations[i] !== "yearend") animateSwap(animations[i]);
        else {
          let year = document.getElementById("year");
          year.innerHTML = Number(year.innerHTML) + 1;
        }
        //console.log(i);
      }, 300 * i);
    }
  };

  render() {
    let barChart = [];
    //const maxScreenWidth = getWindowDimensions().width;
    const tmpdata = Data[0];
    for (let i = 0; i < 10; i++) {
      //const barWidth = getRandomInt(0, maxScreenWidth / 2);
      const barWidth = tmpdata[i].data;
      const name = tmpdata[i].name;
      const color = tmpdata[i].color;
      barChart.push(
        <Bar key={i} id={i} barWidth={barWidth} name={name} color={color} />
      );
    }
    return (
      <div id="container">
        <button onClick={this.visualizeAlgo}>visualize</button>
        {barChart}
        <div>year</div>
        <div id="year">2000</div>
      </div>
    );
  }
}

// window dimesions : stackoverflow
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default RaceBar;
