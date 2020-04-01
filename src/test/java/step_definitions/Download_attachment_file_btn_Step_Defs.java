package step_definitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import pages.EmployeeDetailPage;
import pages.EmployeeTabPage;
import utilities.Driver;
import utilities.Reusable;

public class Download_attachment_file_btn_Step_Defs {

    EmployeeTabPage employeeTabPage =new EmployeeTabPage();
    EmployeeDetailPage employeeDetailPage = new EmployeeDetailPage();

    @Given("User is on employee module page")
    public void user_is_on_employee_module_page() {

        Reusable.login_nav_to_employee_tab();
    }

    @Given("User clicks on an Employee profile")
    public void user_clicks_on_an_Employee_profile() {
        Reusable.waitForVisibility(employeeTabPage.firstEmployeeProfileKanban,10);
       employeeTabPage.firstEmployeeProfileKanban.click();

    }

    @Given("User is able to see Employee Detailed Page \\(Antoine Langlais)")
    public void user_is_able_to_see_Employee_Detailed_Page_Antoine_Langlais() {
        Reusable.pause(2);
        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = "Antoine Langlais - Odoo";
        Assert.assertEquals("user is not on Antoine Langlais page",actualTitle,expectedTitle);
    }

    @Given("User click on Attachment on EDP header \\(dropdown available if it contains multiple files)")
    public void user_click_on_Attachment_on_EDP_header_dropdown_available_if_it_contains_multiple_files() {
        Reusable.waitForVisibility(employeeDetailPage.attachmentButton,10);
       employeeDetailPage.attachmentButton.click();
    }

    @Given("User able to see all displayed files")
    public void user_able_to_see_all_displayed_files() {
    Reusable.waitForVisibility(employeeDetailPage.latestUploadedFile,10);

    Assert.assertTrue(employeeDetailPage.latestUploadedFile.isDisplayed());

    }

    @Given("User click on the latest uploaded file")
    public void user_click_on_the_latest_uploaded_file() {
        Reusable.waitForVisibility(employeeDetailPage.latestUploadedFile,10);

        employeeDetailPage.latestUploadedFile.click();
        Reusable.pause(3);

    }

    @Then("User should be able to download the file")
    public void user_should_be_able_to_download_the_file() {
        Reusable.waitForVisibility(employeeDetailPage.attachmentButton,10);
        employeeDetailPage.attachmentButton.click();
        Reusable.waitForVisibility(employeeDetailPage.latestUploadedFile,10);
        String latestFile = employeeDetailPage.latestUploadedFile.getText();

        Assert.assertTrue(Reusable.isFileDownloaded("C:\\Users\\Bobby\\Downloads",latestFile));

    }
    @Given("User clicks on an Employee profile \\(Ashley Presley)")
    public void user_clicks_on_an_Employee_profile_Ashley_Presley() {
        Reusable.waitForVisibility(employeeTabPage.secondEmployeeProfileKanban,10);
        employeeTabPage.secondEmployeeProfileKanban.click();
    }

    @Given("User is able to see Employee Detailed Page \\(Ashley Presley)")
    public void user_is_able_to_see_Employee_Detailed_Page_Ashley_Presley() {
        Reusable.pause(2);
        String actualTitle = Driver.getDriver().getTitle();
        String expectedTitle = "Ashley Presley - Odoo";
        Assert.assertEquals("user is not on Ashley Presley page",actualTitle,expectedTitle);
    }

    @Then("User should not see the file button attachment")
    public void user_should_not_see_the_file_button_attachment() {

      Assert.assertFalse(employeeDetailPage.attachmentButton.isDisplayed());

    }


}
