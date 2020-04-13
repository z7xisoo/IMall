export const dragdata = (el, binding) => {
  el.setAttribute("draggable", true);
  el.style.cursor = "move"
  el.data = binding.value;
  el.addEventListener("dragstart", e => {
    e.dataTransfer.setData("text/plain", JSON.stringify(el.data));
  });
}

export const drag = {
  inserted: (el, binding) => {
    /* 放下目标节点时触发事件 */
    el.addEventListener("dragover", (event) => {
      // 阻止默认动作
      event.preventDefault();
    }, false);

    el.addEventListener("drop", (event) => {
      // 阻止默认动作（如打开一些元素的链接）
      event.preventDefault();
      // 移动拖动的元素到所选择的放置目标节点
      const data = event.dataTransfer.getData("text/plain");
      binding.value(JSON.parse(data));
    }, false);
  }
}

export const imMove = el => {
  let hasMove = false;
  el.style.cursor = "move"
  el.addEventListener("mousedown", ev => {
    ev.preventDefault();
    const oX = ev.offsetX; // 按下元素内位置
    const oY = ev.offsetY;
    const dX = ev.clientX; // 按下时距离视口边距距离
    const dY = ev.clientY;
    const oW = Number(el.style.width.replace(/px/g, "")); // 绑定元素宽高
    const oH = Number(el.style.height.replace(/px/g, ""));
    const wW = window.innerWidth; // 视口宽高
    const wH = window.innerHeight;
    let left = 0;
    let top = 0;
    let mX = 0; // 移动时距离视口边距距离
    let mY = 0;
    el.onmousemove = (ev) => {
      hasMove = true;
      el.classList.add("immove");
      mX = ev.clientX;
      mY = ev.clientY;
      el.style.position = "absolute";
      el.style.left = dX - oX + "px";
      el.style.top = dY - oY + "px";
      let comX = mX - oX;
      let comY = mY - oY;
      left = comX < 0 ? 0 : comX + oW > wW ? wW - oW : comX;
      top = comY < 0 ? 0 : comY + oH > wH ? wH - oH : comY;
      el.style.left = left + "px";
      el.style.top = top + "px";
    }
  });
  el.addEventListener("mouseleave", () => {
    el.onmousemove = null;
  });
  el.addEventListener("mouseup", () => {
    el.onmousemove = null;
  });
}