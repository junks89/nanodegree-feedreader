/*Spec File for Jasmine where all tests are defined*/

$(function () {

    /* Testsuite RSS Feeds */
    describe('RSS Feeds', function () {
        /* Check if "allFeeds" is defined and not empty */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* Check if url of a feed is defined and not empty */
        it('URL is defined and not empty', function () {
            allFeeds.forEach(it => {
                expect(it.url).toBeDefined();
                expect(it.url).toBeTruthy();
            }
            );
        });
        /* Check if name of a feed is defined and not empty */
        it('Name is defined and not empty', function () {
            allFeeds.forEach(it => {
                expect(it.name).toBeDefined();
                expect(it.name).toBeTruthy();
            }
            );
        });
    });
    /* Testsuite The Menu */
    describe('The menu', function () {
        /* Check if the menu is hidden by default */
        it('Menu is hidden by default', function () {
            expect(document.querySelector('body.menu-hidden')).toBeTruthy();
        });
        /* Check if the menu hiding and showing after a click on it */
        it('Menu opens and closes after click', function () {
            let menuIcon = document.querySelector('.menu-icon-link');
            menuIcon.click();
            expect(document.querySelector('body.menu-hidden')).toBeFalsy();
            menuIcon.click();
            expect(document.querySelector('body.menu-hidden')).toBeTruthy();
        });
    });
    /* Testsuite Initial Entries */
    describe('Initial Entries', function () {
        /* before every check is executed load the feedentries */
        beforeEach(async function (done) {
            await loadFeed(0, done);
        });
        /* Check if at least one feed was loaded */
        it('When loadFeed function is called at least a single .entry element is within the .feed container', function () {
            let allEntries = document.querySelectorAll('.feed .entry');
            expect(allEntries.length > 0).toBeTruthy();
        });
    });
    /* Testsuite New Feed Selection */
    describe('New Feed Selection', function () {

        let feedTwo, feedOne;
        /* will try to load 2 different feeds and save them in their respective variable to compare them later */
        beforeEach(async function (done) {
            await loadFeed(0, async function () {
                feedOne = document.querySelectorAll('.entry')[0].innerHTML;
                await loadFeed(1, function () {
                    feedTwo = document.querySelectorAll('.entry')[0].innerHTML;
                    done();
                })

            })
        });
        /* Check if the feeds are different when loading a new feed */
        it('Compare feed entries if they change after reload', function () {
            expect(feedTwo).not.toEqual(feedOne);
        });
    });
}());
