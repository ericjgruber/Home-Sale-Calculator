var vm = new Vue({
  el: '#homeselling',
  data: {
    heading: "What's My Profit?",
    homeprice: "Home Price",
    realtorfee: "Realtor fee (in percent)",
    mortgage: "Mortgage amount",
  },
  methods: {
    // Format the number for currency
    currencyFormat: function(num) {
      // As seen at https://blog.tompawlak.org/number-currency-formatting-javascript.
      return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    },
    // Calculate the profit from the sale
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
