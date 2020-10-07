using System;


//sealed class is not inheritable.

sealed class Vehicle //base class(parent)
{
	public string brand = "Ford";
	public void honk()
	{
		Console.WriteLine("Tuut, Tuut");
	}
}

public class Car : Vehicle // derived class(child)
{
	public string model = "Mustang";
}

public class Programe
{
	public void Main(string[] args)
	{
		Car ford = new Car();
		Console.WriteLine(ford.brand + " " + ford.model);
		
		//call the honk method
		ford.honk();
	}
}