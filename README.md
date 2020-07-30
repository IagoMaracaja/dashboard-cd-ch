# Dashboard Project


### How to run this project

```
    Navigate to the source folder and run 'ng server'
```

```
    Open your browser at 'http://localhost:4200/'
```

### How to run the tests

```
    The tests is under the folder 'e2e' and was created using the PageObject Pattern
```

###### Steps to run the tests on Google Chrome
* Open the **terminal** at the project root
* **Run** `webdriver-manager update --versions.chrome=84.0.4147.30`
* **84.0.4147.30** is the version of my Google Chrome, if you have another version, you can download it from https://chromedriver.chromium.org/downloads
* If you was able to run without errors, now we'll start the ``webdriver`` server
* To do that, you just need to run:
* `webdriver-manager start`
* To run the suite of the test, open another instance of **terminal** at the project root and run: 
* `protractor e2e/protractor.conf.js --suite dashboard`
* The suite `dashboard` is configured on `protractor.config.js`

