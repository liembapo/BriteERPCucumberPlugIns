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
formatter.scenario({
  "name": "Employee module download file verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@b"
    }
  ]
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Attachment on EDP header (dropdown available if it contains multiple files)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_click_on_Attachment_on_EDP_header_dropdown_available_if_it_contains_multiple_files()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see all displayed files",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_able_to_see_all_displayed_files()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on the latest uploaded file",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_click_on_the_latest_uploaded_file()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to download the file",
  "keyword": "Then "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_should_be_able_to_download_the_file()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat utilities.Reusable.isFileDownloaded(Reusable.java:60)\n\tat step_definitions.briteERPEmployeeModule.Download_attachment_file_btn_Step_Defs.user_should_be_able_to_download_the_file(Download_attachment_file_btn_Step_Defs.java:64)\n\tat ✽.User should be able to download the file(src/test/resources/features/able_to_download_attachment.feature:18)\n",
  "status": "failed"
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
formatter.scenario({
  "name": "Employee module download button verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@b"
    }
  ]
});
formatter.step({
  "name": "User clicks on an Employee profile (Ashley Presley)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile_Ashley_Presley()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Ashley Presley)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Ashley_Presley()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should not see the file button attachment",
  "keyword": "Then "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_should_not_see_the_file_button_attachment()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_mark_messages_as_Todo.feature");
formatter.feature({
  "name": "Organization chart",
  "description": "  User Story  : 189\n  Test case   : 236",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify marking messages as Todo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ValentynTests"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user locate and hover message that he wants to Mark as TODO",
  "keyword": "And "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.user_locate_and_hover_message_that_he_wants_to_Mark_as_TODO()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on STAR icon",
  "keyword": "And "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.user_clicks_on_STAR_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "that message should be marked with star as TODO",
  "keyword": "Then "
});
formatter.match({
  "location": "MarkMassageAsTodoStepDefs.that_message_should_be_marked_with_star_as_TODO()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_open_EDP.feature");
formatter.feature({
  "name": "open EDP",
  "description": "  as a Manager/Officer user should be able to open EDP (Employee Detailed Page)\n  User Story: 176\n  Test Case: 202",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee Profile verification",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Anton"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "Then "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_see_OC.feature");
formatter.feature({
  "name": "able to see OC in EDP",
  "description": "  User Story: 177\n  Test case: 205",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify OC is displayed in EDP",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Anton2"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see Organization Chart",
  "keyword": "Then "
});
formatter.match({
  "location": "Ability_to_see_OC.user_should_be_able_to_see_Organization_Chart()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_select_related_employees.feature");
formatter.feature({
  "name": "Organization chart",
  "description": "  User Story  : 178\n  Test case   : 209",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify selection of the related employees",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@ValentynTests"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to see Employee Detailed Page (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on any employee in OC (Organization Chart)",
  "keyword": "And "
});
formatter.match({
  "location": "SelectRelatedEmployeeFromOCStepDefs.user_clicks_on_any_employee_in_OC_Organization_Chart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see EDP of selected related employee",
  "keyword": "Then "
});
formatter.match({
  "location": "SelectRelatedEmployeeFromOCStepDefs.user_should_be_able_to_see_EDP_of_selected_related_employee()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/able_to_send_message.feature");
formatter.feature({
  "name": "ability to send message in EDP",
  "description": "  as a Manager/Officer user should be able to send a message under employee profile\n  User story: 179\n  Test case: 194",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify ability to send a message in EDP",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Anton3"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Send message",
  "keyword": "And "
});
formatter.match({
  "location": "Send_message_in_EDP.user_clicks_on_Send_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters any text",
  "keyword": "And "
});
formatter.match({
  "location": "Send_message_in_EDP.user_enters_any_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Send button",
  "keyword": "And "
});
formatter.match({
  "location": "Send_message_in_EDP.user_clicks_on_Send_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see entered text as the most recent message",
  "keyword": "Then "
});
formatter.match({
  "location": "Send_message_in_EDP.user_should_see_entered_text_as_the_most_recent_message()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/add_employee_to_dashboard.feature");
formatter.feature({
  "name": "Add employees to dashboard",
  "description": "  User Story : 188\n  Test case  : 196\n  as a Manager OR Officer user should be able to add Employees module to Dashboard, name it by any name and have it present in Dashboard",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Employee Module add Employees module to Dashboard",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pumbik"
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
  "status": "passed"
});
formatter.step({
  "name": "user click on search box",
  "keyword": "And "
});
formatter.match({
  "location": "Add_employee.user_click_on_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on favorite box",
  "keyword": "And "
});
formatter.match({
  "location": "Add_employee.user_click_on_favorite_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks add to dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "Add_employee.user_clicks_add_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on employee box",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_employee.user_clicks_on_employee_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter employee to dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "Add_employee.user_enter_employee_to_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks to dashboard tab",
  "keyword": "And "
});
formatter.match({
  "location": "Add_employee.user_clicks_to_dashboard_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see name on employee on dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_employee.user_should_see_name_on_employee_on_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/create_timesheet.feature");
formatter.feature({
  "name": "Timesheet",
  "description": "  User Story  : 184\n  Test case   : 210\n  User should be able to create and delete employee\u0027s timesheet",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Slava"
    }
  ]
});
formatter.scenario({
  "name": "creating of Timesheet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Slava"
    },
    {
      "name": "@slava1"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Timesheets module in the right top corner of the Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Timesheets_module_in_the_right_top_corner_of_the_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Create button in the left top corner of the Timesheets page",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Create_button_in_the_left_top_corner_of_the_Timesheets_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Employee field to choose Employee name in the dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Employee_field_to_choose_Employee_name_in_the_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Employee\u0027s name to select",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Employee_s_name_to_select()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters text in the Description field",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_enters_text_in_the_Description_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Project field to choose a project in the dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Project_field_to_choose_a_project_in_the_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Project to select",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Project_to_select()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Task field",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Task_field_to_choose_a_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User chooses a Task",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_chooses_a_task()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Time Hours field",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Time_Hours_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters amount of hours",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_enters_amount_of_hours()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Save button in the left top corner of the Timesheets page",
  "keyword": "Then "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Save_button_in_the_left_top_corner_of_the_Timesheets_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/delete_timesheet.feature");
formatter.feature({
  "name": "Timesheet",
  "description": "  User Story  : 251\n  Test case   : 252\n  User should be able to delete employee\u0027s timesheet",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "deleting of Timesheet",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@slava2"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Timesheets module in the right top corner of the Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Create_timesheet_Step_Defs.user_clicks_on_the_Timesheets_module_in_the_right_top_corner_of_the_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on one of the options to choose timesheet",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_timesheet_Step_Defs.user_clicks_on_one_of_the_options_to_choose_timesheet()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//tr[1]//td[1]//div[1]//input[1]\"}\n  (Session info: chrome\u003d80.0.3987.122)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027KURMANZHANs-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cc1:2d3c:efc:de27%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.122, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: /var/folders/c3/4z_jbhzx0tg...}, goog:chromeOptions: {debuggerAddress: localhost:56387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 10684506a843b49cc6baa2285f39c1c2\n*** Element info: {Using\u003dxpath, value\u003d//tr[1]//td[1]//div[1]//input[1]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy15.click(Unknown Source)\n\tat step_definitions.briteERPEmployeeModule.Delete_timesheet_Step_Defs.user_clicks_on_one_of_the_options_to_choose_timesheet(Delete_timesheet_Step_Defs.java:13)\n\tat ✽.User clicks on one of the options to choose timesheet(src/test/resources/features/delete_timesheet.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks on the Action button to choose an action",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_timesheet_Step_Defs.user_clicks_on_the_Action_button_to_choose_an_action()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on the Delete option",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_timesheet_Step_Defs.user_clicks_on_the_Delete_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks on the Ok button",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_timesheet_Step_Defs.user_clicks_on_the_Ok_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("src/test/resources/features/follow_unfollow_any_employee.feature");
formatter.feature({
  "name": "Follow unfollow",
  "description": "  tc :207",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Follow unfollow functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@t"
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
  "status": "passed"
});
formatter.step({
  "name": "User is able to see employees",
  "keyword": "And "
});
formatter.match({
  "location": "Follow_unfollow_anyemploye.user_is_able_to_see_employees()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is able to locate following or follow button",
  "keyword": "And "
});
formatter.match({
  "location": "Follow_unfollow_anyemploye.user_is_able_to_locate_following_or_follow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the follow or unfollow button",
  "keyword": "And "
});
formatter.match({
  "location": "Follow_unfollow_anyemploye.user_clicks_on_the_follow_or_unfollow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can see that the text on follow button changed to following",
  "keyword": "Then "
});
formatter.match({
  "location": "Follow_unfollow_anyemploye.user_can_see_that_the_text_on_follow_button_changed_to_following()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/list_and_grid_employees.feature");
formatter.feature({
  "name": "able to see employee list and grid",
  "description": "  TEstCase: PROQ 228 - PROQ 174 USER STORY\n  Employee Module- View List and Grid of Employees",
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
formatter.scenario({
  "name": "Employee list button click functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@listE"
    }
  ]
});
formatter.step({
  "name": "User clicks on the list option on the right corner",
  "keyword": "When "
});
formatter.match({
  "location": "List_and_grid_Step_defs.user_clicks_on_the_list_option_on_the_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the list of employees displayed on a new page",
  "keyword": "Then "
});
formatter.match({
  "location": "List_and_grid_Step_defs.the_list_of_employees_displayed_on_a_new_page()"
});
formatter.result({
  "status": "passed"
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
formatter.scenario({
  "name": "Employee grid button click functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@listB"
    }
  ]
});
formatter.step({
  "name": "User clicks on the grid on the right corner",
  "keyword": "When "
});
formatter.match({
  "location": "List_and_grid_Step_defs.user_clicks_on_the_grid_on_the_right_corner()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the grid is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "List_and_grid_Step_defs.the_grid_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/log_note_message.feature");
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on log note button",
  "keyword": "And "
});
formatter.match({
  "location": "Log_note_message_step_Defs.user_clicks_on_log_note_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters a log note text",
  "keyword": "And "
});
formatter.match({
  "location": "Log_note_message_step_Defs.user_enters_a_log_note_text()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see sent log note as most recent note",
  "keyword": "Then "
});
formatter.match({
  "location": "Log_note_message_step_Defs.user_should_be_able_to_see_sent_log_note_as_most_recent_note()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Something texted]\u003e but was:\u003c[This is Cucumber-JUnit message]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat step_definitions.briteERPEmployeeModule.Log_note_message_step_Defs.user_should_be_able_to_see_sent_log_note_as_most_recent_note(Log_note_message_step_Defs.java:34)\n\tat ✽.User should be able to see sent log note as most recent note(src/test/resources/features/log_note_message.feature:12)\n",
  "status": "failed"
});
formatter.uri("src/test/resources/features/verification_details_displayed_in_EDP.feature");
formatter.feature({
  "name": "verify all details are displayed in EDP",
  "description": "  as a Manager/Officer user should be able to see Contact Info and Position details in EDP\n  User story: 246\n  Test case: 247",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verification of EDP details displayed",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Anton4"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "When "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see all details of EDP",
  "keyword": "Then "
});
formatter.match({
  "location": "Verify_details_displayed_in_EDP.user_should_see_all_details_of_EDP()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/features/verify_empty_task_on_Internal_GAP_Analysis.feature");
formatter.feature({
  "name": "verify empty task on Internal GAP-Analysis",
  "description": "  User Story  : 185\n  Test case   : 204",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify empty task on Internal GAP Analysis",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@bo"
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
  "status": "passed"
});
formatter.step({
  "name": "User clicks on an Employee profile",
  "keyword": "And "
});
formatter.match({
  "location": "Download_attachment_file_btn_Step_Defs.user_clicks_on_an_Employee_profile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on timesheet button",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_click_on_timesheet_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User able to see timesheet page",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_able_to_see_timesheet_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User create a new timesheet",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_create_a_new_timesheet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add specific employee name (Antoine Langlais)",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_add_specific_employee_name_Antoine_Langlais()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add description (test)",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_add_description_test()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add name of project (Internal - GAP Analysis)",
  "keyword": "And "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.user_add_name_of_project_Internal_GAP_Analysis()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the project has no task",
  "keyword": "Then "
});
formatter.match({
  "location": "Verify_empty_task_Internal_GAP_Analysis_Step_Defs.verify_the_project_has_no_task()"
});
formatter.result({
  "status": "passed"
});
});