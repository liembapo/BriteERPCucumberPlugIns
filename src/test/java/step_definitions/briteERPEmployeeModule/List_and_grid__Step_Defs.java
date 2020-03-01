package step_definitions.briteERPEmployeeModule;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.EmployeeDetailPage;
import pages.EmployeeTabPage;
import utilities.Reusable;

public class List_and_grid__Step_Defs {
        EmployeeTabPage employeeTabPage = new EmployeeTabPage();
        EmployeeDetailPage employeeDetailPage = new EmployeeDetailPage();


    @When("User clicks on the list option on the right corner")
    public void user_clicks_on_the_list_option_on_the_right_corner() {
        employeeTabPage.listButton.click();
    }

    @Then("the list of employees displayed on a new page")
    public void the_list_of_employees_displayed_on_a_new_page() {
        Assert.assertTrue("List button is not clicked!",employeeDetailPage.tableContentList.isDisplayed());

    }

    @When("User clicks on the grid on the right corner")
    public void user_clicks_on_the_grid_on_the_right_corner() {
        employeeTabPage.gridButton.click();

    }

    @Then("the grid is displayed")
    public void the_grid_is_displayed() {
        Assert.assertTrue("Button  is not clickable",employeeTabPage.gridButton.isEnabled());
    }

}
