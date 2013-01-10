/* ===================================================
 * popover-extra-placements.js v0.1
 * http://twitter.github.com/bootstrap-popover-extra-placements
 * ===================================================
 * Copyright 2012 Daniel Kleehammer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */

(function(c){var b=c.fn.popover;var a=function(e,d){b.Constructor.apply(this,arguments)};a.prototype=c.extend({},b.Constructor.prototype,{constructor:a,_super:function(){var d=c.makeArray(arguments);b.Constructor.prototype[d.shift()].apply(this,d)},show:function(){var h,d,j,f,i,e,g;if(this.hasContent&&this.enabled){h=this.tip();this.setContent();if(this.options.animation){h.addClass("fade")}e=typeof this.options.placement=="function"?this.options.placement.call(this,h[0],this.$element[0]):this.options.placement;d=/in/.test(e);h.remove().css({top:0,left:0,display:"block"}).appendTo(d?this.$element:document.body);j=this.getPosition(d);f=h[0].offsetWidth;i=h[0].offsetHeight;switch(d?e.split(" ")[1]:e){case"bottom":g={top:j.top+j.height,left:j.left+j.width/2-f/2};break;case"top":g={top:j.top-i,left:j.left+j.width/2-f/2};break;case"left":g={top:j.top+j.height/2-i/2,left:j.left-f};break;case"right":g={top:j.top+j.height/2-i/2,left:j.left+j.width};break;case"topLeft":g={top:j.top-i,left:j.left+j.width/2-(f*0.25)};break;case"topRight":g={top:j.top-i,left:j.left+j.width/2-(f*0.75)};break;case"rightTop":g={top:j.top+j.height/2-(i*0.25),left:j.left+j.width};break;case"rightBottom":g={top:j.top+j.height/2-(i*0.75),left:j.left+j.width};break;case"bottomLeft":g={top:j.top+j.height,left:j.left+j.width/2-(f*0.25)};break;case"bottomRight":g={top:j.top+j.height,left:j.left+j.width/2-(f*0.75)};break;case"leftTop":g={top:j.top+j.height/2-(i*0.25),left:j.left-f};break;case"leftBottom":g={top:j.top+j.height/2-(i*0.75),left:j.left-f};break}h.css(g).addClass(e).addClass("in")}}});c.fn.popover=c.extend(function(d){return this.each(function(){var g=c(this),f=g.data("popover"),e=typeof d=="object"&&d;if(!f){g.data("popover",(f=new a(this,e)))}if(typeof d=="string"){f[d]()}})},b);c(document).find("script").each(function(e,d){if(d.src.indexOf("popover-extra-placements.js")!=-1){c("head").append('<link rel="stylesheet" href="'+d.src.split("popover-extra-placements.js")[0]+'/popover-extra-placements.css" type="text/css" />')}else{if(d.src.indexOf("popover-extra-placements.min.js")!=-1){c("head").append('<link rel="stylesheet" href="'+d.src.split("popover-extra-placements.min.js")[0]+'/popover-extra-placements.min.css" type="text/css" />')}}})})(jQuery);