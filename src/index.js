const username = prompt('Enter you username');
const password = prompt('Enter you password');
const isRemember = confirm('Remember me?');

if (!username) {
  alert('Empty username!')
} else if (!password) {
  alert('Empty passwords!')
} else {
  if (username === 'admin') {
    const isValidPas = password === 'P@ssword1';
    if (isValidPas && isRemember) {
      alert('Hi, admin! Long session is active');
    } else if (isValidPas && !isRemember) {
      alert('Hi, admin');
    } else {
      alert('Incorrect admin password');
    }
  } else if (username === 'guest') {
      const isValidGuestPas = password === 'pass';
      if (isValidGuestPas && isRemember) {
        alert('Hi guest, long session is active');
      } else if (isValidGuestPas && !isRemember) {
        alert('Guest with short session');
      } else {
        alert('Incorrect guest pass');
      }
    } else {
    alert('Access denied');
  }
}

