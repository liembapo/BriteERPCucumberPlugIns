package step_definitions.briteERPEmployeeModule;

import cucumber.api.java.en.And;
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

    @And("user clicks on an Employee profile")
    public void user_clicks_on_an_Employee_profile() {
        employeeTabPage.firstEmployeeProfileKanban.click();
    }

    @And("User is able to see Employee Detailed Page \\(EDP)")
    public void user_is_able_to_see_Employee_Detailed_Page_EDP() {
       String EDPtitle = Driver.getDriver().getTitle();
       String expectedEDPtitle = "Antoine Langlais - Odoo";
       Assert.assertEquals("User is not on specific employee page",expectedEDPtitle,EDPtitle);

    }

    @And("User click on Attachment on EDP header \\(dropdown available if it contains multiple files)")
    public void user_click_on_Attachment_on_EDP_header_dropdown_available_if_it_contains_multiple_files() {
        employeeDetailPage.attachmentButton.click();
    }

    @And("User able to see all displayed files")
    public void user_able_to_see_all_displayed_files() {
        Assert.assertTrue("\"There is no file attached\"",employeeDetailPage.attachmentButton.isDisplayed());

    }

    @And("User click on the latest uploaded file")
    public void user_click_on_the_latest_uploaded_file() {

        Reusable.waitForVisibility(employeeDetailPage.latestUploadedFile,10);

        employeeDetailPage.latestUploadedFile.click();
        Reusable.pause(2);
    }

    @Then("User should be able to download the file")
    public void user_should_be_able_to_download_the_file() {
        employeeDetailPage.attachmentButton.click();
//        Reusable.waitForVisibility(employeeDetailPage.latestUploadedFile,10);
        String latestFile = employeeDetailPage.latestUploadedFile.getText();

        Reusable.pause(5);
        Assert.assertTrue(Reusable.isFileDownloaded("C:\\Users\\Bobby\\Downloads",latestFile));
        //    Assert.assertTrue(Reusable.isFileDownloaded("/Users/AntonSemenov/Downloads",latestFile));
    }

    @Then("User should not see the file button attachment")
    public void user_should_not_see_the_file_button_attachment() {
        employeeDetailPage.sideBarEmployeeButton.click();
        employeeTabPage.secondEmployeePrifileKanban.click();

    Assert.assertFalse("The button is displayed",employeeDetailPage.attachmentButton.isDisplayed());
    }
}
