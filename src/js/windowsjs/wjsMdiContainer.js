import Menu from './wjsMenu.js';

function getMousePosition(evt) {

    var svg = evt.target;
    var ctm = svg.getScreenCTM();
    return {
        x: (evt.clientX - ctm.e) / ctm.a,
        y: (evt.clientY - ctm.f) / ctm.d
    };
}

function WsjMdiContainer (svgMain) {

    var _menu;

    var _color = '#ea9307';
    var _startX;
    var _startY;
    var _width;
    var _height;
    var _offsetLine1 = 20;
    var _offsetLine2 = 20;

    var _minWidth = 200;
    var _minHeight = 100;

    function initialize () {

        create();
        _menu = Menu(svgMain, _color);
        _menu.initialize();
    }

    function create () {
    
        var rec1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec1.setAttributeNS(null, 'id', 'mdi_rec1');
        svgMain.appendChild(rec1);
    
        var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttributeNS(null, 'id', 'mdi_line1');
        svgMain.appendChild(line1);
    
        var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttributeNS(null, 'id', 'mdi_line2');
        svgMain.appendChild(line2);
    
        document.body.appendChild(svgMain);

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

        _menu.draw();
    }
 
    return {
        initialize: initialize,
        draw: draw
    }
}

export default WsjMdiContainer;