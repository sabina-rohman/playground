using System;


// When an instance is made from the Car or Aygo class but they belong to Vehilcle(base class)
//eg: Vehicle ford = new Car() it belongs to Vehicle class now. It can access all feilds and 
//methods of vehicle class but not from Car class.


public class Vehicle //base class(parent)
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
	public void CarHonk()
	{
		Console.WriteLine("From Car:Beep");
	}
}

public class Aygo : Car
{
	public void AygoHonk()
	{
		Console.WriteLine("From Aygo: Honk");
	}
}

public class Programe
{
	public void Main(string[] args)
	{
		Car ford = new Car();
		Console.WriteLine(ford.brand + " " + ford.model);
		
		//call the honk method
		ford.honk();
		ford.CarHonk();
		
		Aygo aygo = new Aygo();
		aygo.AygoHonk();
		aygo.CarHonk();
		aygo.honk();
	}
}