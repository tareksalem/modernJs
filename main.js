var moderJs = {
    registerContent : function (callback, parent, style) {
        callback();
        //parent.appendChild(callback());
        var container = document.createElement("div");
        container.innerHTML = callback();
        function Elements() {
            this.element =  container.firstElementChild.cloneNode(true);
        }
        var elements = new Elements();
        parent.appendChild(elements.element);
        for (var css in style) {
            var element = elements.element;
            for (var f in style[css]) {
                element.style.cssText += style[css];
            }
        }
    }
};
