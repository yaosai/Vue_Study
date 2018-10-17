new Vue({
    el: "#app",
    data: {
        name: "yaosai",
        age: 18
    },
    methods: {
        greet: function (name) {
            return 'Good Mroning! '+name;
        }
    }
})