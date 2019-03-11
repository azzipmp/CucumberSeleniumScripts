package step_definations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.Test;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;

public class MercuryFlight {

	 WebDriver driver; 
	 String url = "http://newtours.demoaut.com/";
	
	@Given("^Navigate to the Mercury flight application$")
//	@BeforeTest
	 public void navigatetotheapplication() throws InterruptedException, Throwable
		{
			System.out.println("navigatetoregisterpage method");
	    	System.setProperty("webdriver.chrome.driver", "C:\\chromedriver\\chromedriver.exe");
	 	    driver = new ChromeDriver();
	      	driver.manage().window().maximize();
	    	driver.get(url);	
			Thread.sleep(2000);
		}
	
	
//	@Test(prioirty=0)
	@When("^Click on Register Link$")
	public void clickregisterlink()
	{
		driver.findElement(By.linkText("REGISTER")).click();
	}
	
//	@Test(prioirty=1)
	 @Then("^Register Page displayed$")
		public void registerpagedisplay() throws InterruptedException, Throwable
		{
		
		String ExpectedValue = "Register: Mercury Tours";
		String ActualValue= driver.getTitle();
		System.out.println( "expected"+ExpectedValue);
		System.out.println( "actual"+ActualValue);
		Assert.assertEquals(ExpectedValue, ActualValue);


		}
	
	 @And("^Enter Valid details and submit$")
	 public void enterdetails()
	 {
		 
	 }
	 
	 
	 @Then("^User should create$")
	 public void checkusercreation()
	 {
		 
	 }
	 
//	@afterTest
	@And("^Close the appliaction$")
	public void closeapp()
	{
	driver.close();
	driver.quit();
	}
}
