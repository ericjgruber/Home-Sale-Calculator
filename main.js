var vm = new Vue({
  el: '#homeselling',
  data: {
    heading: "What's My Profit?",
    homeprice: "Home Price",
    realtorfee: "Realtor fee (in percent)",
    mortgage: "Mortgage amount",
  },
  methods: {
    currencyFormat: function(num) {
      // As seen at https://blog.tompawlak.org/number-currency-formatting-javascript.
      return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    },
    calculateProfit: function(num) {
      var price = document.getElementById('price').value;
      var fee = document.getElementById('fee').value / 100;
      var mortgage = document.getElementById('mortgage').value;

      var takehome = (price - (price * fee));
      var profit = takehome - mortgage;
      document.getElementById('takehome').innerHTML = '<p>Your takehome money after the Realtor fee will be <strong>' + vm.currencyFormat(takehome) + '</strong>.</p>';
      document.getElementById('result').innerHTML = '<p>Your profit after paying off your mortgage will be <strong>' + vm.currencyFormat(profit) + '</strong>.</p>';
      return false;
    }
  }
});
