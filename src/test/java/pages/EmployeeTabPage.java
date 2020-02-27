package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class EmployeeTabPage {
    public EmployeeTabPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(className = "o_searchview_input")
    public WebElement searchBox;

    @FindBy(xpath = "(//span[@class = 'oe_menu_text'])[17]")
    public WebElement sideBarEmployeeButton;

    @FindBy(xpath = "(//*[contains(text(),'Badges')])[2]")
    public WebElement getSideBarBadgesButton;

    @FindBy (xpath = "//div[@class = 'oe_kanban_global_click o_kanban_record'][1]")
    public WebElement firstEmployeeProfileKanban;

    @FindBy (xpath = "//div[@class = 'oe_kanban_global_click o_kanban_record'][2]")
    public  WebElement secondEmployeeProfileKanban;

    @FindBy(xpath = "//button[@class='btn btn-icon fa fa-lg fa-th-large o_cp_switch_kanban active']")
    public WebElement gridButton;

    @FindBy(xpath = "//button[@class='btn btn-icon fa fa-lg fa-list-ul o_cp_switch_list']")
    public WebElement listButton;

    @FindBy(xpath = "//span[@class='oe_menu_text'][contains(text(),'Badges')]")
    public WebElement badgesTab;

//my line
    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[1]/div/span")
    public WebElement search;
    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/button")
    public WebElement favoriteBox;
    @FindBy(linkText = "Add to my Dashboard")
    public WebElement addDashboard;
    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/ul/li[9]/input")
    public WebElement employeeBox;
    @FindBy(xpath = "/html/body/div[1]/div[2]/div[1]/div[3]/div[1]/div[3]/ul/li[10]/button")
    public WebElement addEmployee;

    // Dashboard tab locator
    @FindBy (xpath = "(//span[@class='oe_menu_text'])[12]")
    public WebElement dashboardTab;

    // name of added Employee module
    @FindBy (xpath = "(//span[@class='oe_header_txt'])[1]")
    public WebElement nameOfEmployeeModuleOnDashboard;
}
