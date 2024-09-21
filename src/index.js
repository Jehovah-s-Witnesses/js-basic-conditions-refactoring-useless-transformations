const username = prompt('Enter you username');
const password = prompt('Enter you password');
const isRemember = confirm('Remember me?');

if (Boolean(!username)) {
  alert('Empty username!');
} else if (Boolean(!password)) {
  alert('Empty passwords!');
} else {
  if (username === 'admin') {
    if (password === 'P@ssword1') {
      if (Boolean(isRemember)) {
        alert('Hi, admin! Long session is active');
      } else {
        alert('Hi admin');
      }
    } else {
      alert('Incorrect admin password');
    }
  } else {
    if (username === 'guest') {
      if (password === 'pass') {
        if (Boolean(isRemember)) {
          alert('Hi guest, long session is active');
        } else {
          alert('Guest with short session');
        }
      } else {
        alert('Incorrect guest pass');
      }
    } else {
      alert('Access denied');
    }
  }
}
