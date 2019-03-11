$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/MercuryFlight.feature");
formatter.feature({
  "name": "Testing the Merucry flight application functonlaity",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenario({
  "name": "Testing the Register functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Navigate to the Mercury flight application",
  "keyword": "Given "
});
formatter.match({
  "location": "MercuryFlight.navigatetotheapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "MercuryFlight.clickregisterlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Register Page displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "MercuryFlight.registerpagedisplay()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the appliaction",
  "keyword": "And "
});
formatter.match({
  "location": "MercuryFlight.closeapp()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Testing the user Registration functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag"
    },
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Navigate to the Mercury flight application",
  "keyword": "Given "
});
formatter.match({
  "location": "MercuryFlight.navigatetotheapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Register Link",
  "keyword": "When "
});
formatter.match({
  "location": "MercuryFlight.clickregisterlink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter Valid details and submit",
  "keyword": "And "
});
formatter.match({
  "location": "MercuryFlight.enterdetails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should create",
  "keyword": "Then "
});
formatter.match({
  "location": "MercuryFlight.checkusercreation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the appliaction",
  "keyword": "And "
});
formatter.match({
  "location": "MercuryFlight.closeapp()"
});
formatter.result({
  "status": "passed"
});
});