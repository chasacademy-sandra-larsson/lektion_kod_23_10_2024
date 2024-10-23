// 9. Skapa ett objekt "university" med nästlade objekt och arrayer.
// Det ska ha egenskaperna name, faculties (en array av objekt), och en egenskap students (också en array av objekt).

const university = {
    name: "Tekniska Universitetet",
    faculties: [
      { name: "Datavetenskap", head: "Dr. Smith" },
      { name: "Matematik", head: "Dr. Jones" }
    ],
    students: [
      { name: "Alice", faculty: "Datavetenskap" },
      { name: "Bob", faculty: "Matematik" }
    ]
  };

// Uppgift 1: Loopa genom fakulteterna och skriv ut deras namn och chefer.
// Uppgift 2: Lägg till en ny student till students-arrayen och skriv ut det uppdaterade university-objektet.

university.faculties.forEach(function(faculty) {
    console.log(`Fakultet: ${faculty.name} och chef: ${faculty.head}`)
})

university.students.push({ name: "Sune", faculty: "Kemi" })
console.log(university)