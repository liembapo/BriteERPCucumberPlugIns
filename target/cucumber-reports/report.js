$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/able_to_download_attachment.feature");
formatter.feature({
  "name": "Download",
  "description": "  User Story  : 182\n  Test case   : 225 , 226\n  as a Manager/Officer user should see all attached/uploaded files as a number of total files in EDP header, able to download it",
  "keyword": "Feature"
});
formatter.background({
  "name": "User is already on Employee module page.",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on employee module page",
  "keyword": "Given "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_on_employee_module_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (EDP)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_EDP()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: User is not on specific employee page expected:\u003c[Antoine Langlai]s - Odoo\u003e but was:\u003c[Employee]s - Odoo\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat step_definitions.briteERPEmployeeModule.Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_EDP(Download_attachment_file_btn_Step_Defs.java:30)\r\n\tat ✽.User is able to see Employee Detailed Page (EDP)(src/test/resources/features/able_to_download_attachment.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Employee module download file verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User click on Attachment on EDP header (dropdown available if it contains multiple files)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_click_on_Attachment_on_EDP_header_dropdown_available_if_it_contains_multiple_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User able to see all displayed files",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_able_to_see_all_displayed_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User click on the latest uploaded file",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_click_on_the_latest_uploaded_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User should be able to download the file",
  "keyword": "Then "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_should_be_able_to_download_the_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "name": "User is already on Employee module page.",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User is on employee module page",
  "keyword": "Given "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_on_employee_module_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (EDP)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_EDP()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: User is not on specific employee page expected:\u003c[Antoine Langlai]s - Odoo\u003e but was:\u003c[Employee]s - Odoo\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat step_definitions.briteERPEmployeeModule.Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_EDP(Download_attachment_file_btn_Step_Defs.java:30)\r\n\tat ✽.User is able to see Employee Detailed Page (EDP)(src/test/resources/features/able_to_download_attachment.feature:9)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Employee module download button verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User should not see the file button attachment",
  "keyword": "Then "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_should_not_see_the_file_button_attachment()"
});
formatter.result({
  "status": "skipped"
});
});