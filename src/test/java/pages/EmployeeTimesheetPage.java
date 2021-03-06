package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EmployeeTimesheetPage {
    public EmployeeTimesheetPage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//div[@class='oe_kanban_global_click o_kanban_record'][5]")
    public WebElement employeeProfile;
    @FindBy(xpath = "//tr[1]//td[1]//div[1]//input[1]")
    public WebElement btnOptions;
    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[2]")
    public WebElement btnAction;
    @FindBy(xpath = "//a[contains(text(),'Delete')]")
    public WebElement btnDelete;
    @FindBy(xpath = "//button[@class='btn btn-sm btn-primary']")
    public WebElement btnOk;
    @FindBy(xpath = "//button[@class='btn btn-sm oe_stat_button']")
    public WebElement btnTimesheets;
    @FindBy(xpath = "//button[@class = 'btn btn-primary btn-sm o_list_button_add']")
    public WebElement btnCreate;
    @FindBy(xpath = "//div[@class='table-responsive']")
    public WebElement calendarDate;
    @FindBy(xpath = "//div[@name = 'employee_id']")
    public WebElement btnEmployee;
    @FindBy(xpath = "//html[1]/body[1]/ul[1]")
    public WebElement selectEmployeeName;
    @FindBy(xpath = "//input[@name='name']")
    public WebElement descriptionField;
    @FindBy(xpath = "//div[@name='project_id']")
    public WebElement projectField;
    @FindBy(id = "ui-id-14")
    public WebElement projectTab;
    @FindBy(xpath = "//div[@name='task_id']//input[@class='o_input ui-autocomplete-input']")
    public WebElement taskField;
    @FindBy(xpath = "//html[1]/body[1]/ul[3]/li[1]/a[1]")
    public WebElement taskTab;
    @FindBy(xpath = "//input[@name='unit_amount']")
    public WebElement timeField;
    @FindBy(xpath = "//button[@class='btn btn-primary btn-sm o_list_button_save']")
    public WebElement saveButton;
    @FindBy(xpath = "//div[@class='oe_kanban_global_click o_kanban_record'][1]")
    public WebElement selectFirstEmployee;
    @FindBy(xpath = "//div[@class='oe_kanban_global_click o_kanban_record'][5]")
    public WebElement selectEmployeeEmptAttachment;

}
