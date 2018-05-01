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


		/* This tests each feed in the allFeeds object to ensures they have a defined URL defined
		 * and that the URL is not empty.
		 */
		it('have working URLs', function () {

			allFeeds.forEach(function (feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url).not.toBe('');
			})

		})


		/* This tests each feed in allFeeds object to ensure they have a name that is defined
		 * and not empty.
		 */
		it('have working names', function () {
			allFeeds.forEach(function (feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name).not.toBe('');
			})
		})

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
			})
		})

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

		})

	})


	describe('Inital entries', function () {

		var feedContainer = $('.feed');
		var entriesNumber = feedContainer.children().length;

		// make sure loadFeed loads fully. In other words, that feed entries are loaded
		beforeEach(function (done) {
			loadFeed(0, function () {
				done();
			})
		})
		/* TODO: Write a test that ensures - when the loadFeed
		 * function is called and completes its work - that there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */
		it('have at least a single entry', function (done) {
			expect(entriesNumber > 0).toBe(true);
		})
	})


	describe('New Feed Selection', function () {

		/* TODO: Write a test that ensures - when a new feed is loaded
		 * by the loadFeed function - that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
	})

}());
