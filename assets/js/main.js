/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $main = $('#main'),
        $nav = $('#nav'),
        $wrapper = $('#wrapper'),
        $navPanelToggle, $navPanel, $navPanelInner;

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['736px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });
    /*load a stadard footer and nav bar*/
    $("#footer").load("footer.html");

    // Toggle.
    $navPanelToggle = $(
            '<a href="#navPanel" id="navPanelToggle" class = "alt"></a>'
        )
        .appendTo($main);

    // Panel.
    $navPanel = $(
            '<div id="navPanel">' +
            '<nav>' +
            '</nav>' +
            '<a href="#navPanel" class="close"></a>' +
            '</div>'
        )
        .appendTo($body)
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'is-navPanel-visible'
        });

    // Get inner.
    $navPanelInner = $navPanel.children('nav');

    // Move nav content on breakpoint change.
    var $navContent = $nav.children();

    breakpoints.on('>medium', function() {

        // Renmove nav bar on zoom
        $nav.addClass('alt');

        // NavPanel -> Nav.
        $navContent.appendTo($nav);

        // Flip icon classes.
        $nav.find('.icons, .icon')
            .removeClass('alt');

    });

    breakpoints.on('<=medium', function() {

        $nav.removeClass('alt');
        // Nav -> NavPanel.
        $navContent.appendTo($navPanelInner);

        // Flip icon classes.
        $navPanelInner.find('.icons, .icon')
            .addClass('alt');

    });


    // Hack: Disable transitions on WP.
    if (browser.os == 'wp' &&
        browser.osVersion < 10)
        $navPanel
        .css('transition', 'none');

    // Nav.
    var $nav = $('#nav');

    if ($nav.length > 0) {

        // Shrink effect.
        $main
            .scrollex({
                mode: 'top',
                enter: function() {
                    $nav.addClass('alt');
                },
                leave: function() {
                    $nav.removeClass('alt');
                },
            });

        // Links.
        var $nav_a = $nav.find('a');

        $nav_a
            .scrolly({
                speed: 1000,
                offset: function() { return $nav.height(); }
            })
            .on('click', function() {

                var $this = $(this);

                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#')
                    return;

                // Deactivate all links.
                $nav_a
                    .removeClass('active')
                    .removeClass('active-locked');

                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this
                    .addClass('active')
                    .addClass('active-locked');

            })
            .each(function() {

                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);

                // No section for this link? Bail.
                if ($section.length < 1)
                    return;

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    initialize: function() {

                        // Deactivate section.
                        if (browser.canUse('transition'))
                            $section.addClass('inactive');

                    },
                    enter: function() {

                        // Activate section.
                        $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($nav_a.filter('.active-locked').length == 0) {

                            $nav_a.removeClass('active');
                            $this.addClass('active');

                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked'))
                            $this.removeClass('active-locked');

                    }
                });

            });

    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000

    });

    // Main.
    var $main = $('#main');
    var foo = $('#illusts');
    foo.poptrox();
    foo.poptrox({
        preload: false, // If true, preload fullsize images in
        // the background
        baseZIndex: 1000, // Base Z-Index
        fadeSpeed: 300, // Global fade speed
        overlayColor: '#000000', // Overlay color
        overlayOpacity: 0.6, // Overlay opacity
        windowMargin: 50, // Window margin size (in pixels; only comes into
        // play when an image is larger than the viewport)
        windowHeightPad: 0, // Window height pad
        selector: 'a', // Anchor tag selector
        caption: null, // Caption settings (see docs)
        popupSpeed: 2000, // Popup (resize) speed
        popupWidth: 200, // Popup width
        popupHeight: 100, // Popup height
        popupIsFixed: false, // If true, popup won't resize to fit images
        useBodyOverflow: true, // If true, the BODY tag is set to overflow: hidden
        // when the popup is visible
        usePopupEasyClose: true, // If true, popup can be closed by clicking on
        // it anywhere
        usePopupForceClose: false, // If true, popup can be closed even while content
        // is loading
        usePopupLoader: true, // If true, show the popup loader
        usePopupCloser: true, // If true, show the popup closer button/link
        usePopupCaption: false, // If true, show the popup image caption
        usePopupNav: false, // If true, show (and use) popup navigation
        usePopupDefaultStyling: true, // If true, default popup styling will be applied
        // (background color, text color, etc)
        popupBackgroundColor: '#FFFFFF', // (Default Style) Popup background color (when 
        // usePopupStyling = true)
        popupTextColor: '#000000', // (Default Style) Popup text color (when
        // usePopupStyling = true)
        popupLoaderTextSize: '2em', // (Default Style) Popup loader text size
        popupCloserBackgroundColor: '#000000', // (Default Style) Popup closer background color
        // (when usePopupStyling = true)
        popupCloserTextColor: '#FFFFFF', // (Default Style) Popup closer text color (when
        // usePopupStyling = true)
        popupCloserTextSize: '20px', // (Default Style) Popup closer text size
        popupPadding: 10, // (Default Style) Popup padding (when
        // usePopupStyling = true)
        popupCaptionHeight: 60, // (Default Style) Popup height of caption area
        popupCaptionTextSize: null, // (Default Style) Popup caption text size
        popupBlankCaptionText: '(untitled)', // Applied to images that don't have captions
        // (when captions are enabled)
        popupCloserText: '&#215;', // Popup closer text
        popupLoaderText: '&bull;&bull;', // Popup loader text
        popupClass: 'poptrox-popup', // Popup class
        popupSelector: null, // (Advanced) Popup selector (use this if you 
        // want to replace the built-in popup)
        popupLoaderSelector: '.loader', // (Advanced) Popup Loader selector
        popupCloserSelector: '.closer', // (Advanced) Popup Closer selector
        popupCaptionSelector: '.caption', // (Advanced) Popup Caption selector
        popupNavPreviousSelector: '.nav-previous', // (Advanced) Popup Nav Previous selector
        popupNavNextSelector: '.nav-next', // (Advanced) Popup Nav Next selector
        onPopupClose: null, // Called when popup closes
        onPopupOpen: null // Called when popup opens
    });


})(jQuery);