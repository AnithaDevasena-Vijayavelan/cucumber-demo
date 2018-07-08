/*package StepDefinitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HookDemoStepDefinition {

	@Before
	public void Setup() {
		System.out.println("Gobal setup");
		}
	
	@After
	public void Teardown(){
		System.out.println("Gobal Teardown");
		}
	
	@Before("@First")
	public void first_Setup() {
		System.out.println("Local First setup");
		}
	
	@After("@First")
	public void first_Teardown(){
		System.out.println("Local First Teardown");
		}
	
	@Before("@Second")
	public void Second_Setup() {
		System.out.println("Local Second setup");
		}
	
	@After("@Second")
	public void Second_Teardown(){
		System.out.println("Local Second Teardown");
		}
	
	@Before("@Third")
	public void Third_Setup() {
		System.out.println("Local Third setup");
		}
	
	@After("@Third")
	public void Third_Teardown(){
		System.out.println("Local Third Teardown");
		}
	
	@Given("^This is the first Step$")
	public void this_is_the_first_Step() {
	System.out.println("This is the first Step");
	}

	@When("^This is the second Step$")
	public void this_is_the_second_Step(){
		System.out.println("This is the second Step");
	}

	@Then("^This is the Third Step$")
	public void this_is_the_Third_Step() {
		System.out.println("This is the Third Step"); 
	}
}
*/