function Vue (options){
    this._init(options)
}
Vue.prototype._init = function (options){
    this.$options = options
    this.$data = options.data

    observe(this.$data)
}
function observe(obj){

    Object.defineProperties(obj, key, {
        get(){
            return obj[key]
        },
        set(newValue){
            obj[key] = newValue
        },
    })

}
export function h (type, props, children)
export default Vue
