window.onload = function () {
    new Vue({

        el: "#app",
        data: {
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    });
    var app1 = new Vue({

        el:'#app1',
        data : {
            message:'Renverser moi haha',
            link:'google.com'
        }
    });

}

