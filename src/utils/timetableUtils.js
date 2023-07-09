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
  const maxAttempts = 2000; // Limite de tentatives

  // Insérer au moins une valeur dans chaque ligne
  for (let i = 0; i < matrice.length; i++) {
    const row = matrice[i];

    if (availableSubjects.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableSubjects.length);
      const subject = availableSubjects[randomIndex];

      const { duration, value } = subject;

      if (duration === 2) {
        row[0] = value;
        availableSubjects.splice(randomIndex, 1);
      } else if (duration === 4 && row.length >= 2) {
        row[0] = value;
        row[1] = value;
        availableSubjects.splice(randomIndex, 1);
      } else if (duration === 6 && row.length >= 3) {
        row[0] = value;
        row[1] = value;
        row[2] = value;
        availableSubjects.splice(randomIndex, 1);
      }
    }
  }

  // Réorganiser la matrice finale en utilisant l'algorithme de Fisher-Yates avec vérification des répétitions
  for (let i = 0; i < matrice.length; i++) {
    const row = matrice[i];
    let attempts = 0;

    while (hasDuplicates(row) && attempts < maxAttempts) {
      for (let j = row.length - 1; j > 0; j--) {
        const randomIndex = Math.floor(Math.random() * (j + 1));
        [row[j], row[randomIndex]] = [row[randomIndex], row[j]];
      }

      attempts++;
    }
  }

  return matrice;
}

// Vérifier les répétitions dans une ligne
function hasDuplicates(array) {
  const values = new Set();

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (values.has(value)) {
      return true;
    }

    values.add(value);
  }

  return false;
}
