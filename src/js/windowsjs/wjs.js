import WjsMdiContainer from './WjsMdiContainer.js';
import WjsContainer from './wjsContainer.js';

function Wjs () {

    var wjsMdiContainer;
    var wjsContainers;

    function initialize () {
        wjsMdiContainer = WjsMdiContainer();
        wjsMdiContainer.initialize();    
        wjsMdiContainer.draw(
            10, 
            10,
            window.innerWidth - 20, 
            window.innerHeight - 20 
        );
    }

    function createWindow () {
        var wjsContainer = WjsContainer('w1');

        wjsContainer.initialize();
        wjsContainer.draw(100, 200, 300, 200);
    } 

    return {
        initialize: initialize,
        createWindow: createWindow
    };
}

export default Wjs;

