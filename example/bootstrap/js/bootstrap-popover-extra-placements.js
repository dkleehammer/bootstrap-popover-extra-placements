var timeOutObj;
$(function(){
    $('#user-menu a[rel="popover"]').popover({
        trigger: "manual",
        html : true,
        placement: function(tip, element) {
            var $element, above, actualHeight, actualWidth, below, boundBottom, boundLeft, boundRight, boundTop, elementAbove, elementBelow, elementLeft, elementRight, isWithinBounds, left, pos, right;
            isWithinBounds = function(elementPosition) {
              return boundTop < elementPosition.top && boundLeft < elementPosition.left && boundRight > (elementPosition.left + actualWidth) && boundBottom > (elementPosition.top + actualHeight);
            };
            $element = $(element);
            pos = $.extend({}, $element.offset(), {
              width: element.offsetWidth,
              height: element.offsetHeight
            });
            actualWidth = 410;
            actualHeight = 200;
            boundTop = $(document).scrollTop();
            boundLeft = $(document).scrollLeft();
            boundRight = boundLeft + $(document).width();
            boundBottom = boundTop + $(document).height();
            elementAbove = {
              top: pos.top - actualHeight,
              left: pos.left + pos.width / 2 - actualWidth / 2
            };
            elementBelow = {
              top: pos.top + pos.height,
              left: pos.left + pos.width / 2 - actualWidth / 2
            };
            elementLeft = {
              top: pos.top + pos.height / 2 - actualHeight / 2,
              left: pos.left - actualWidth
            };
            elementRight = {
              top: pos.top + pos.height / 2 - actualHeight / 2,
              left: pos.left + pos.width
            };
            elementBottomRight = {
              top: pos.top + pos.height,
              left: pos.left + pos.width / 2 - (actualWidth * 0.8)
            };
            elementBottomLeft = {
              top: pos.top + pos.height,
              left: pos.left + pos.width / 2 - (actualWidth * 0.2)
            };
            elementTopRight = {
                top: pos.top - actualHeight,
                left: pos.left + pos.width / 2 - (actualWidth * 0.8)
            };
            elementTopLeft = {
              top: pos.top - actualHeight,
              left: pos.left + pos.width / 2 - (actualWidth * 0.2)
            };
            above       = isWithinBounds(elementAbove);
            below       = isWithinBounds(elementBelow);
            left        = isWithinBounds(elementLeft);
            right       = isWithinBounds(elementRight);
            bottomRight = isWithinBounds(elementBottomRight);
            bottomLeft  = isWithinBounds(elementBottomLeft);
            topRight    = isWithinBounds(elementTopRight);
            topLeft     = isWithinBounds(elementTopLeft);

            if (above) {
                return "top";
            } else if (topRight) {
                return "top-right";
            } else if (topLeft) {
                return "top-left";
            }

            else if (below) {
                return "bottom";
            } else if (bottomRight) {
                return "bottom-right";
            } else if (bottomLeft) {
                return "bottom-left";
            }

            else if(left) {
                return "left";
            } else if(right) {
                return "right";
            } else {
                // default
                return "bottom";
            }
          }
    }).mouseenter(function(){
        clearTimeout(timeOutObj);
        $('#user-menu a[rel="popover"]').not($(this)).popover("hide");
        $(this).popover("show");
    }).mouseleave(function() {
        var ref = $(this);
        timeOutObj = window.setTimeout(function(){
            ref.popover("hide");
        }, 1000);

    });

    $(".popover").live("mouseenter",function () {
        clearTimeout(timeOutObj);
    }).live("mouseleave", function(){
        $('#user-menu a[rel="popover"]').popover("hide");
    });

});