import $ from "jquery";

//after all swaps calling it we can immesletly call for each swap..for real time
function animateSwap(animation) {
  //console.log(animation);
  const [node1, node2] = animation[0];
  const [ind1, ind2] = animation[1];
  let clickedDiv = $(`#${ind1}`),
    prevDiv = $(`#${ind2}`),
    distance = clickedDiv.outerHeight();
  //console.log(clickedDiv);
  if (prevDiv.length) {
    $.when(
      clickedDiv.animate(
        {
          top: -distance
        },
        100
      ),
      prevDiv.animate(
        {
          top: distance
        },
        100
      )
    ).done(function() {
      prevDiv.css("top", "0px");
      clickedDiv.css("top", "0px");
      clickedDiv.animate({ width: node1.data * 4 }, 150);
      prevDiv.animate({ width: node2.data * 4 }, 150);
      clickedDiv.find(".bar-value").text(node1.data);
      prevDiv.find(".bar-value").text(node2.data);
      clickedDiv.find(".bar-name").text(node1.name);
      prevDiv.find(".bar-name").text(node2.name);
      clickedDiv.css("background-color", node1.color);
      prevDiv.css("background-color", node2.color);
      clickedDiv.insertBefore(prevDiv);
    });
  }
}

export default animateSwap;
