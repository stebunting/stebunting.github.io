function validate(type, value) {
  switch (type) {
    case 'name': {
      const re = /^[a-zA-ZÀ-ƶ '-]{1,}$/;
      return re.test(value);
    }

    case 'email': {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value);
    }

    case 'message':
      return value.length > 0;

    default:
      return false;
  }
}

export default validate;
