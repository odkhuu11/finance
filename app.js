// Delgetstei ajillah controller
var uiController = (function () {

    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
    };

    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            }
        },
        getDOMstrings : function() {
            return DOMstrings;
        }
    }
})();

// Sankhuutei ajillah controller
var financeController = (function () {
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }
      
      var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
      }

    //   var incomes = [];
    //   var expenses = [];
    //   var totalIncomes = [];
    //   var totalExpenses = [];

      var data ={
          allItems: {
              inc: [],
              exp : []
          },
          totalItems: {
            inc : 0,
            exp : 0,
        }
      };
})();

// Eventtei ajillah controller
var appController = (function (uiCtrl, financeCtrl) {
    
    var ctrlAddItem = function () {
        // 1. oruulah ugugdliig delgetsees olj avna.

        console.log(uiController.getInput());
            
        
        // 2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna

        // 3. Olj avsan ugugdluudee web deer tohiroh hesegt ni gargana.

        // 4. Tusviig tootsoolno.

        // 5. etssiin uldegdel, tootsoog delgetsend gargana.

        // console.log('clicked');
    }
    var setupEventListeners = function () {

        var DOM = uiCtrl.getDOMstrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function() {
            ctrlAddItem();
        });
        document.addEventListener('keypress', function(event) {
            // console.log("Tovch daragdlaa" + event.keyCode);
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    }

    return {
        init: function() {
            console.log("programm started...");
            setupEventListeners();
        }
    }
})(uiController, financeController);

appController.init();
