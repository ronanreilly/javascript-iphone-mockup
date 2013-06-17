$(document).ready(function () {
    
    
    // These vars contain stings that will be used to compare 
    // to the data tag of an item that has been dragged in order
    // to determine what type of item has been dragged and the animation
    // to be applied.
    var generalItems = 'genItems';
    var tabEnd = 'tableEnd';
    var tabMid = 'tableMiddle';
    var tabStart = 'tableStart';
    var textField = 'textField';
    var keyBoard = 'keyboard';
    var divPicker = 'dividedPicker';
    var picker = 'picker';
    var slider = 'slider';
    
    
    // Once the data tag of a dragged item has been compared to 
    // a string in one of the above vars this will be given a numerical 
    // value and passed to the resize funcion so that the correct animation
    // can be applied to that items div.
    var itemTypeIdentifier = 0;
    
    // This var will be used to store a reference to the
    // div that has been cloned in the droppable function.
    var x = null;
    
    // This var will be used to signal that an item has been dragged.
    var isDragging = false;
    
    // Any item that has this class will be made draggable
    // and clonable. The cursor will also change to a hand to signify items 
    // can be moved.
    $(".draggableItem").draggable({
        helper: 'clone',
        cursor: 'move' 
    });
    
    
    // This function is called when an item is dragged on to the phone (drop area).
    // A refernece is got to the colned item and stored in x. The var m then is used
    // to store the cloned items data attribute. This will be used in a comparison
    // to determine what type of item has been cloned and how much its should grow.
    $(".droppable").droppable({
        
        drop: function (e, ui) {
            if ($(ui.draggable)[0].id != "") {
                console.log("[DROP FUNCTION] - Item is being dragged so isDragging is now: " + isDragging  + '.');
                isDragging = true;
              
                // Reference to the cloned otem that has been dropped.
                x = ui.helper.clone();
               
                // Here x is equal to the div beingDragged, which is draggableItem.
                // before it is cloned.
                console.log("[DROP FUNCTION] - after clone, x is equalt to object below on next line:" );
                console.log(x);

                // Selecting the datatype of the item being dragged and 
                // cloned that is x at this stage and making sure it is a string
                // before storing it in m for use in comparisons.
                var m;
                m = x.attr("data-itemType").toString();
                console.log('[DROP FUNCTION] - The item type being dragged is a ' + m  + '.');
   
                // Removing the ui helper from our cloned object. 
                ui.helper.remove();
                x.draggable({
                    helper: 'original',
                    containment: '.droppable'
                });  
                
                console.log(m);
                
                // Appending our cloned item to the droppable area/div.
                x.appendTo('.droppable');
                console.log('Is Dragging is now ' + isDragging);
                //x.removeClass('.tempID');
                //
                // Here we are giving the cloned item a new class. This was to be used
                // to be able to drag cloned items to the bin to be deleted.
                // This was not impelmented. It is used to apply animations to the divs that have
                // been dropped in teh droppable area by the resize function.
                x.attr('class', 'tempClass');
                
                
                // These comparisons check the dataype atrribute for the dragged
                // or cloned item stored in m against teh constants above. An numerical 
                // item identifier is then set appropriately and passed to teh reszie function
                // so that the correct animation and imagges can be applied to teh 
                // cloned item.
                
                if(m == generalItems){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 9;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == slider){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 8;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == tabEnd){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 7;
                    resize(itemTypeIdentifier); 
                    m = null;
                }
                if(m == tabMid){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 6;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == tabStart){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 5;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == textField){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 4;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == keyBoard){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 3;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == divPicker){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 2;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                if(m == picker){
                    //x.attr('data', 'draggedTableEnd');
                    itemTypeIdentifier = 1;
                    resize(itemTypeIdentifier);  
                    m = null;
                }
                
                
                // This is reset to zero so it can be sued again for the next
                // dragged and cloned item.
                itemTypeIdentifier = 0;
                console.log(itemTypeIdentifier);
            }
        }
    });


    // This function is passed a var that contains a numerical value. This value
    // is then used in the series of checks to deterimine, ehat item it needs to be
    // resized.
    function resize(itemTypeIdentifier){
        console.log('[RESIZE FUNCTION] - itemTypeIdentifier passed is : ' + itemTypeIdentifier + '.');
        
        // Select and store a reference to th dropepd and cloned item in this var.
        $tempHolder = $('.tempClass');
       
        // THis check is for items that do not require animation.
        console.log($tempHolder);
        if(itemTypeIdentifier == 9){
            console.log('[RESIZE FUNCTION] - General Items, now have class changed!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        
        // All of teh below checks are teh same so this one will be explained.
        // The var passed to this function contains a number. when it checks with
        // one of thsese comaprisons an animatin is applied. The animation function is passed the
        // height and width to be applied along with the time to apply it over in milliseconds.
        // Next the image is removed from teh newly cloned and dropped div and the correct larger
        // image is prepended to the div. This happens quickly and it is impossible for the user to
        // notice that the original image does not grow ut is replaced completely.
        if(itemTypeIdentifier == 8){
            // Apply animation to the cloned item with this class.
            $('.tempClass').animate({
                width: '304px',
                height: '44px'            
            }, 400);
            // Remove cloned items original image.
            $('.tempClass > img').remove();
            // Prepend the new larger image to this div.
            $('.tempClass').prepend('<img id="" src="images/slider_big.png"/>');
            console.log('[RESIZE FUNCTION] - Slider end animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            // Reset this to false so that it can be used for the next item to be dragged and cloned.
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 7){
            $('.tempClass').animate({
                width: '320px',
                height: '70px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/table_end_big.png"/>');
            console.log('[RESIZE FUNCTION] - Table end animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 7){
            $('.tempClass').animate({
                width: '320px',
                height: '70px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/table_end_big.png"/>');
            console.log('[RESIZE FUNCTION] - Table end animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 6){
            
            $('.tempClass').animate({
                width: '304px',
                height: '63px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/table_middle_big.png"/>');
            console.log('[RESIZE FUNCTION] - Table middle animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 5){
            
            $('.tempClass').animate({
                width: '326px',
                height: '82px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/table_start_big.png"/>');
            console.log('[RESIZE FUNCTION] - Table start animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 4){
            
            $('.tempClass').animate({
                width: '295px',
                height: '72px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/text_field_big.png"/>');
            console.log('[RESIZE FUNCTION] - Textfield start animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 3){
            
            $('.tempClass').animate({
                width: '318px',
                height: '238px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/keyboard_big.png"/>');
            console.log('[RESIZE FUNCTION] - Keyboard animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 2){
            $('.tempClass').animate({
                width: '328px',
                height: '269px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/divided_picker_big.png"/>');
            console.log('[RESIZE FUNCTION] - Divided Picker animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        if(itemTypeIdentifier == 1){ 
            $('.tempClass').animate({
                width: '318px',
                height: '249px'            
            }, 400);
            $('.tempClass > img').remove();
            $('.tempClass').prepend('<img id="" src="images/picker_big.png"/>');
            console.log('[RESIZE FUNCTION] - Divided Picker animation done!');
            //itemTypeIdentifier = 0;
            //console.log('[RESIZE FUNCTION] - itemTypeIdentifier, is reset to zero: ' + itemTypeIdentifier + '.');
            isDragging = false;
            console.log('[RESIZE FUNCTION] - isdragging, is reset to false: ' + isDragging + '.');
        }
        
        // Below the class for the dragged and cloned item is changed.
        // This was intended to be used for the binning or thrassing of dragged items.
        // If teh class was not changed here however, everytime an item is dropped on the 
        // droppable area if there where anyother items there they would have th animation
        // for teh new item applied aswell as they would share a class name.
        
        $tempHolder.removeClass('tempClass');
        $tempHolder.addClass('draggableToBinOnly');
        console.log($tempHolder);
    }
    console.log('[Document Ready] - isDragging is now ' + isDragging + '.');

}) ;


