function useIsotope(event) {

    // init Isotope
    var isotopeGrid = new Isotope( '#portfolio-items', {
        itemSelector: '.portfolio-pictures__item',
        masonry: {
            // use element for option
            columnWidth: '.portfolio-pictures__item',
            itemSelector: '.portfolio-pictures__item',
            transitionDuration: '0.5s',
            gutter: 8,
            horizontalOrder: true,
        }
    });

    var applyFilterFromLink = (linkObject) => {
        var filterValue = linkObject.dataset.filter;
        isotopeGrid.arrange({ filter: filterValue });
    };

    var filterGrid = function( event ) {
        event.preventDefault();
        applyFilterFromLink(this);
        var activeBtn = document.querySelector('.active-filter');
        if (activeBtn) {
            activeBtn.classList.remove('active-filter');
        }
        this.classList.add('active-filter');
    };

    document.querySelectorAll('.portfolio__filter').forEach(filterBtn => {
        filterBtn.addEventListener( 'click', filterGrid);
    });

    var activeBtn = document.querySelector('.ba-active-filter');
    applyFilterFromLink(activeBtn);
}
document.addEventListener('DOMContentLoaded', useIsotope);

