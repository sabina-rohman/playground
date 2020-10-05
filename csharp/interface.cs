using System;

public interface IVehicle
{
	//in interface everything is public;
	//can't have private 
	string Name{get; set;}
}

public class Car : IVehicle
{
	private string name;
	public string Name
	{
		get{return name; }
		set{name = value; }
	}
}

public class Truck : IVehicle
{
	private string name;
	public string Name
	{
		get{return name; }
		set{name = value; }
	}
}

public class Program
{
	public void Main(string[] args)
	{
		Car volvo = new Car() {Name="volvo"};
		Truck tata =  new Truck() {Name="tata"};
		Print(volvo);
		Print(tata);
	}
	
	public void Print(IVehicle vehicle)
	{
		Console.WriteLine(vehicle.Name);
	}
	
}