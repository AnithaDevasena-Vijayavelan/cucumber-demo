//package StepDefinitions;
//
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class LoginPageStepDefinitions {
//	WebDriver driver;
//	
//	
//@Given ("^User is already in the login page$")
//	public void User_already_in_LoginPage() {
//	System.setProperty("webdriver.chrome.driver", "/Applications/Eclipse/xyz/chromedriver");	
//	driver = new ChromeDriver();
//	driver.get("https://www.freecrm.com/index.html");	
//	}
//
//@When ("^Title of the login page is Free CRM$")
//	public void Title_of_the_loginPage() {	
//	String title = driver.getTitle();
//	Assert.assertEquals("#1 Free CRM for Any Business: Online Customer Relationship Software", title);
//	}
//
///*@Then("^Enter the username and password$")
//public void enter_the_username_and_password() {
//	driver.findElement(By.name("username")).sendKeys("AnithaDevasena");
//	driver.findElement(By.name("password")).sendKeys("Anitha005");
//}*/
//
////Passing data from scenario steps
////regular expression for passing strings 
//// 1. \"([^\"]*)\"
//// 2. \"(.*)\" 
//@Then("^Enter the \"([^\"]*)\" and \"(.*)\"$")
//public void enter_the_username_and_password(String Username, String Password) {
//	driver.findElement(By.name("username")).sendKeys(Username);
//	driver.findElement(By.name("password")).sendKeys(Password);
//}
//
//
//@Then("^click the button login$")
//public void click_the_button_login(){
//	WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
//			 JavascriptExecutor js = (JavascriptExecutor)driver;
//			 js.executeScript("arguments[0].click();", loginBtn);
//}
//
//@Then("^User is on the Homepage$")
//public void user_is_on_the_Homepage() throws Throwable {
//	String homepageTitle = driver.getTitle();
//	Assert.assertEquals("CRMPRO", homepageTitle);
//	//driver.close();
//	//driver.quit();
//}
//
//
//@Then("^Select New contact in contact menu$")
//public void select_New_contact_in_contact_menu() {
//	driver.switchTo().frame("mainpanel");
//	driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//	driver.manage().window().maximize();
//	Actions action = new Actions(driver);
//	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
//	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//	driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();
//}
//
//@Then("^user enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\" and \"(.*)\"$")
//public void user_enters_contacts_details(String firstname, String lastname, String company, String Homeno, String Mobile){
//	 driver.findElement(By.cssSelector("#first_name")).sendKeys(firstname);
//	 driver.findElement(By.cssSelector("#surname")).sendKeys(lastname);
//	 driver.findElement(By.xpath("//input[@name = 'client_lookup']")).sendKeys(company);
//	 driver.findElement(By.cssSelector("#home_phone")).sendKeys(Homeno);
//	 driver.findElement(By.cssSelector("#mobile")).sendKeys(Mobile);
//	 driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//	 
//	driver.close();
//	driver.quit();
//}
//
//}
