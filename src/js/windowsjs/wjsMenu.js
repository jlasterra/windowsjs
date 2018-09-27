function Menu (svgMain, color) {

    var offset = 20;
    var menuFontFamily = 'Verdana';
    var menuFontSize = 10;

    var menuCollection = [
        {
            order: 1,
            id: 'item1',
            text: 'item 1',
            itemObject: {}
        },
        {
            order: 2,
            id: 'item2',
            text: 'item 2',
            itemObject: {}
        },
        {
            order: 3,
            id: 'item3',
            text: 'item 3',
            itemObject: {}
        },
        {
            order: 4,
            id: 'item4',
            text: 'item 4',
            itemObject: {}
        },
        {
            order: 5,
            id: 'item5',
            text: 'item 5',
            itemObject: {}
        },
        {
            order: 6,
            id: 'item6',
            text: 'item 6',
            itemObject: {}
        }
    ];

    function initialize () {
        create();
    }

    function create() {
        
        var box;
        var posY = offset;
    
        menuCollection.forEach(function(item){
            item.itemObject = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            item.itemObject.setAttributeNS(null, 'x', posY);
            item.itemObject.setAttributeNS(null, 'y', '23');
            item.itemObject.setAttributeNS(null, 'font-family', menuFontFamily);
            item.itemObject.setAttributeNS(null, 'font-size', menuFontSize);
            item.itemObject.setAttributeNS(null, 'fill', color);
            item.itemObject.setAttributeNS(null, 'id', item.id);
            item.itemObject.textContent = item.text;
            item.itemObject.addEventListener("mouseover", function () { 
                item.itemObject.setAttributeNS(null, 'class', 'clickable'); 
            });
            item.itemObject.addEventListener("mouseout", function () {
                item.itemObject.setAttributeNS(null, 'class', '');
            });
            item.itemObject.addEventListener("click", function () {
                console.log(item.text);
            });

            svgMain.appendChild(item.itemObject);

            box = item.itemObject.getBBox();
            posY = box.x + box.width + offset;
        });

    };

    function draw() {
        
        var rec1 = document.getElementById('rec1');
        var parentX = rec1.getBBox().x;
        var parentY = rec1.getBBox().y;

        var box;
        var posX = parentX + offset / 2;
        var posY = parentY + 13;

        menuCollection.forEach(function(item){
            item.itemObject.setAttributeNS(null, 'x', posX);
            item.itemObject.setAttributeNS(null, 'y', posY);
            
            box = item.itemObject.getBBox();
            posX = box.x + box.width + offset;
        });

    };

    return {
        initialize: initialize,
        draw: draw
    };
}

export default Menu;