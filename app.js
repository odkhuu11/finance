// Delgetstei ajillah controller
var uiController = (function () {

})();

// Sankhuutei ajillah controller
var financeController = (function () {
    
})();

// Eventtei ajillah controller
var appController = (function (uiCtrl, financeCtrl) {
    var ctrlAddItem = function () {
        // 1. oruulah ugugdliig delgetsees olj avna
        console.log("Delgetsees ugugdluu avah heseg");
        
        // 2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna

        // 3. Olj avsan ugugdluudee web deer tohiroh hesegt ni gargana.

        // 4. Tusviig tootsoolno.

        // 5. etssiin uldegdel, tootsoog delgetsend gargana.

        // console.log('clicked');
    }
    document.querySelector('.add__btn').addEventListener('click', function() {
        ctrlAddItem();
    });
    document.addEventListener('keypress', function(event) {
        // console.log("Tovch daragdlaa" + event.keyCode);
        if(event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
        // else console.log("Uur tovch darsan baina6" + event.keyCode);
        
        
        
    })
})(
    uiController, 
    financeController
    );
