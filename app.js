new Vue({
    el: "#app",
    data: {
        name: "yaosai",
        age: 18,
        website:"http://www.baidu.com",
        websiteTag:"<a href='http://www.baidu.com'>绑定标签</a>"
    },
    methods: {
        greet: function (name) {
            return 'Good Mroning! '+name;
        }
    }
})

// 属性绑定
