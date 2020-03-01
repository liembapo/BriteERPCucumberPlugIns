package step_definitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.EmployeeTabPage;
import utilities.Reusable;

public class Add_employee_Step_Defs {
    EmployeeTabPage employeeTabPage =new EmployeeTabPage();

    @Given("user click on search box")
    public void user_click_on_search_box() {
        Reusable.waitForVisibility(employeeTabPage.search,10);
        employeeTabPage.search.click();

    }

    @Given("user click on favorite box")
    public void user_click_on_favorite_box() {
        Reusable.waitForVisibility(employeeTabPage.favoriteBox,10);
        employeeTabPage.favoriteBox.click();

    }

    @Given("user clicks add to dashboard")
    public void user_clicks_add_to_dashboard() {
        Reusable.waitForVisibility(employeeTabPage.addDashboard,10);
        employeeTabPage.addDashboard.click();





    }

    @Then("user clicks on employee box")
    public void user_clicks_on_employee_box() {
        Reusable.waitForVisibility(employeeTabPage.employeeBox,10);
        employeeTabPage.employeeBox.click();
        employeeTabPage.employeeBox.clear();
        Reusable.pause(2);
        String nameForEmployeeTab= "pumbik";
        employeeTabPage.employeeBox.sendKeys(nameForEmployeeTab+ Keys.ENTER);

    }

    @Then("user enter employee to dashboard")
    public void user_enter_employee_to_dashboard() {
        Reusable.waitForVisibility(employeeTabPage.addEmployee,10);
        employeeTabPage.addEmployee.click();

    }

    @Then("user clicks to dashboard tab")
    public void user_clicks_to_dashboard_tab() {
        Reusable.waitForVisibility(employeeTabPage.dashboardTab,10);
        employeeTabPage.dashboardTab.click();


    }

    @Then("user should see name on employee on dashboard")
    public void user_should_see_name_on_employee_on_dashboard() {
        String nameForEmployeeTab= "pumbik";
        Assert.assertEquals(employeeTabPage.nameOfEmployeeModuleOnDashboard.getText(), nameForEmployeeTab);

    }


}
