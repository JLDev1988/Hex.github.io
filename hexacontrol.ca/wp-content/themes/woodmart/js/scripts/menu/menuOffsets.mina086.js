!function(a){woodmartThemeModule.menuOffsets=function(){var b=function(a){var b,c,d,e=a.find(" > .wd-dropdown-menu"),f=e.outerWidth(),g=e.offset();if(e.attr("style",""),f&&g)if(e.hasClass("wd-design-full-width"))c=woodmartThemeModule.$window.width(),woodmartThemeModule.$body.hasClass("rtl")?(d=c-g.left-f)+f>=c&&(b=d+f-c,e.css({right:-b})):g.left+f>=c&&(b=g.left+f-c,e.css({left:-b}));else if(e.hasClass("wd-design-sized")||e.hasClass("wd-design-default")){c=woodmart_settings.site_width,(woodmartThemeModule.$window.width()<c||!c||a.parents(".whb-header").hasClass("whb-full-width"))&&(c=woodmartThemeModule.$window.width()),d=c-g.left-f;var h,i=15,j=(woodmartThemeModule.$window.width()-c)/2;woodmartThemeModule.$body.hasClass("rtl")?(h=j+d)+f>=c&&(b=h+f-c,e.css({right:-b-i})):(h=g.left-j)+f>=c&&(b=h+f-c,e.css({left:-b-i}))}};a(".wd-header-main-nav ul.menu > li, .wd-header-secondary-nav ul.menu > li, .widget_nav_mega_menu ul.menu > li").each(function(){function c(){d.hasClass("wd-offsets-calculated")||(d.find(" > .menu-item-has-children").each(function(){b(a(this))}),woodmartThemeModule.$document.trigger("resize.vcRowBehaviour"),d.addClass("wd-offsets-calculated"))}var d=a(this);d.hasClass("menu-item")&&(d=a(this).parent()),d.on("mouseenter mousemove",function(){c()}),woodmartThemeModule.$window.on("wdHeaderBuilderStickyChanged",c),"yes"===woodmart_settings.clear_menu_offsets_on_resize&&setTimeout(function(){woodmartThemeModule.$window.on("resize",woodmartThemeModule.debounce(function(){d.removeClass("wd-offsets-calculated"),d.find(" > .menu-item-has-children > .wd-dropdown-menu").attr("style","")},300))},2e3)})},woodmartThemeModule.$window.on("wdEventStarted",function(){woodmartThemeModule.menuOffsets()})}(jQuery);