<?php

use Illuminate\Support\Facades\File;

test('returns json content if the locale file exists', function () {
    // Arrange: Create a fake locale file
    $locale = 'en_test';
    $content = ['key' => 'value'];
    File::put(lang_path("$locale.json"), json_encode($content));

    // Act: Perform a GET request to the controller route
    $response = $this->getJson("/api/translations/$locale");

    // Assert: Check that the response contains the correct JSON content
    $response->assertOk();
    $response->assertJson($content);

    // Cleanup: Delete the fake file after the test
    File::delete(lang_path("$locale.json"));
});

it('returns an empty array if the locale file does not exist', function () {
    // Arrange: Define a locale that does not have a corresponding JSON file
    $locale = 'non_existent_locale';

    // Act: Perform a GET request to the controller route
    $response = $this->getJson("/api/translations/$locale");

    // Assert: Check that the response contains an empty array
    $response->assertOk();
    $response->assertJson([]);
});
