import  java.util.Date
// - The actual type class
// - Type Class Instance
// - Interface Using implicit parameter
// - Interface using enrichment and implicits

trait Htmlwriter[A] {
  def convertToHtml(something: A): String
}

final case class Person(name: String, age:Int)

object PersonTypeClassInstance {
  implicit val personInstance = new Htmlwriter[Person] {
    def convertToHtml(something: Person): String = {
      s"<h1> The name of the person is ${something.name} and age is ${something.age}</h1>"
    }
  }
}
import  PersonTypeClassInstance._

object DateTypeClassInstance {
  implicit val dateInstance = new Htmlwriter[Date] {
    def convertToHtml(something: Date): String = {
      s"<h1> Today is ${something.toString}</h1>"
    }
  }
}
import DateTypeClassInstance._

object Main {
  def main(args: Array[String]): Unit = {
    def htmlWriterInterface[A](aType: A)(implicit writer: Htmlwriter[A]): String = {
      writer.convertToHtml(aType)
    }
    val interface = htmlWriterInterface[Date](new Date)
    println(interface)
  }
}
