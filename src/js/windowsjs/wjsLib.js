function WjsLib () {

    function getMousePosition(evt) {

        var svg = evt.target;
        var ctm = svg.getScreenCTM();
        return {
            x: (evt.clientX - ctm.e) / ctm.a,
            y: (evt.clientY - ctm.f) / ctm.d
        };
    }    

    return {
        getMousePosition: getMousePosition
    }
}

export default WjsLib;