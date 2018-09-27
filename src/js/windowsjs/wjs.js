import WjsMdiContainer from './WjsMdiContainer.js';

function Wjs () {

    var wjsMdiContainer;

    function initialize () {
        wjsMdiContainer = WjsMdiContainer();
        wjsMdiContainer.initialize();    
    }

    function draw () {
        wjsMdiContainer.draw(
            10, 
            10,
            window.innerWidth - 20, 
            window.innerHeight - 20 
        );
    }

    return {
        initialize: initialize,
        draw: draw
    };
}

export default Wjs;

