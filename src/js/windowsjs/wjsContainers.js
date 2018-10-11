import WjsLib from './wjsLib.js';
import WjsContainer from './wjsContainer.js'

function WjsContainers (svgMain, mdi) {
    
    var wjsLib = WjsLib();

    var containers = [];
    var activeContainer;
    var initialMousePos;
    var isDragging;
    var isResizing;

    svgMain.addEventListener('mousedown', startDrag);
    svgMain.addEventListener('mousemove', drag);
    svgMain.addEventListener('mouseup', endDrag);
    svgMain.addEventListener('mouseleave', endDrag);

    function startDrag (evt) {
        evt.preventDefault();

        initialMousePos = wjsLib.getMousePosition(evt);

        if (mdi.isMouseIntoMainArea(initialMousePos)) {
            
            activeContainer = undefined;
            activeContainer = containers.find( function (element) {
                return element.isMouseIntoTotalArea(initialMousePos);
            });
    
            if (activeContainer) {
                isDragging = activeContainer.isMouseIntoDragArea(initialMousePos);
                isResizing = activeContainer.isMouseIntoResizeArea(initialMousePos);
    
                if (isDragging) activeContainer.startDrag(initialMousePos);
                if (isResizing) activeContainer.startResize(initialMousePos);
            }
        }
    }

    function drag (evt) { 
        evt.preventDefault();

        if (activeContainer) {
            var actualMousePos = wjsLib.getMousePosition(evt);

            if (isDragging) activeContainer.drag(actualMousePos);
            if (isResizing) activeContainer.resize(actualMousePos);
        }
    }

    function endDrag (evt) {
        evt.preventDefault();

        activeContainer = undefined;
    }

    function addContainer (id) {

        var wjsContainer = WjsContainer(svgMain, id, 'form #' + id);
        wjsContainer.init(350, 100, 300, 200);

        containers.push(wjsContainer);
    }

    function removeContainer (id) {

    }

    return {        
        addContainer: addContainer,
        removeContainer: removeContainer
    }
}

export default WjsContainers;