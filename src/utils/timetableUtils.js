export function generateTimetable(subjects) {
    const matrice = [
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""],
      ["", "", "", ""]
    ];
  
    const availableSubjects = [...subjects];
  
    for (let i = 0; i < matrice.length; i++) {
      let row = matrice[i];
      let j = 0;
  
      while (j < row.length && availableSubjects.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSubjects.length);
        const subject = availableSubjects[randomIndex];
  
        const { duration, value } = subject;
  
        if (duration === 2 && row[j] === "") {
          row[j] = value;
          availableSubjects.splice(randomIndex, 1);
          j++;
        } else if (duration === 4 && row[j] === "" && row[j + 1] === "") {
          row[j] = value;
          row[j + 1] = value;
          availableSubjects.splice(randomIndex, 1);
          j += 2;
        } else if (duration === 6 && row[j] === "" && row[j + 1] === "" && row[j + 2] === "") {
          row[j] = value;
          row[j + 1] = value;
          row[j + 2] = value;
          availableSubjects.splice(randomIndex, 1);
          j += 3;
        } else {
          j++;
        }
      }
    }
  
    return matrice;
  }
  