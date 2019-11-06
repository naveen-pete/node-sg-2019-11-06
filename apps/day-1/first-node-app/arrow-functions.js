var obj = {
  greeting: 'Good morning!',

  greet: function (name) {
    // console.log(name + ' ' + this.greeting);
    // var self = this;
    setTimeout(() => {
      console.log(name + ' ' + this.greeting);
    }, 1000);
  }

};

obj.greet('Krish');
obj.greet('Ram');