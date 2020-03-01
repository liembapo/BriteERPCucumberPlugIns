package step_definitions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import pages.EmployeeTimesheetPage;
import utilities.Reusable;

public class Delete_timesheet_Step_Defs {
    EmployeeTimesheetPage employeeTimesheetPage = new EmployeeTimesheetPage();

    @And("User clicks on one of the options to choose timesheet")
    public void user_clicks_on_one_of_the_options_to_choose_timesheet() {
        Reusable.waitForVisibility(employeeTimesheetPage.btnOptions,10);
        employeeTimesheetPage.btnOptions.click();
    }
    @And("User clicks on the Action button to choose an action")
    public void user_clicks_on_the_Action_button_to_choose_an_action() {
        Reusable.waitForVisibility(employeeTimesheetPage.btnAction,10);
        employeeTimesheetPage.btnAction.click();
    }
    @And("User clicks on the Delete option")
    public void user_clicks_on_the_Delete_option() {
        Reusable.waitForVisibility(employeeTimesheetPage.btnDelete,10);
        employeeTimesheetPage.btnDelete.click();
    }
    @Then("User clicks on the Ok button")
    public void user_clicks_on_the_Ok_button() {
        Reusable.waitForVisibility(employeeTimesheetPage.btnOk,10);
        employeeTimesheetPage.btnOk.click();
    }
}
