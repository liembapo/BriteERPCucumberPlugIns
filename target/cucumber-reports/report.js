$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/log_note_message.feature");
formatter.feature({
  "name": "The Verification of Log note functionality",
  "description": "  User story : 250\n  Test case : 213\n  As a Manager/Officer user should be able to log in with user name and password",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verification of Log note functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@logTest"
    }
  ]
});
formatter.step({
  "name": "User is on employee module page",
  "keyword": "Given "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_on_employee_module_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks  on existing profile",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User clicks on log note button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User enters a log note text",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "User should be able to see sent log note as most recent note",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});