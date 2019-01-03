
setHTMLFontSize();
function setHTMLFontSize() {
    let designWidth = 750;
    let designFontSize = 200;
    let currentWidth = window.innerWidth;
    let currentFontSize = designFontSize / designWidth * currentWidth;
    document.documentElement.style.fontSize = currentFontSize + "px";
    
}

window.addEventListener('resize',setHTMLFontSize);

