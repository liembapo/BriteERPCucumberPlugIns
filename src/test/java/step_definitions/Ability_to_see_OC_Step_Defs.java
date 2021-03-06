package step_definitions;

import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.EmployeeDetailPage;
import pages.EmployeeTabPage;
import utilities.Reusable;

public class Ability_to_see_OC_Step_Defs {

    EmployeeTabPage employeeTabPage =new EmployeeTabPage();
    EmployeeDetailPage employeeDetailPage = new EmployeeDetailPage();

    @Then("User should be able to see Organization Chart")
    public void user_should_be_able_to_see_Organization_Chart() {
        Reusable.pause(1);
        Assert.assertTrue("Organization Chart is NOT displayed",employeeDetailPage.organizationChart.isDisplayed());
    }
}
