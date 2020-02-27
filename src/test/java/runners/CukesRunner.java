package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"pretty", "json:target/cucumber-reports/Cucumber.json",
                "junit:target/cucumber-reports/Cucumber.xml",
                "html:target/cucumber-reports"},
        features = "src/test/resources/features",
        glue = "step_definitions",
        dryRun = false,
        tags = "@ValentynTests"

//        tags = "@checkSelectOption"

)
public class CukesRunner {
}
