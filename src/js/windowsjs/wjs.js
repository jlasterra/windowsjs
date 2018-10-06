import WjsMdiContainer from './WjsMdiContainer.js';
import WjsContainer from './wjsContainer.js';

import WjsContainers from './wjsContainers.js';

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
        var wjsContainer_1 = WjsContainer(svgMain, 'w1');

        wjsContainer_1.initialize();
        wjsContainer_1.draw(650, 100, 300, 200);

        var wjsContainer_2 = WjsContainer(svgMain, 'w2');

        wjsContainer_2.initialize();
        wjsContainer_2.draw(100, 350, 600, 400);
    } 

    return {
        initialize: initialize,
        createWindow: createWindow
    };
}

export default Wjs;

