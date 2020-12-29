!function(e){"use strict";var i=function(i,t){this.element=e(i),this.options=t,this.unique=this.element.data("unique"),this.data=window[this.unique],this.init()};i.DEFAULTS={rtl:!1},i.prototype.init=function(){this.element.hasClass("jeg_vertical_playlist")?this.vertical_playlist():this.horizontal_playlist(),this.element.find("video").mediaelementplayer(),this.bind_click(),this.autoload_video()},i.prototype.autoload_video=function(){e(".jeg_video_playlist").each((function(){var i=e(this);i.hasClass("loaded")||i.waypoint({handler:function(){if(!i.hasClass("loaded")){var t=e(this.element),l=t.find(".jeg_video_container"),a=l.children().attr("src");l.html('<iframe src="'+a+'" allowfullscreen="" height="500" width="700"></iframe>'),i.find(".jeg_preview_slider_loader").remove(),t.addClass("loaded")}},offset:"100%"})}))},i.prototype.horizontal_playlist=function(){var i=e(this.element).width(),t=Math.floor(i/160),l=t-1,a=this.element.hasClass("jeg_dark_playlist")?"":10;this.element.find(".jeg_video_playlist_list_inner_wrapper").addClass("owl-carousel").owlCarousel({rtl:this.options.rtl,lazyLoad:!0,navText:["",""],dots:!1,loop:!1,nav:!0,items:t,margin:a,autoHeight:!0,responsive:{0:{items:2},480:{items:3},568:{items:4},768:{items:l},1024:{items:t}}})},i.prototype.vertical_playlist=function(){var i=this;i.element.find(".jeg_video_playlist_list_inner_wrapper").jScrollPane();var t=i.element.find(".jeg_video_playlist_list_inner_wrapper").data("jsp");i.vertical_resize=function(t){var l=i.element.find(".jeg_video_playlist_current"),a=i.element.find(".jeg_video_playlist_video_content"),n=i.element.find(".jeg_video_playlist_list_inner_wrapper"),s=a.height(),o=e(window).width();if(i.element.hasClass("jeg_col_12")&&o>768||(i.element.hasClass("jeg_col_9")||i.element.hasClass("jeg_col_8"))&&o>1024)s=a.height()-l.outerHeight();else{for(var r=n.find(".jeg_video_playlist_item"),d=0,_=0;_<3;_++)d+=e(r[_]).outerHeight();s=d}n.height(s),t.reinitialise()},e(window).on("resize",(function(){i.vertical_resize(t)})),e(window).on("load",(function(){setTimeout((function(){i.vertical_resize(t)}),200)})),i.vertical_resize(t)},i.prototype.load_content=function(i,t){var l=e(i).parent(),a=e(l).parents(".jeg_video_playlist_wrapper"),n=e(a).find(".jeg_video_holder"),s=e(a).find(".jeg_video_playlist_current_info");e(n).find(".jeg_preview_slider_loader").remove(),e(n).append(t.tag),"mediaplayer"===t.type&&e(n).find("video").mediaelementplayer({success:function(e){e.play()}});var o="<a href='"+e(i).attr("href")+"'>"+e(i).find(".jeg_video_playlist_title").text()+"</a>";e(n).css("height","auto"),e(s).find("h2").html(o),e(s).find("span").text(e(i).find(".jeg_video_playlist_category").text())},i.prototype.bind_click=function(){var i=this;i.element.find(".jeg_video_playlist_item").on("click",(function(t){t.preventDefault();var l=e(this).data("id"),a=e(this).parent(),n=e(a).parents(".jeg_video_playlist_wrapper"),s=e(n).find(".jeg_video_holder");return e(n).find("a.jeg_video_playlist_item").removeClass("active"),e(this).addClass("active"),e(s).css("height",e(s).height()).html("<div class='jeg_preview_slider_loader'><div class='jeg_preview_slider_loader_circle'></div></div>"),i.load_content(this,i.data[l]),!1}))};var t=e.fn.jvidplaylist;e.fn.jvidplaylist=function(t){return e(this).each((function(){var l=e(this),a=e.extend({},i.DEFAULTS,l.data(),"object"==typeof t&&t),n=l.data("jeg.vidplaylist");n||l.data("jeg.vidplaylist",n=new i(this,a))}))},e.fn.jvidplaylist.Constructor=i,e.fn.jvidplaylist.noConflict=function(){return e.fn.jvidplaylist=t,this}}(jQuery);