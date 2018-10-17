new Vue({
    el: "#app",
    data: {
        name: "yaosai",
        age: 18,
        website: "http://www.baidu.com",
        websiteTag: "<a href='http://www.baidu.com'>绑定标签</a>",
        x: 0,
        y: 0,
        name1: "",
        age1: ""
    },
    methods: {
        greet: function (name) {
            return 'Good Mroning! ' + name;
        },
        add: function (sum) {
            this.age += sum;
        },
        sub: function (sum) {
            this.age -= sum;
        },
        // 获取鼠标所在处的x,y,赋值给x,y
        updateXY: function (event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY
        },
        stopMove: function (event) {
            event.stopPropagation();
        },
        alert: function () {
            alert("hello")
        },
        logName: function () {
            console.log("输入姓名")
        },
        logAge: function () {
            console.log("输入年龄")
        },
        // this.$refs,该标签获取注册的对象
        logName1: function () {
            this.name1 = this.$refs.name1.value;
        },
        logAge1: function () {
            this.age1 = this.$refs.age1.value;
        }
    }
})

// 属性绑定
