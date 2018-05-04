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

***

# Day 3 - Wed 2/5/18
5:55am - need to test that - when a new feed is loaded by the loadFeed(id, cb) function - the content (I presume inside `div class="feed"`) actually changes.

This is a test, so I need to simulate the change of feed to load. Then, test that content changes. 

For the load of a new feed, I can load feed with id 1 (CSS tricks) and test if container.empty(); is exectued. 

8:40am - changed approach. To test if content changed, I can check the first entry's href strings. If the one obtained after loading feed 0 (Udacity Blog) is different than the one obtained after loading feed 1 (CSS tricks), it is safe to say content changed. 
Problem: href strings are stored only when both feeds are done loading, but printing happens before said loading. 
...
Solved by wrapping spec in a timeout. This ensures vars store href strings after feeds finish loading.

***

# Day 4 - Thu 3/5/18
6:49am - review received. Need to fix some. I'm grateful for the precious code review.
TODO: make sure to test that feedContainer has at least a child WITH CLASS .ENTRY
I need to add this selection, then I can actually test for children.length > 0