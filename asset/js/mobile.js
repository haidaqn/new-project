var header = document.getElementById('header');

var mobileId = document.getElementById('mobileMenu');

var headerHeight = header.clientHeight;

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');



mobileId.onclick = function() {
    var checkHeight = header.clientHeight === headerHeight;
    if (checkHeight) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            event.preventDefault();
        }
    }
}