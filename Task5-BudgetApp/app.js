var budgetController = (function () {

    var Expense = function (id, description, value, day) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.day = day;
    };
   var Income = function (id, description, value, day) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.day = day;
    };
    
    var calculateTotal = function(type) {
        var sum = 0;
        data.allItems[type].forEach(function(currentElement){
            sum += currentElement.value;
        });
        data.totals[type] = sum;
    };


    var data = {

        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }, 
        budget: 0,
       
    };
    return {
        addItem: function (type, desc, val, day) {
            var newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
           
            if (type === "exp") {
                newItem = new Expense(ID, desc, val, day);
            } else if (type === "inc") {
                newItem = new Income(ID, desc, val, day);
            }

            data.allItems[type].push(newItem);

            return newItem;

        },
        
     
        deleteItem: function(type, id) {
           
      
            ids = data.allItems[type].map(function(currentElement){
                
                return currentElement.id;
                
            });
            
            index = ids.indexOf(id);
          
            
            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }

        },
        
        calculateBudget: function() {
          
            calculateTotal('exp');
            calculateTotal('inc');
      
            data.budget = data.totals.inc - data.totals.exp;
            
           
            if (data.totals.inc > 0){ 
               
                data.percentage = Math.round( (data.totals.exp / data.totals.inc) * 100 );
                
            } else {
               
                data.percentage = -1;
                
            }
            
        },
        
              
        getBudget: function(){
        
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp
            }
        },
   
        testing: function () {
            console.log(data);
        }

    }

})();


var UIController = (function () {

       var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expenseContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        //percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        //expPercentageLabel: '.item__percentage',
        dateLabel: '.add_day'
    }; 
      
   
    var formatNumber = function(num, type) {
        var numSplit, int, dec;
        

        num = Math.abs(num);
        num = num.toFixed(2); 
     
        numSplit = num.split('.');
       
        int = numSplit[0];

        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
        }

       
        dec = numSplit[1];

        return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec; 

    };
 
    var nodeListForEach = function(list, callbackFn) {
                
                for (var i = 0; i < list.length; i++) {
                   
                    callbackFn(list[i], i);    
                    
                }
                
                
    };

    
    return {
        getInput: function () {

            return {
                type: document.querySelector(DOMstrings.inputType).value, 
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value),
                day: document.querySelector(DOMstrings.dateLabel).value
            };

        },

        addListItem: function (obj, type) {
            
            
            var html, newHtml, element;
            
           
            if (type === 'inc') {
                
                element = DOMstrings.incomeContainer;
               
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="add_day">%day%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
            } else if (type === 'exp') {
                
                element = DOMstrings.expenseContainer;
                
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="add_day">%day%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
                
            }
            
           
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            newHtml = newHtml.replace('%day%',obj.day);
            
           
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);  
        },
        
        deleteListItem: function(selectorID) {
           
            var el = document.getElementById(selectorID); 
            
            el.parentNode.removeChild(el);
                
        },
        
        clearFields: function() {
            
            var fields, fieldsArray;
            
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            
          
            fieldsArray = Array.prototype.slice.call(fields);
          
            fieldsArray.forEach(function(currentValue, index, array){
                    currentValue.value = "";
            });
            
           
            fieldsArray[0].focus();
            
        },
        
        displayBudget: function(obj) {
            var type;
            if (obj.budget > 0) {
                type = 'inc';
            } else {
                type = 'exp';
            }
         
        },
        
  
        
        changedType: function() {
          
            var fields = document.querySelectorAll(
                DOMstrings.inputType + ',' + 
                DOMstrings.inputDescription + ',' + 
                DOMstrings.inputValue + ',' +
                DOMstrings.dateLabel);
         
            
            nodeListForEach(fields, function(current){
                current.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMstrings.inputButton).classList.toggle('red');
            
        },
  
        getDOMstrings: function () {
            return DOMstrings;
        }

    };

})();


var controller = (function (budgetCntrl, UICntrl) {

    
    var setUpEventListeners = function () {

        var DOM = UICntrl.getDOMstrings();
        
        document.querySelector(DOM.inputButton).addEventListener('click', controlAddItem);

        document.addEventListener('keypress', function (event) {

            if (event.keyCode === 13 || event.which === 13) {
                controlAddItem();
            }

        });
  
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
 
        document.querySelector(DOM.inputType).addEventListener('change', UICntrl.changedType);
        
        
    };

    
     var updateBudget = function(){
        
        budgetCntrl.calculateBudget();
        var budget = budgetCntrl.getBudget();
        UICntrl.displayBudget(budget);
        
    };
 
    var controlAddItem = function () {
       
        var input, newItem;

        input = UICntrl.getInput();
  
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
            newItem = budgetCntrl.addItem(input.type, input.description, input.value, input.day);

            UICntrl.addListItem(newItem, input.type);

            UICntrl.clearFields();

            updateBudget();
        }

    };
    
    
    var ctrlDeleteItem = function(event){
        
        var itemID, splitID, type, ID;
        
      
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id; 
        
        
        if (itemID) {
           
            splitID = itemID.split('-');
            
            type = splitID[0];            
            ID = parseInt(splitID[1]); 
        }
        
      
        budgetCntrl.deleteItem(type, ID);
 
        UICntrl.deleteListItem(itemID);
     
        updateBudget();
        
  };

    return {
        init: function () {
                       
            
            UICntrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
            });
            setUpEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();