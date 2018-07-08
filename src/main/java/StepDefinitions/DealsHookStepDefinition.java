package StepDefinitions;

import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

public class DealsHookStepDefinition {
	WebDriver driver;
	
	@Before
	public void BrowserLanch_URL(){
		System.setProperty("webdriver.chrome.driver", "/Applications/Eclipse/xyz/driver/chromedriver");	
		driver = new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");	
		String title = driver.getTitle();
		Assert.assertEquals("Free CRM software in the cloud powers sales and customer service", title);
	}
	
	@After
	public void ClosingBrowser(){
		driver.close();
		driver.quit();
	}
	
	
	@Given("^User in Login Page then Enter Username and Password$")
	public void user_in_Login_Page_then_Enter_Username_and_Password(DataTable Credentials) {
		for(Map<String, String> Data : Credentials.asMaps(String.class, String.class)) {
			driver.findElement(By.name("username")).sendKeys(Data.get("Username"));
			driver.findElement(By.name("password")).sendKeys(Data.get("Password"));
		}
		
	}

	@Then("^click the button login And User is on the Homepage$")
	public void click_the_button_login_And_User_is_on_the_Homepage(){
		WebElement loginBtn = driver.findElement(By.xpath("//input[@type='submit']"));
		 JavascriptExecutor js = (JavascriptExecutor)driver;
		 js.executeScript("arguments[0].click();", loginBtn);
		//User is on the Homepage
		 String homepageTitle = driver.getTitle();
			Assert.assertEquals("CRMPRO", homepageTitle);
	}

	@Then("^Select New Deal in Deal menu$")
	public void select_New_Deal_in_Deal_menu(){
		driver.switchTo().frame("mainpanel");
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		Actions action = new Actions(driver);
		action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
	}

	@Then("^user enters contact details Title and Company and Probability and Commission$")
	public void user_enters_contact_details_Title_and_Company_and_Probability_and_Commission(DataTable Deals) {
	 for(Map<String, String> DelasData : Deals.asMaps(String.class, String.class)) {
		 driver.findElement(By.cssSelector("#title")).sendKeys(DelasData.get("Title"));
			driver.findElement(By.xpath("//input[@name = 'client_lookup']")).sendKeys(Keys.HOME,Keys.chord(Keys.SHIFT,Keys.END), DelasData.get("Company"));
			driver.findElement(By.cssSelector("#probability")).sendKeys(DelasData.get("Probability"));
			driver.findElement(By.cssSelector("#commission")).sendKeys(DelasData.get("Commission"));
			 driver.findElement(By.xpath("//input[@type='submit' and @value='Save']")).click();
			
			 
			 Actions action = new Actions(driver);
				action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
				driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
				driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click(); 
	 }
	}
	
	
}
