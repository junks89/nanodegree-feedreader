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
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL is defined and not empty', function () {
            allFeeds.forEach(it => {
                expect(it.url).toBeDefined();
                expect(it.url).toBeTruthy();
            }
            );
        });
        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Name is defined and not empty', function () {
            allFeeds.forEach(it => {
                expect(it.name).toBeDefined();
                expect(it.name).toBeTruthy();
            }
            );
        });
    });
    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function () {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Menu is hidden by default', function () {
            expect(document.querySelector('body.menu-hidden')).toBeTruthy();
        });
        /* TODO: Write a test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * should have two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
        it('Menu opens and closes after click', function () {
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(document.querySelector('body.menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect(document.querySelector('body.menu-hidden')).toBeTruthy();
        });
    });
    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(async function (done) {
            await loadFeed(0, done);
        });

        it('When loadFeed function is called at least a single .entry element is within the .feed container', function () {
            let allEntries = document.querySelectorAll('.feed .entry');
            expect(allEntries.length > 0).toBeTruthy();
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function () {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feedTwo, feedOne;

        beforeEach(async function (done) {
            await loadFeed(0, () => {
                feedOne = document.querySelectorAll('.entry')[0].innerHTML;
            }),
                await loadFeed(1, () => {
                    feedTwo = document.querySelectorAll('.entry')[0].innerHTML;
                    if (feedTwo && feedOne) {
                        done();
                    }
                })

        });

        it('Compare feed entries if they change after reload', function () {
            expect(feedTwo).not.toEqual(feedOne);
        });
    });
}());