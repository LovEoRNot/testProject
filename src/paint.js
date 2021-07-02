export default function paint () {
  const watcher = new IntersectionObserver((entities) => {
    entities.forEach(entity => {
      if (entity.intersectionRatio > 0) {
        watcher.unobserve(entity.target)
        appendDiv(watcher)
      }
    })
  }, {
    root: document.querySelector('.container'),
    threshold: [0, 1]
  })

  appendDiv(watcher)
}


function appendDiv(watcher) {
  const array = new Array(20).fill('');
  const fragment = document.createDocumentFragment();
  const parentEle = document.querySelector(".box")
  const curLen = parentEle.childNodes.length

  if(curLen >= 300) {
    return
  }

  array.forEach((_, item) => {
    const div = document.createElement("div");
    const curNum = curLen + item + 1
    div.innerText = `${curNum}`;
    div.classList.add('div')
    fragment.appendChild(div);
  });

  parentEle.appendChild(fragment);
  watcher.observe(parentEle.lastChild)
}