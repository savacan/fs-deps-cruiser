(() => {
    const result = window.dot_result;

    const onSelect = (event) => {
        const {value} = event.target;
        // viz.jsはscriptで直接読み込む。
        const svg = Viz(result, {
            format: 'svg',
            engine: value
        })
        const target = document.getElementById("graph-result")
        target.childNodes.forEach(e => e.remove());
        target.innerHTML = svg;
    }

    const setupSelectBox = () => {
        const select = document.getElementById("viz-layouts");
        const optionsFragment = ['dot', 'circo', 'fdp', 'neato', 'osage', 'twopi'].reduce((p, c) => {
            const opt = document.createElement("option")
            opt.value = c;
            opt.text = c;
            p.appendChild(opt);
            return p;
        }, document.createDocumentFragment());
        select.appendChild(optionsFragment);
        select.onchange = onSelect;
    }

    setupSelectBox();
})()
