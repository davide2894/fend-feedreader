/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
	/* This is our first test suite - a test suite just contains
	 * a related set of tests. This suite is all about the RSS
	 * feeds definitions, the allFeeds variable in our application.
	 */


	describe('RSS Feeds', function () {
		/* This is our first test - it tests to make sure that the
		 * allFeeds variable has been defined and that it is not
		 * empty. Experiment with this before you get started on
		 * the rest of this project. What happens when you change
		 * allFeeds in app.js to be an empty array and refresh the
		 * page?
		 */
		it('are defined', function () {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});


		/* This tests each feed in the allFeeds object
		 * to ensures they have a defined URL 
		 * and that the URL is not empty.
		 * .tobeTrurhy() makes sure feed.URL is not falsy,
		 * so that is not 0, "", null, undefined, NaN.
		 * In other words, we can test that feed.URL is defined and not empty
		 * just in one line.
		 */
		it('have working URLs', function () {
			allFeeds.forEach(function (feed) {
				expect(feed.url).toBeTruthy();
			});
		});


		/* This tests each feed in allFeeds object to ensure they have a name that is defined
		 * and not empty.
		 */
		it('have working names', function () {
			allFeeds.forEach(function (feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name).not.toBe('');
			});
		});
	});


	describe('The menu', function () {

		var body = $('body');
		var menuIcon = $('.menu-icon-link');

		/* This tests if the menu element is
		 * hidden by default. 
		 */
		it('is hidden by default', function () {
			$(function () {
				expect(body.hasClass('menu-hidden')).toBe(true);
			});
		});

		/* This test ensures the menu changes
		 * visibility when the menu icon is clicked
		 */

		it('changes visibility when clicked', function () {

			/*Simulate first click on menu icon:
			 * we consider it a first click 
			 * because we're executing code when document is loaded
			 */
			menuIcon.click();

			// Expect menu to be displayed when clicked
			expect(body.hasClass('menu-hidden')).toBe(false);

			// Simulate second click on menu icon	
			menuIcon.click();

			// Expect menu to hide when clicked again
			expect(body.hasClass('menu-hidden')).toBe(true);

		});

	});


	describe('Inital entries', function () {

		// make sure loadFeed loads fully. In other words, that feed entries are loaded
		beforeEach(function (done) {
			loadFeed(0, function () {
				done();
			});
		});

		/* This test ensures - when the loadFeed
		 * function is called and completes its work - that there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 * So: to test if there is a single element with class .entry
		 * we use $(.parent-class .child-class) selector.
		 * At this point is possible to check 
		 * if the number of children having this class is greater than 0.
		 * In other words, that there is at least an element with class .entry
		 * and that it is also a descendant of .feed (the parent div)
		 */
		it('have at least a single entry', function (done) {
			expect($('.feed .entry').length).toBeGreaterThan(0);
			done();
		});
	});


	describe('New Feed Selection', function () {

		var feed0,
			feed1;

		/* Before running any test, make sure to load 
		 * the default feed (Udacity blog) 
		 * and a different one (here we use CSS Tricks).
		 * We need nested callbacks to make 
		 * the second feed is loaded only after the first one 
		 * finished loading
		 */

		beforeEach(function (done) {

			// Make sure feed0 is done loading
			loadFeed(0, function () {

				feed0 = $('.feed').html();

				// Make sure feed1 is done loading
				loadFeed(1, function () {

					feed1 = $('.feed').html();

					// Here Feed 0 and Feed 1 are done loading, their content has been stored in feed0 and feed1. Test can begin
					done();
				});
			});
		});

		/* We can safely say that content changed
		 * if the first feed (Udacity) 
		 * and the second one (CSS tricks in this case)
		 * are different (they have different html code).
		 */
		it('should change the content', function (done) {
			expect(feed0 === feed1).toBe(false);
			done();
		});
	});

}());
