import WjsMdiContainer from './WjsMdiContainer.js';
import WjsContainer from './wjsContainer.js';

function Wjs () {

    var svgMain;
    var wjsMdiContainer;
    var wjsContainers;

    function initialize () {

        svgMain = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgMain.setAttribute('width',window.innerWidth);
        svgMain.setAttribute('height',window.innerHeight);
        svgMain.setAttribute('id','svgMain');

        wjsMdiContainer = WjsMdiContainer(svgMain);
        wjsMdiContainer.initialize();    
        wjsMdiContainer.draw(
            10, 
            10,
            window.innerWidth - 20, 
            window.innerHeight - 20 
        );

        window.addEventListener('resize', function() {
            svgMain.setAttribute('width',window.innerWidth);
            svgMain.setAttribute('height',window.innerHeight);

            wjsMdiContainer.draw(
                10, 
                10,
                window.innerWidth - 20, 
                window.innerHeight - 20 
            );
        });
    }

    function createWindow () {
        var wjsContainer = WjsContainer(svgMain, 'w1');

        wjsContainer.initialize();
        wjsContainer.draw(100, 200, 300, 200);
    } 

    return {
        initialize: initialize,
        createWindow: createWindow
    };
}

export default Wjs;

