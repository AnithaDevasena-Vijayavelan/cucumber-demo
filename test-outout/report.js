$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Applications/Eclipse/Amirtha/selenium/FreeCrmPortal/src/main/java/Features/DealHook.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Portal Deals Creation using Map and hooks",
  "description": "",
  "id": "free-crm-portal-deals-creation-using-map-and-hooks",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5217178262,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Creation of new Deals in Free CRM Portal with Credential AnithaDevasena",
  "description": "",
  "id": "free-crm-portal-deals-creation-using-map-and-hooks;creation-of-new-deals-in-free-crm-portal-with-credential-anithadevasena",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@First"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User in Login Page then Enter Username and Password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 6
    },
    {
      "cells": [
        "AnithaDevasena",
        "Anitha005"
      ],
      "line": 7
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "click the button login And User is on the Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Select New Deal in Deal menu",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters contact details Title and Company and Probability and Commission",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "Probability",
        "Commission"
      ],
      "line": 11
    },
    {
      "cells": [
        "PowerPlant",
        "BBStar",
        "100",
        "10"
      ],
      "line": 12
    },
    {
      "cells": [
        "Computer",
        "BBpos",
        "100",
        "10"
      ],
      "line": 13
    },
    {
      "cells": [
        "Computer",
        "Event",
        "100",
        "10"
      ],
      "line": 14
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsHookStepDefinition.user_in_Login_Page_then_Enter_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 402618628,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.click_the_button_login_And_User_is_on_the_Homepage()"
});
formatter.result({
  "duration": 5450995786,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.select_New_Deal_in_Deal_menu()"
});
formatter.result({
  "duration": 518197172,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DataTable)"
});
formatter.result({
  "duration": 2019799518,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Commission must be a decimal percentage value between 0 and 100\n}\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Mariappans-MBP\u0027, ip: \u0027fe80:0:0:0:82a:649:6c79:b913%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011), userDataDir\u003d/var/folders/xx/p17nk81d61jcq4ss2yd_yq4w0000gn/T/.org.chromium.Chromium.W5b3Nm}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d66.0.3359.139, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 66dbc2ce96a13fa6ef8281c97e39c471\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Deals\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat StepDefinitions.DealsHookStepDefinition.user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DealsHookStepDefinition.java:81)\n\tat ✽.Then user enters contact details Title and Company and Probability and Commission(/Applications/Eclipse/Amirtha/selenium/FreeCrmPortal/src/main/java/Features/DealHook.feature:10)\n",
  "status": "failed"
});
formatter.after({
  "duration": 291830182,
  "status": "passed"
});
formatter.before({
  "duration": 4782008527,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Creation of new Deals in Free CRM Portal with Credential VijayVelan",
  "description": "",
  "id": "free-crm-portal-deals-creation-using-map-and-hooks;creation-of-new-deals-in-free-crm-portal-with-credential-vijayvelan",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@Second"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "User in Login Page then Enter Username and Password",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 19
    },
    {
      "cells": [
        "VijayVelan",
        "Vijay005"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "click the button login And User is on the Homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "Select New Deal in Deal menu",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "user enters contact details Title and Company and Probability and Commission",
  "rows": [
    {
      "cells": [
        "Title",
        "Company",
        "Probability",
        "Commission"
      ],
      "line": 24
    },
    {
      "cells": [
        "ThaiRice",
        "BBStar",
        "100",
        "10"
      ],
      "line": 25
    },
    {
      "cells": [
        "Computer",
        "tofu",
        "100",
        "10"
      ],
      "line": 26
    },
    {
      "cells": [
        "Computer",
        "Wesoft",
        "100",
        "10"
      ],
      "line": 27
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "DealsHookStepDefinition.user_in_Login_Page_then_Enter_Username_and_Password(DataTable)"
});
formatter.result({
  "duration": 246952232,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.click_the_button_login_And_User_is_on_the_Homepage()"
});
formatter.result({
  "duration": 5368206161,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.select_New_Deal_in_Deal_menu()"
});
formatter.result({
  "duration": 490576308,
  "status": "passed"
});
formatter.match({
  "location": "DealsHookStepDefinition.user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DataTable)"
});
formatter.result({
  "duration": 1802024750,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Commission must be a decimal percentage value between 0 and 100\n}\n  (Session info: chrome\u003d66.0.3359.139)\n  (Driver info: chromedriver\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011),platform\u003dMac OS X 10.12.6 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027Mariappans-MBP\u0027, ip: \u0027fe80:0:0:0:82a:649:6c79:b913%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.12.6\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dMAC, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dMAC, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.38.552518 (183d19265345f54ce39cbb94cf81ba5f15905011), userDataDir\u003d/var/folders/xx/p17nk81d61jcq4ss2yd_yq4w0000gn/T/.org.chromium.Chromium.M9jPrr}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003d, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d66.0.3359.139, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: c58f62a0d45bddd3a4d8f5eb1641c473\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027Deals\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:173)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\n\tat StepDefinitions.DealsHookStepDefinition.user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DealsHookStepDefinition.java:81)\n\tat ✽.Then user enters contact details Title and Company and Probability and Commission(/Applications/Eclipse/Amirtha/selenium/FreeCrmPortal/src/main/java/Features/DealHook.feature:23)\n",
  "status": "failed"
});
formatter.after({
  "duration": 240696856,
  "status": "passed"
});
});