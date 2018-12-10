var bind = new Vue({
    el: '#bind',
    data: {
        list: [],
        inputValue: ''
    },
    methods: {
        handleBtnClick: function () {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    }
})

// component实现组件注册
Vue.component("TodoItem", {
    props: ['content'],
    template: "<li>{{content}}</li>"
})

var update = new Vue({
    el: '#update',
    data: {
        list: [],
        inputValue: ''
    },
    methods: {
        handleBtnClick: function () {
            this.list.push(this.inputValue)
            this.inputValue = ''
        }
    }
})