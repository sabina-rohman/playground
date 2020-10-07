using System;
				
public class Car
{
	private string name; //field
	public string Name //property
	{
		get {return name; }
		set {name = value; }
	}
}

public class Program
{
	public void Main(string[] args)
	{
		Car toyota = new Car();
		toyota.Name = "Aygo";
		Console.WriteLine(toyota.Name);
	}
}