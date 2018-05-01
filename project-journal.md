# Day 2 - Tue 1/5/18
7:15am - how can I test if menu is hidden by default? 
On load the body element should have class `menu-hidden`. That's how I can be sure it's by def.

8:19am - how I can test if menu is hidden when I click menu icon link?
Let's see. If body has not class `menu-hidden` it should mean that I clicked on the menuIcon, because that's what happens in app.js: when menuIcon is clicked it triggers display/hide i.e. class `menu-hidden` on body. 
So: 
 * if body has menu hidden class (i.e. it's clicked) and is clicked, then `slide-menu` has translate3d(0,0,0) --> expect translate3d(0,0,0) to be true; 
 * If body has not `hidden-menu` class and is clicked, then `slide-menu` has translate3d(-10em, 0, 0) --> expect translate3d(-10em, 0, 0) to be true;
 
Could this work? Sounds too complicated for me.

9:47am - too complicated indeed. I should have been simpler. In fact, with element.click() I can simulate a click. This must be inlcuded in the spec too. In fact, in the test clicks must be performed, and at clicks we should run our expectation. Now works.

