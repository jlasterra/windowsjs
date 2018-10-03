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

        //var svgMain = create();
        create();
        _menu = Menu(svgMain, _color);
        _menu.initialize();

        makeDraggable();
        makeSizable();
    }

    function makeDraggable() {
    
        var offset;
        var selectedElement;
        //var svgMain =  document.getElementById('svgMain');
    
        svgMain.addEventListener('mousedown', startDrag);
        svgMain.addEventListener('mousemove', drag);
        svgMain.addEventListener('mouseup', endDrag);
        svgMain.addEventListener('mouseleave', endDrag);
    
        function startDrag(evt) {
            if (evt.target.classList.contains('draggable')) {
                var targetElement = evt.target;


                if (targetElement.id.startsWith('mdi_')) {
                    selectedElement = targetElement;
                }
    
                offset = getMousePosition(evt);
                offset.x -= parseFloat(selectedElement.getAttributeNS(null, "x"));
                offset.y -= parseFloat(selectedElement.getAttributeNS(null, "y"));            
            }
        }
        
        function drag(evt) {
            if (selectedElement) {
                evt.preventDefault();
                var coord = getMousePosition(evt);
        
                _startX = coord.x - offset.x;
                _startY = coord.y - offset.y;

                draw (
                    _startX,
                    _startY
                );
            }
        }
        
        function endDrag(evt) {
            selectedElement = null;
        }
    }

    function makeSizable(windowContainer) {

        var offset = {};
        var selectedElement;
        //var svgMain =  document.getElementById('svgMain');
    
        svgMain.addEventListener('mousedown', startDrag);
        svgMain.addEventListener('mousemove', drag);
        svgMain.addEventListener('mouseup', endDrag);
        svgMain.addEventListener('mouseleave', endDrag);
    
        function startDrag(evt) {

            if (evt.target.classList.contains('sizable')) {
                var targetElement = evt.target;
        
                if (targetElement.id.startsWith('mdi_')) {
                    selectedElement = targetElement;
                }

                var mousePosition = getMousePosition(evt);

                var tri1 = document.getElementById('mdi_tri1');
                var pointsString = tri1.getAttributeNS(null, 'points');
                var endpoint = pointsString.split(' ')[0].split(',');

                offset.x = endpoint[0] - mousePosition.x;
                offset.y = endpoint[1] - mousePosition.y;
            }
        }
        
        function drag(evt) {

            if (selectedElement) {
                evt.preventDefault();
                var coord = getMousePosition(evt);
                
                _width = coord.x + offset.x - _startX;
                _height = coord.y + offset.y - _startY;
    
                if (_width > _minWidth && _height > _minHeight) {
                    draw (
                        _startX,
                        _startY,
                        _width,
                        _height
                    );
                }
            }
        }
        
        function endDrag(evt) {
            selectedElement = null;
        }
    }

    function create () {

        // var svgMain = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // svgMain.setAttribute('width',window.innerWidth);
        // svgMain.setAttribute('height',window.innerHeight);
        // svgMain.setAttribute('id','svgMain');
    
        var rec1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec1.setAttributeNS(null, 'id', 'mdi_rec1');
        svgMain.appendChild(rec1);

        console.log('hola');
        console.log(svgMain);
    
        var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttributeNS(null, 'id', 'mdi_line1');
        svgMain.appendChild(line1);
    
        var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttributeNS(null, 'id', 'mdi_line2');
        svgMain.appendChild(line2);
    
        var rec2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec2.setAttributeNS(null, 'id', 'mdi_rec2');
        rec2.setAttributeNS(null, 'class', 'draggable');
        svgMain.appendChild(rec2);
    
        var line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line3.setAttributeNS(null, 'id', 'mdi_line3');
        svgMain.appendChild(line3);
    
        var line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line4.setAttributeNS(null, 'id', 'mdi_line4');
        svgMain.appendChild(line4);
    
        var tri1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        tri1.setAttributeNS(null, 'id', 'mdi_tri1');
        tri1.setAttributeNS(null, 'class', 'sizable');
        svgMain.appendChild(tri1);
    
        document.body.appendChild(svgMain);

        //return svgMain;

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
    
        var rec2 = document.getElementById('mdi_rec2');
        rec2.setAttributeNS(null, 'x', _startX);
        rec2.setAttributeNS(null, 'y', _startY);
        rec2.setAttributeNS(null, 'width', _width);
        rec2.setAttributeNS(null, 'height', _offsetLine2);
        rec2.setAttributeNS(null, 'stroke', _color);
        rec2.setAttributeNS(null, 'stroke-width', '1'); 
    
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
    
        var tri1 = document.getElementById('mdi_tri1');
        var tri1Points = [ [_width + _startX, _height + _startY], 
            [_width + _startX - ( offset3 * 3 ) , _height + _startY],
            [_width + _startX, _height + _startY - ( offset3 * 3 )] 
        ];
        var res = [];
        for (var i = 0, l = tri1Points.length; i < l; i++) {
            res.push(tri1Points[i].join(','));
        }
        var tri1PointsString = res.join(' '); 
        tri1.setAttributeNS(null, 'points', tri1PointsString);
        tri1.setAttributeNS(null, 'stroke', _color);
        tri1.setAttributeNS(null, 'stroke-width', '1'); 
        tri1.setAttributeNS(null, 'fill-opacity', '0'); 
    
        var line3 = document.getElementById('mdi_line3');
        line3.setAttributeNS(null, 'x1', _width + _startX - ( offset3 * 2));
        line3.setAttributeNS(null, 'y1', _height + _startY);
        line3.setAttributeNS(null, 'x2', _width + _startX);
        line3.setAttributeNS(null, 'y2', _height + _startY - (offset3 * 2));
        line3.setAttributeNS(null, 'stroke', _color);
        line3.setAttributeNS(null, 'stroke-width', '1');
    
        var line4 = document.getElementById('mdi_line4');
        line4.setAttributeNS(null, 'x1', _width + _startX - ( offset3));
        line4.setAttributeNS(null, 'y1', _height + _startY);
        line4.setAttributeNS(null, 'x2', _width + _startX);
        line4.setAttributeNS(null, 'y2', _height + _startY - (offset3));
        line4.setAttributeNS(null, 'stroke', _color);
        line4.setAttributeNS(null, 'stroke-width', '1');

        _menu.draw();
    }
 
    return {
        initialize: initialize,
        draw: draw
    }
}

export default WsjMdiContainer;