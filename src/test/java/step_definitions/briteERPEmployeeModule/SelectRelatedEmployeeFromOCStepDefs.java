package step_definitions.briteERPEmployeeModule;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.EmployeeDetailPage;
import utilities.Reusable;

public class SelectRelatedEmployeeFromOCStepDefs {

    EmployeeDetailPage employeeDetailPage = new EmployeeDetailPage();
    String firstRelatedEmployeeNameText;

    @Given("user clicks on any employee in OC \\(Organization Chart)")
    public void user_clicks_on_any_employee_in_OC_Organization_Chart() {
        firstRelatedEmployeeNameText = employeeDetailPage.firstRelatedEmployeeName.getText().trim();
        employeeDetailPage.firstRelatedEmployee.click();
        Reusable.pause(3);
    }



    @Then("user should be able to see EDP of selected related employee")
    public void user_should_be_able_to_see_EDP_of_selected_related_employee() {
        String actualRelatedEmployeeHeaderName = employeeDetailPage.employeeNameInHeader.getText().trim();
        Assert.assertEquals(firstRelatedEmployeeNameText, actualRelatedEmployeeHeaderName);
    }

}
