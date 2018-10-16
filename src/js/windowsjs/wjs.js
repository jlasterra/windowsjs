import EventEmitter2 from 'eventemitter2';

import WjsMdiContainer from './WjsMdiContainer.js';
import WjsContainers from './wjsContainers.js';

function Wjs () {

    window.EVT = new EventEmitter2();

    var svgMain;
    var wjsMdiContainer;
    var wjsContainers;

    function init () {

        svgMain = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgMain.setAttribute('width',window.innerWidth);
        svgMain.setAttribute('height',window.innerHeight);
        svgMain.setAttribute('id','svgMain');
        document.body.appendChild(svgMain);

        EVT.on('menuItemClicked', menuItemClicked);

        wjsMdiContainer = WjsMdiContainer(svgMain);
        wjsMdiContainer.init( 10, 10, window.innerWidth - 20, window.innerHeight - 20);    
        
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

        wjsContainers = WjsContainers(svgMain, wjsMdiContainer);
    }

    function menuItemClicked (id) {
        console.log('menuItemClicked _ ' + id);
        wjsContainers.addContainer(id);
    }

    return {
        init: init
    };
}

export default Wjs;

