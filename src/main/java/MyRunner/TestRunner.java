package MyRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Applications/Eclipse/Amirtha/selenium/FreeCrmPortal/src/main/java/Features/DealHook.feature", //the path of the feature files
		glue={"StepDefinitions"}, //the path of the step definition files
		format= {"pretty","html:test-outout", "json: json_output/cucumber.json", "junit: junit_xml/cucumber.xml"},// generation of pretty output in console and generate html test report
		dryRun = false, // help to map all the scenario with the steps definition
		monochrome = true, // Help to change the output of the console into readable form
		strict = true //it will execute the testcase but fail the execution if there is any pending in the definition
		//tags = {"@Regression" , "@End2End" , "@Smoke"}
		)

public class TestRunner {

}
 