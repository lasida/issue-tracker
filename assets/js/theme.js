$(document).ready(function(){
    //Collapse
    $('[data-toggle="collapse"]').on('click', function(e){
        e.preventDefault();
        let target = $(this).data('target');
        $(target).toggleClass('show');

        if($(target).hasClass('show')){
            $(this).attr('aria-expanded', 'true');
        } else {
            $(this).attr('aria-expanded', 'false');
        }
    });

    // Dropdown
    $('[data-toggle="dropdown"]').on('click', function(e){
        e.preventDefault();
        let target = $(this).next('.dropdown-menu');
        $(target).toggleClass('show');

        if($(target).hasClass('show')){
            $(this).attr('aria-expanded', 'true');
        } else {
            $(this).attr('aria-expanded', 'false');
        }
    });

    // Tabs
    $('.nav-tab').on('click', '[data-toggle="tab"]', function(e){
        e.preventDefault();
        $(this).parents('.nav-tab').find('.nav-link').removeClass('active');
        $(this).addClass('active');
        let target = $(this).data('target');
        $(target).parents('.tab-content').find('.tab-pane').removeClass('show');
        $(target).addClass('show');
    });

    // Modal
    $('[data-toggle="modal"]').on('click', function(e){
        e.preventDefault();
        let target = $(this).data('target');
        $(target).toggleClass('show');
    });

    $('.modal-close').on('click', function(e){
        e.preventDefault();
        $(this).parents('.modal').toggleClass('show');
    });

    // Scrollbar
    $(".perfect-scrollbar").each(function(){
        const ps = new PerfectScrollbar($(this)[0], {
            useBothWheelAxes: false,
            suppressScrollX: true,
        });
    });

    // Floating Label Focus
    $('.floating-label').on('click', 'label', function(){
        $(this).prev('input').focus();
    });
});
