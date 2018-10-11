
function WjsContainer (svgMain, id, title) {

    var _id = id;
    var _color = '#ea9307';
    var menuFontFamily = 'Verdana';
    var menuFontSize = 10;
    var _startX;
    var _startY;
    var _width;
    var _height;
    var _offsetLine1 = 20;
    var _offsetLine2 = 20;
    var offset3;

    var _offset = { x: 0, y:0 };

    var _minWidth = 200;
    var _minHeight = 100;

    function init (posX, posY, width, height) {

        create();
        draw(posX, posY, width, height);
    }

    function create () {

        var svgMain = document.getElementById('svgMain');
    
        var rec1 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec1.setAttributeNS(null, 'id', id + '_rec1');
        svgMain.appendChild(rec1);
    
        var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line1.setAttributeNS(null, 'id', id + '_line1');
        svgMain.appendChild(line1);
    
        var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line2.setAttributeNS(null, 'id', id + '_line2');
        svgMain.appendChild(line2);
    
        var rec2 = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rec2.setAttributeNS(null, 'id', id + '_rec2');
        rec2.setAttributeNS(null, 'class', 'draggable');
        svgMain.appendChild(rec2);
    
        var line3 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line3.setAttributeNS(null, 'id', id + '_line3');
        svgMain.appendChild(line3);
    
        var line4 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line4.setAttributeNS(null, 'id', id + '_line4');
        svgMain.appendChild(line4);
    
        var tri1 = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        tri1.setAttributeNS(null, 'id', id + '_tri1');
        tri1.setAttributeNS(null, 'class', 'sizable');
        svgMain.appendChild(tri1);

        var title1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        // title1.setAttributeNS(null, 'x', posTitleX);
        // title1.setAttributeNS(null, 'y', posTitleY);
        // title1.setAttributeNS(null, 'font-family', menuFontFamily);
        // title1.setAttributeNS(null, 'font-size', menuFontSize);
        // title1.setAttributeNS(null, 'fill', _color);
        title1.setAttributeNS(null, 'id', id + '_title1');
        //title1.textContent = title;
        svgMain.appendChild(title1);
    
        document.body.appendChild(svgMain);
    }

    function draw (posX, posY, width, height) {
        
        _startX = posX;
        _startY = posY;

        if (width) _width = width;
        if (height) _height = height;

        offset3 = Math.round( _offsetLine2 / 4 );
    
        var rec1 = document.getElementById(id + '_rec1');
        rec1.setAttributeNS(null, 'x', _startX);
        rec1.setAttributeNS(null, 'y', _startY);
        rec1.setAttributeNS(null, 'width', _width);
        rec1.setAttributeNS(null, 'height', _height);
        rec1.setAttributeNS(null, 'stroke', _color);
        rec1.setAttributeNS(null, 'stroke-width', '1'); 
    
        var rec2 = document.getElementById(id + '_rec2');
        rec2.setAttributeNS(null, 'x', _startX);
        rec2.setAttributeNS(null, 'y', _startY);
        rec2.setAttributeNS(null, 'width', _width);
        rec2.setAttributeNS(null, 'height', _offsetLine2);
        rec2.setAttributeNS(null, 'stroke', _color);
        rec2.setAttributeNS(null, 'stroke-width', '1'); 
    
        var line1 = document.getElementById(id + '_line1');
        line1.setAttributeNS(null, 'x1', _startX);
        line1.setAttributeNS(null, 'y1', _startY + _offsetLine1);
        line1.setAttributeNS(null, 'x2', _width + _startX);
        line1.setAttributeNS(null, 'y2', _startY + _offsetLine1);
        line1.setAttributeNS(null, 'stroke', _color);
        line1.setAttributeNS(null, 'stroke-width', '1');
        
        var line2 = document.getElementById(id + '_line2');
        line2.setAttributeNS(null, 'x1', _startX);
        line2.setAttributeNS(null, 'y1', _height + _startY - _offsetLine2);
        line2.setAttributeNS(null, 'x2', _width + _startX);
        line2.setAttributeNS(null, 'y2', _height + _startY - _offsetLine2);
        line2.setAttributeNS(null, 'stroke', _color);
        line2.setAttributeNS(null, 'stroke-width', '1');
    
        var tri1 = document.getElementById(id + '_tri1');
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
    
        var line3 = document.getElementById(id + '_line3');
        line3.setAttributeNS(null, 'x1', _width + _startX - ( offset3 * 2));
        line3.setAttributeNS(null, 'y1', _height + _startY);
        line3.setAttributeNS(null, 'x2', _width + _startX);
        line3.setAttributeNS(null, 'y2', _height + _startY - (offset3 * 2));
        line3.setAttributeNS(null, 'stroke', _color);
        line3.setAttributeNS(null, 'stroke-width', '1');
    
        var line4 = document.getElementById(id + '_line4');
        line4.setAttributeNS(null, 'x1', _width + _startX - ( offset3));
        line4.setAttributeNS(null, 'y1', _height + _startY);
        line4.setAttributeNS(null, 'x2', _width + _startX);
        line4.setAttributeNS(null, 'y2', _height + _startY - (offset3));
        line4.setAttributeNS(null, 'stroke', _color);
        line4.setAttributeNS(null, 'stroke-width', '1');


        var title1 = document.getElementById(id + '_title1');
        title1.setAttributeNS(null, 'x', _startX + 10);
        title1.setAttributeNS(null, 'y', _startY + 14);
        title1.setAttributeNS(null, 'font-family', menuFontFamily);
        title1.setAttributeNS(null, 'font-size', menuFontSize);
        title1.setAttributeNS(null, 'fill', _color);
        title1.setAttributeNS(null, 'id', id + '_title1');
        title1.textContent = title;
    }

    function startDrag (mousePos) {
        if (mousePos) {
            _offset.x = mousePos.x -  _startX;
            _offset.y = mousePos.y -  _startY;
        }
    }

    function drag (mousePos) {

        var x = mousePos.x - _offset.x;
        var y = mousePos.y - _offset.y;

        draw (x, y);
    }

    function startResize (mousePos) {
        if (mousePos) {

            var tri1 = document.getElementById(id + '_tri1');
            var pointsString = tri1.getAttributeNS(null, 'points');
            var endpoint = pointsString.split(' ')[0].split(',');

            _offset.x = endpoint[0] - mousePos.x;
            _offset.y = endpoint[1] - mousePos.y;
        }
    }

    function resize (mousePos) {

        _width = mousePos.x + _offset.x - _startX;
        _height = mousePos.y + _offset.y - _startY;

        if (_width > _minWidth && _height > _minHeight) {
            draw (
                _startX,
                _startY,
                _width,
                _height
            );
        }
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
                    ( mousePos.y < ( _startX + _height - _offsetLine2 ) ) 
                ) ;

    }
 
    function isMouseIntoTotalArea (mousePos) {

        return (
                    ( mousePos.x > _startX ) 
                    && 
                    ( mousePos.y > _startY )
                )
                && 
                (
                    ( mousePos.x < ( _startX + _width ) )
                    && 
                    ( mousePos.y < ( _startY + _height ) ) 
                ) ;

    }
 
    function isMouseIntoDragArea (mousePos) {

        return (
                    ( mousePos.x > _startX ) 
                    && 
                    ( mousePos.y > _startY )
                )
                && 
                (
                    ( mousePos.x < ( _startX + _width ) )
                    && 
                    ( mousePos.y < ( _startY + _offsetLine1 ) ) 
                ) ;

    }
 
    function isMouseIntoResizeArea (mousePos) {

        var p1 = { 
            x: _startX + _width - ( offset3 * 3 ),
            y: _startY + _height
        }

        var p2 = { 
            x: _startX + _width,
            y: _startY + _height - ( offset3 * 3 )
        }

        var a = ( p2.y - p1.y ) / ( p2.x - p1.x );

        var c = ( ( ( p2.x - p1.x ) * p1.y )  -  (  ( p2.y - p1.y ) * p1.x )  ) / ( p2.x - p1.x );

        return (
                    ( mousePos.x > p1.x ) 
                    && 
                    ( mousePos.y > p2.y )
                )
                && 
                (
                    ( mousePos.x < p2.x )
                    && 
                    ( mousePos.y < p1.y ) 
                )
                &&
                (
                    mousePos.y >= ( ( a * mousePos.x ) + c )
                ) ;

    }
 
    return {
        id: id,
        init: init,
        startDrag: startDrag,
        drag: drag,
        startResize: startResize,
        resize: resize,
        isMouseIntoTotalArea: isMouseIntoTotalArea,
        isMouseIntoMainArea: isMouseIntoMainArea,
        isMouseIntoDragArea: isMouseIntoDragArea,
        isMouseIntoResizeArea: isMouseIntoResizeArea
    }
}

export default WjsContainer;