import Menu from './wjsMenu.js';

function WsjMdiContainer (svgMain) {

    var _menu;

    var _color = '#ea9307';
    var _startX;
    var _startY;
    var _width;
    var _height;
    var _offsetLine1 = 20;
    var _offsetLine2 = 20;

    function init (posX, posY, width, height) {

        create();
        draw(posX, posY, width, height);
        _menu = Menu(svgMain, _color);
        _menu.init();
    }

    function create () {
    
        var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('id', 'mdi');
        g.setAttribute('shape-rendering', 'inherit');
        g.setAttribute('pointer-events', 'all');

        var rec1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec1.setAttributeNS(null, 'id', 'mdi_rec1');
        g.appendChild(rec1);
    
        var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttributeNS(null, 'id', 'mdi_line1');
        g.appendChild(line1);
    
        var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttributeNS(null, 'id', 'mdi_line2');
        g.appendChild(line2);
    
        svgMain.appendChild(g);
    }

    function draw (posX, posY, width, height) {
        
        _startX = posX;
        _startY = posY;

        if (width) _width = width;
        if (height) _height = height;

        var offset3 = Math.round( _offsetLine2 / 4 );
    
        var rec1 = document.getElementById('mdi_rec1');
        rec1.setAttributeNS(null, 'x', _startX);
        rec1.setAttributeNS(null, 'y', _startY);
        rec1.setAttributeNS(null, 'width', _width);
        rec1.setAttributeNS(null, 'height', _height);
        rec1.setAttributeNS(null, 'stroke', _color);
        rec1.setAttributeNS(null, 'stroke-width', '1'); 
    
        var line1 = document.getElementById('mdi_line1');
        line1.setAttributeNS(null, 'x1', _startX);
        line1.setAttributeNS(null, 'y1', _startY + _offsetLine1);
        line1.setAttributeNS(null, 'x2', _width + _startX);
        line1.setAttributeNS(null, 'y2', _startY + _offsetLine1);
        line1.setAttributeNS(null, 'stroke', _color);
        line1.setAttributeNS(null, 'stroke-width', '1');
        
        var line2 = document.getElementById('mdi_line2');
        line2.setAttributeNS(null, 'x1', _startX);
        line2.setAttributeNS(null, 'y1', _height + _startY - _offsetLine2);
        line2.setAttributeNS(null, 'x2', _width + _startX);
        line2.setAttributeNS(null, 'y2', _height + _startY - _offsetLine2);
        line2.setAttributeNS(null, 'stroke', _color);
        line2.setAttributeNS(null, 'stroke-width', '1');

        var g = document.getElementById('mdi');
        g.style.fill = '#226633';        
    }
 
    function isMouseIntoMainArea (mousePos) {

        return (
                    ( mousePos.x > _startX ) 
                    && 
                    ( mousePos.y > ( _startY + _offsetLine1 ) )
                )
                && 
                (
                    ( mousePos.x < ( _startX + _width ) )
                    && 
                    ( mousePos.y < ( _startY + _height - _offsetLine2 ) ) 
                ) ;

    }

    return {
        init: init,
        draw: draw,
        isMouseIntoMainArea: isMouseIntoMainArea
    }
}

export default WsjMdiContainer;