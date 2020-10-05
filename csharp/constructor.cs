using System;

public class Car
{
	public string color;
	public int year;
	static string model = "Mustang";
	
	public Car()
	{
		color = "Red";
		year = 1990;
	}
	
	public void AboutCar()
	{
		Console.WriteLine($"Color: {color}, Year: {year}");
	}
	
	public static void AboutStaticCar()
	{
		Console.WriteLine($"VROOM {Car.model}");
	}
}
				
public class Program
{
	public void Main(string[] args)
	  {
		Car Ford = new Car();
		Console.WriteLine(Ford.color);
		Ford.AboutCar();
		Car.AboutStaticCar();
	  }
}

/*

1. Constructor name should match class name.
2. It cannot have return type(like void or int).
3. All classes have constructor by default. if you do not create a constructor 
	yourself, c# does it for you.
4. But you will not be able to set initial values of fields.
5. Constructors save time.
6. Code is much cleaner inside the main function(class program)

*/