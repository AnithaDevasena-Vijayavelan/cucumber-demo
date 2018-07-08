//package StepDefinitions;
//
//import java.util.List;
//import java.util.Map;
//import java.util.concurrent.TimeUnit;
//
//import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
//import org.openqa.selenium.Keys;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.WebElement;
//import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;
//
//import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;
//import junit.framework.Assert;
//
//public class DealsMapStepDefinitions {
//	WebDriver driver;
//	
//	
//	@Given ("^User is already in the login page$")
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
//@Then("^Enter the Username and Password$")
//public void enter_the_Username_and_Password(DataTable Credentials) {
//	for(Map<String, String> Data : Credentials.asMaps(String.class, String.class))
//	{
//	driver.findElement(By.name("username")).sendKeys(Data.get("Username"));
//	driver.findElement(By.name("password")).sendKeys(Data.get("Password"));
//	}
//	}
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
//
//@Then("^Select New Deal in Deal menu$")
//public void select_New_Deal_in_Deal_menu() {
//	driver.switchTo().frame("mainpanel");
//	driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
//	driver.manage().window().maximize();
//	Actions action = new Actions(driver);
//	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
//	driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
// 
//}
//
//@Then("^user enters contact details Title and Company and Probability and Commission$")
//public void user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DataTable Dealdata) {
//	for(Map<String, String> Deals : Dealdata.asMaps(String.class, String.class))
//	{
//	driver.findElement(By.cssSelector("#title")).sendKeys(Deals.get("Title"));
//	driver.findElement(By.xpath("//input[@name = 'client_lookup']")).sendKeys(Keys.HOME,Keys.chord(Keys.SHIFT,Keys.END), Deals.get("Company"));
//	driver.findElement(By.cssSelector("#probability")).sendKeys(Deals.get("Probability"));
//	driver.findElement(By.cssSelector("#commission")).sendKeys(Deals.get("Commission"));
//	 driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
//	
//	 
//	 Actions action = new Actions(driver);
//		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
//		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
//	}
//}
//@Then("^Close the browser$")
//public void close_the_browser() {
//	 driver.close();
//	 driver.quit();
//}
//}