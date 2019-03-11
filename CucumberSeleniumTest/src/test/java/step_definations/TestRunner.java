package step_definations;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(

		features = "src/test/resources/features/MercuryFlight.feature",		
		//features = "src/test/resources/features/MercuryUserRegistration.feature",
		//features = "src/test/resources/features/MercuryRegistartion_DataDriven.feature",		
		plugin = {"pretty", "html:target/cucumber-html-report"},
		//format={"json:target/Destination/cucumber.json"})
		monochrome = true,
		//tags = {"@SMokeTest,@test1"},
		glue={"step_definations"}
				//glue={}
		)
public class TestRunner{
	
}

//@CucumberOptions( monochrom