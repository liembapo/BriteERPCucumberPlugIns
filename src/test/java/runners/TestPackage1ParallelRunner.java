package runners;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/parallel-cucumber1.json",
                    "html:target/cucumber-reports"} ,
        features = "src/test/resources/features/module1_features",
        glue = "step_definitions"
)

public class TestPackage1ParallelRunner {
}
