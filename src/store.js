const Storage_key = 'todos-vuejs'
export default {
    // fetch() {
    //     return JSON.parse(window.localStorage.getItems(Storage_key) || '[]')
    // },
    // save(items) {
    //     window.localStorage.setItem(Storage_key, JSON.stringify(items))
    // },
    fetch: function () {
        return JSON.parse(window.localStorage.getItem(Storage_key) || '[]')
    },
    save: function (items) {
        window.localStorage.setItem(Storage_key, JSON.stringify(items))
    }
}