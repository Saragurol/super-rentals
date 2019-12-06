// Acceptance tests aka application tests, tests my app from the user's perspective. They are an autmated version of the "click around and see if it works method"

// writing tests in framework, QUnit

// have helpers provided by ember test-helpers package
import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    // visit test helper navigates to the specified URL

    // use await keyword to wait for the asynchronous (async) function to completely finish loading the page before moving on to the next step 

    assert.equal(currentURL(), '/');
    // currentURL test helper checks that the current URL matches the URL that we expect (asserting or specifying)
    assert.dom('h2').hasText('Welcome to Super Rentals!');

    assert.dom('.jumbo a.button').hasText('About Us');
    // use CSS selector to confirm there is a link with the text About Us. Which means look inside the tag with the jumbo class for an <a> tag with the button class
    await click('.jumbo a.button');
    assert.equal(currentURL(), '/about');
  });
});

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

    test('visiting /about', async function(assert) {
      await visit('/about');
  
      assert.equal(currentURL(), '/about');
      assert.dom('h2').hasText('About Super Rentals');
  
      assert.dom('.jumbo a.button').hasText('Contact Us');
      await click('.jumbo a.button');
  
      assert.equal(currentURL(), '/getting-in-touch');

  });
});

module('Acceptance | super rentals', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /getting-in-touch', async function(assert) {
    await visit('/getting-in-touch');

    assert.equal(currentURL(), '/getting-in-touch');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('a.button').hasText('About');
    await click('.jumbo a.button');

    assert.equal(currentURL(), '/about');
  });
});
// almost all simulated interactions will use the await keyword 

// run automated test by running ember test --server
