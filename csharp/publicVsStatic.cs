using System;
				
public class Car 
{
  string color;                 // field
  int maxSpeed;                 // field
  public void fullThrottle()    // method
  {
    Console.WriteLine("The car is going as fast as it can!"); 
  }
}

public class Person
{
	public string name;
	public int age;
	public void AboutPerson()
	{
		Console.WriteLine($"Person name is {name} and age is {age}");
	}
	
	public static void IamPublicStatic()
	{
		Console.WriteLine("I am public static");
	}
	
	static void IamPrivate()
	{
		Console.WriteLine("I am static");
	}
	
	public void IamCheeky()
	{
		IamPrivate();
	}
}

public class Program
{
	public void Main(string[] args)
	  {
		Car myObj = new Car();
		myObj.fullThrottle();  // Call the method
		
		Person personObj = new Person();
		personObj.name = "Sabina";
		personObj.age = 32;
		personObj.AboutPerson();
		Person.IamPublicStatic();
		personObj.IamCheeky();
	  }
}


/*

public static void (method's name):-

	The method is not accessed by objects/instances of the class but coz of the public keyword used we can do  
	ClassName.MethodName and access it in another class.

static void (methodName):-

	Becoz of static method's protection level, it cannot be accessed in another class.