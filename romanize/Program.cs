using System;
using System.Collections.Generic;

namespace romanize
{
    class Program
    {

				public static string SPQR(int num)
				{
					int hundreds = num/100;
					int fifties = (num%100)/50;
					int tens = ((num%100)%50)/10;
					int fives = (((num%100)%50)%10)/5;
					int ones = (((num%100)%50)%10)%5;
					List<string> numerals = new List<string>();
					for (int i = 0; i < tens; i++)
						numerals.Add("X");
					if (fives > 0)
					{
						if (ones == 4)
						{
							numerals.Add("I");
							numerals.Add("X");
						}
						else
						{
							numerals.Add("V");
							for (int i = 0; i < ones; i++)
								numerals.Add("I");
						}
					}
					else
					{
						if (ones == 4)
						{
							numerals.Add("I");
							numerals.Add("V");
						}
						else
						{
							for (int i = 0; i < ones; i++)
							{
								numerals.Add("I");
							}
						}
					}
					string result = numerals.ToString();
					return result;
				}
        static void Main(string[] args)
        {
					System.Console.WriteLine(SPQR(10));
        }
    }
}
